import { json, useLocation, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Autocomplete, FilledInput, Grid, TextField } from '@mui/material';

import useValide from '../Hooks/useValide';
import PasswordTextField from './PasswordTextField';
import { allCities } from '../assets/cities';
import Modal from './TransitionsModal';
import TransitionsModal from './TransitionsModal';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AvatarImage from "./AvatarImage";

export default function Update() {

    const formRef = useRef();

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


    // handle password confirm

    const [openModal, setOpenModal] = useState(false);

    const navigate = useNavigate();

    const currentEmail = useParams();
    let users = JSON.parse(localStorage.getItem("users"));
    const userToUpdate = users.find(userLC => userLC['email'] === currentEmail.email);
    console.log(userToUpdate);

    useEffect(() => {
        setFirstName(userToUpdate.firstName)
        setLastName(userToUpdate.lastName)
        //setImage(userToUpdate.image)
        setDate(userToUpdate.dateOB)
        setCity(userToUpdate.city)
        setStreet(userToUpdate.street)
        setHouse(userToUpdate.houseNumber)
        setUserName(userToUpdate.userName)
        setEmail(userToUpdate.email)
    }, [])
    


    const handleSubmit = (e) => {

        let newUser = {
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
        
        UpdateUser(newUser);
        //if register return false show modal of fail
        //setOpenModal(!RegisterUser(newUser));

        e.stopPropagation();
        e.preventDefault();

    }

    const UpdateUser = (user) => {

        //check is users existss
        if (localStorage.getItem('users') !== null) {

            let tempUsers = JSON.parse(localStorage.getItem('users'));

            //check if the current user isn't exists
            if (!tempUsers.find(u => u.userName == user.userName || u.email == user.email)) {
                tempUsers = [...tempUsers, user]
                localStorage.setItem('users', JSON.stringify(tempUsers));

                //if the user mange to register we activet sign-in function
                //need to import sign in function
                sessionStorage.setItem('currentUser', JSON.stringify(user));

                navigate('profile', { state: user })

            }
            else {
                console.log('User allready exists')
                return false;
            }
        }
        else {
            localStorage.setItem('users', JSON.stringify([user]));
            navigate('/profile', { state: user })
        }
        return true;
    }


    return (
        <>

            <Container component="main" maxWidth="sm" >
                <Paper elevation={6} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center" mb={2}>
                        Update details
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit} ref={formRef} >
                        <AvatarImage currentImg={userToUpdate.image}></AvatarImage>
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
                                <TextField fullWidth required
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
                                <PasswordTextField isConfirm={true} formToCheck={formRef} initialValue={userToUpdate.password}/>
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

                            {/* Image
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth required
                                    type='file'
                                    id='file'
                                    name='image'
                                    label='Image'
                                    inputProps={{
                                        accept: "image/jpg, image/jpeg"
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={image}
                                    error={imageError}
                                    helperText={imageText}
                                    onChange={setImage}
                                />
                            </Grid> */}

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
                                    autoComplete={false}
                                    fullWidth
                                    required
                                    id="city"
                                    name='city'
                                    options={allCities.sort((a, b) => -b.name[0].localeCompare(a.name[0]))}
                                    groupBy={(option) => option.name[0]}
                                    getOptionLabel={(option) => option.name}
                                    renderInput={(params) => <TextField {...params} label="Cities" />}
                                    onInputChange={(e, val) => setCity(val)}
                                    onChange={(e) => setCity(e.currentTarget.value)}
                                    // inputValue={city}
                                    //value={city}
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
            <TransitionsModal toggle={{ openModal, setOpenModal }} text={'User already exists'} />
        </>
    )
}
