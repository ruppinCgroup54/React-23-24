import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from 'react';

import { Autocomplete, Grid, TextField, Box, Container, Paper, Button, Typography } from '@mui/material';

import useValide from '../Hooks/useValide';
import PasswordTextField from './PasswordTextField';
import AvatarImage from "./AvatarImage";
import AlertModal from "./AlertModal";
import { allCities } from '../assets/cities';
import { UsersContext } from "./UsersContextProvider";

export default function Update({ emailFromProp, isCurrent = false }) {

    const formRef = useRef();

    const { updateUser, usersList } = useContext(UsersContext);

    const navigate = useNavigate();

    //using custom hook of text filed for validation handling 

    const [firstName, firstNameError, firstNameText, setFirstName] = useValide('name');
    const [lastName, lastNameError, lastNameText, setLastName] = useValide('name');
    const [image, imageError, imageText, setImage] = useValide('image');
    const [dateOB, dateError, dateText, setDate] = useValide('date');
    const [city, cityError, , setCity] = useValide('city');
    const [street, streetError, streetText, setStreet] = useValide('street');
    const [houseNumber, houseError, houseText, setHouse] = useValide('houseNumber');
    const [userName, userNameError, userNameText, setUserName] = useValide('userName');
    const [email, emailError, emailText, setEmail] = useValide('userName');

    const [options, setOptions] = useState([])

    const [openModal, setOpenModal] = useState(false);

    //get the user to update from 
    const currentEmail = useParams();
    const userToUpdate = usersList.find(userLC => userLC['email'] === currentEmail.email || userLC['email'] === emailFromProp);

    //update the form fields after geting the data
    useEffect(() => {
        setFirstName(userToUpdate.firstName)
        setLastName(userToUpdate.lastName)
        setImage(userToUpdate.image)
        setDate(userToUpdate.dateOB)
        setCity(userToUpdate.city)
        setStreet(userToUpdate.street)
        setHouse(userToUpdate.houseNumber)
        setUserName(userToUpdate.userName)
        setEmail(userToUpdate.email)

    }, [])

    useEffect(() => {
        setOptions(allCities)
    }, [city])

    const handleSubmit = (e) => {

        let updatedUser = {
            password: new FormData(formRef.current).get('password'),
            firstName,
            lastName,
            image,
            dateOB,
            city,
            street,
            houseNumber,
            userName,
            email
        }

        updateUser(updatedUser, isCurrent);
        setOpenModal(true);

        !isCurrent && navigate('/systemAdmin')

        e.stopPropagation();
        e.preventDefault();

    }

    return (
        <>

            <Container component="main" maxWidth="sm" >
                <Paper elevation={6} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center" mb={2}>
                        Update details
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit} ref={formRef} >
                        <AvatarImage currentImg={userToUpdate.image} sendImage={setImage}></AvatarImage>
                        <br />
                        <Grid container spacing={3} >
                            {/* User name */}
                            <Grid item xs={12}>

                                <TextField required fullWidth
                                    autoComplete='username' type='text' id="userName" name="userName" label="User name"
                                    error={userNameError}
                                    helperText={userNameText}
                                    onChange={(e) => setUserName(e.currentTarget.value)}
                                    value={userName}
                                />
                            </Grid>

                            {/* Email */}
                            <Grid item xs={12}>
                                <TextField fullWidth required disabled
                                    autoComplete="email" type='email' id="email" name="email" label="Enter your email"
                                    error={emailError}
                                    helperText={emailText}
                                    onChange={(e) => setEmail(e.currentTarget.value)}
                                    value={email}
                                />

                            </Grid>

                            {/* Password */}
                            <Grid item xs={12} sm={6}>
                                <PasswordTextField initialValue={userToUpdate.password} />
                            </Grid>

                            {/* Password confirm */}
                            <Grid item xs={12} sm={6}>
                                <PasswordTextField isConfirm={true} formToCheck={formRef} initialValue={userToUpdate.password} />
                            </Grid>
                            {/* First name */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First name"
                                    fullWidth
                                    autoComplete="given-name"
                                    value={firstName}
                                    error={firstNameError}
                                    helperText={firstNameText}
                                    onChange={(e) => setFirstName(e.currentTarget.value)}
                                />
                            </Grid>

                            {/* Last name */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last name"
                                    fullWidth
                                    autoComplete="family-name"
                                    value={lastName}
                                    error={lastNameError}
                                    helperText={lastNameText}
                                    onChange={(e) => setLastName(e.currentTarget.value)}
                                />
                            </Grid>

                            {/* Date of birth */}
                            <Grid item xs={12} >
                                <TextField
                                    required fullWidth
                                    type='date'
                                    id='DateOB'
                                    name='dateOB'
                                    label='Date of birth'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    autoComplete='bday'
                                    error={dateError}
                                    helperText={dateText}
                                    onChange={(e) => setDate(e.currentTarget.value)}
                                    value={dateOB}
                                />
                            </Grid>

                            {/* city  */}
                            <Grid item xs={12} md={4}>
                                <Autocomplete
                                    autoHighlight
                                    fullWidth
                                    required
                                    id="city"
                                    name='city'
                                    isOptionEqualToValue={(option, value) => option.name === value.name}
                                    options={options.sort((a, b) => -b.name[0].localeCompare(a.name[0]))}
                                    groupBy={(option) => option.name[0]}
                                    getOptionLabel={(option) => option.name}
                                    renderInput={(params) => <TextField {...params} label="Cities" />}
                                    onChange={(e, val) => setCity(val)}
                                    value={{ name: city }}
                                />
                            </Grid>

                            {/* street */}
                            <Grid item xs={12} md={4}>
                                <TextField
                                    required
                                    id="street"
                                    label="Street"
                                    name='street'
                                    fullWidth
                                    autoComplete="street-address"
                                    value={street}
                                    error={streetError}
                                    helperText={streetText}
                                    onChange={(e) => setStreet(e.currentTarget.value)}
                                />
                            </Grid>

                            {/* house number */}
                            <Grid item xs={12} md={4} >
                                <TextField required fullWidth type='number'
                                    label='House number'
                                    name='houseNumber'
                                    inputProps={{ min: 0 }}
                                    value={houseNumber}
                                    error={houseError}
                                    helperText={houseText}
                                    onChange={(e) => setHouse(e.currentTarget.value)}
                                />
                            </Grid>

                            <Button type='submit' variant="contained" sx={{ my: 3, mx: 'auto' }} >
                                Save changes
                            </Button>

                        </Grid>
                    </Box>
                </Paper>
            </Container>
            <AlertModal toggle={{ openModal, setOpenModal }} text={'User has been updated'} isGood={true}></AlertModal>
            {/* <TransitionsModal toggle={{ openModal, setOpenModal }} text={'User already exists'} /> */}
        </>
    )
}
