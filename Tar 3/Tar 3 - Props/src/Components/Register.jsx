
import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Autocomplete, Grid, TextField,Box,Container,Paper, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import useValide from '../Hooks/useValide';
import PasswordTextField from './PasswordTextField';
import { allCities } from '../assets/cities';
import { UsersContext } from './UsersContextProvider';
import AlertModal from './AlertModal';




export default function Register() {

  const formRef = useRef();

  const { registerUser } = useContext(UsersContext);

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

  const validToSubmit = firstNameError || lastNameError || imageError || dateError || cityError || streetError || houseError || userNameError || emailError;

  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.stopPropagation();
    e.preventDefault();

    let newUser = {
      password: new FormData(e.currentTarget).get('password'),
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

    //if register return false show modal of fail
    registerUser(newUser) ? navigate('/profile') : setOpenModal(true);
  }



  return (
    <>

      <Container component="main" maxWidth="sm" >
        <Paper elevation={6} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, position: 'relative' }}>
          <Link to={'/'} style={{ position: 'absolute', left: 5, top: 5, }}><ArrowBackIcon fontSize='large' color='primary'></ArrowBackIcon> </Link>
          <Typography component="h1" variant="h4" align="center" my={3}>
            Registertion form
          </Typography>
          <Box component='form' onSubmit={handleSubmit} ref={formRef} >
            <Grid container spacing={3} >
              {/* User name */}
              <Grid item xs={12}>

                <TextField 
                  autoComplete='username' type='text' id="userName" name="userName" label="User name"
                  error={userNameError}
                  helperText={userNameText}
                  onChange={(e) => setUserName(e.currentTarget.value)}
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12}>
                <TextField 
                  autoComplete="email" type='email' id="email" name="email" label="Enter your email"
                  error={emailError}
                  helperText={emailText}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </Grid>

              {/* Password */}
              <Grid item xs={12} sm={6}>
                <PasswordTextField />
              </Grid>

              {/* Password confirm */}
              <Grid item xs={12} sm={6}>
                <PasswordTextField isConfirm={true} formToCheck={formRef} />
              </Grid>

              {/* First name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First name"
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
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  autoComplete="family-name"
                  value={lastName}
                  error={lastNameError}
                  helperText={lastNameText}
                  onChange={(e) => setLastName(e.currentTarget.value)}
                />
              </Grid>

              {/* Image */}
              <Grid item xs={12} sm={6}>
                <TextField
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
                  error={imageError}
                  helperText={imageText}
                  onChange={setImage}
                />
              </Grid>

              {/* Date of birth */}
              <Grid item xs={12} sm={6}>
                <TextField
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
                />

              </Grid>

              {/* city  */}
              <Grid item xs={12} md={4}>
                <Autocomplete
                  autoHighlight
                  id="city"
                  name='city'
                  options={allCities.sort((a, b) => -b.name[0].localeCompare(a.name[0]))}
                  groupBy={(option) => option.name[0]}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => <TextField {...params} label="Cities" />}
                  onInputChange={(e, val) => setCity(val)}

                />
              </Grid>

              {/* street */}
              <Grid item xs={12} md={4}>
                <TextField
                  id="street"
                  label="Street"
                  name='street'
                  autoComplete="street-address"
                  value={street}
                  error={streetError}
                  helperText={streetText}
                  onChange={(e) => setStreet(e.currentTarget.value)}
                />
              </Grid>

              {/* house number */}
              <Grid item xs={12} md={4} >
                <TextField type='number'
                  label='House number'
                  name='houseNumber'
                  inputProps={{ min: 0 }}
                  value={houseNumber}
                  error={houseError}
                  helperText={houseText}
                  onChange={(e) => setHouse(e.currentTarget.value)}
                />


              </Grid>
              <Button type='submit' disabled={validToSubmit} variant="contained" sx={{ my: 3, mx: 'auto' }} >
                Register
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Container>
      {/* alert modal if there is a user with same email or user name */}
      <AlertModal toggle={{ openModal, setOpenModal }} text={'User already exists'} isGood={false} />
    </>
  );
}



