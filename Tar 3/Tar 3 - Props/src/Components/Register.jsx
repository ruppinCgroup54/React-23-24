
import { useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UserDetailsForm from './UserDetailsForm';
import RegisterDataForm from './RegisterDataForm';
import { Autocomplete, Grid, Popper, TextField } from '@mui/material';
import useValide from '../Hooks/useValide';
import PasswordTextField from './PasswordTextField';
import { allCities } from '../assets/cities';


const steps = ['User details', 'User identifier'];


export default function Register() {

  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState({});


  //using custom hook of text filed for validation handling
  const [firstName, firstNameError, firstNameText, setFirstName] = useValide('name');
  const [lastName, lastNameError, lastNameText, setLastName] = useValide('name');
  const [image, imageError, imageText, setImage] = useValide('image');
  const [dateOB, dateError, dateText, setDate] = useValide('date');
  const [city, , , setCity] = useValide('city');
  const [street, streetError, streetText, setStreet] = useValide('street');
  const [house, houseError, houseText, setHouse] = useValide('houseNumber');
  const [userName, userNameError, userNameText, setUserName] = useValide('userName');
  const [email, emailError, emailText, setEmail] = useValide('userName');

  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState(false);

  const getUserData = (data) => {
    let prev = userData;

    setUserData({ ...prev, ...data })
    console.log('data', userData)
  }

  const forms = [
    <UserDetailsForm key={1} sendData={getUserData} />,
    <RegisterDataForm key={2} sendData={getUserData} />,

  ]

  const handleSubmit = (e) => {
    RegisterUser(userData);

    e.stopPropagation();
    e.preventDefault();

  }

  const RegisterUser = (user) => {

    if (localStorage.getItem('users') !== null) {

      let tempUsers = JSON.parse(localStorage.getItem('users'));

      if (!tempUsers.find(u => u.userName == user.userName)) {
        tempUsers = [...tempUsers, user]
        localStorage.setItem('users', JSON.stringify(tempUsers));

        sessionStorage.setItem('currentUser', user)
      }
      else {
        console.log('User allready exists')
        
      }
    }
    else {
      localStorage.setItem('users', JSON.stringify([user]));

    }

  }

  return (
    <>

      <Container component="main" maxWidth="sm" >
        <Paper elevation={6} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center" mb={2}>
            Registertion form
          </Typography>
          <Box component='form' onSubmit={handleSubmit} >
            <Grid container spacing={3} >
              {/* User name */}
              <Grid item xs={12}>
                <TextField required
                  type='text'
                  id="userName"
                  name="userName"
                  label="User name"
                  fullWidth
                  autoComplete="username"
                  error={userNameError}
                  helperText={userNameText}
                  onChange={(e) => setUserName(e.currentTarget.value)}
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  type='email'
                  id="email"
                  name="email"
                  label="Enter your email"
                  autoComplete="email"
                  error={emailError}
                  helperText={emailText}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />

              </Grid>

              {/* Password */}
              <Grid item xs={12} sm={6}>
                <PasswordTextField sendPass={setPassword} />
              </Grid>

              {/* Password confirm */}
              <Grid item xs={12} sm={6}>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password confirm"
                  type='password'
                  autoComplete="current-password"
                  onChange={(e) => { setPasswordConf(e.target.value !== password) }}
                  error={passwordConf}
                  helperText={passwordConf && "Password dosen't match"}
                />

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

              {/* Image */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth required
                  type='file'
                  id='file'
                  name='file'
                  label='Image'
                  inputProps={{
                    accept: "image/jpg, image/jpeg"
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  // value={imageVal}
                  error={imageError}
                  helperText={imageText}
                  onChange={setImage}
                />
              </Grid>

              {/* Date of birth */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required fullWidth
                  type='date'
                  id='DateOB'
                  name='DateOB'
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
                  fullWidth
                  required
                  id="city"
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
                  required
                  id="street"
                  label="Street"
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
                  inputProps={{ min: 0 }}
                  value={house}
                  error={houseError}
                  helperText={houseText}
                  onChange={(e) => setHouse(e.currentTarget.value)}
                />


              </Grid>
              <Button type='submit' variant="contained" sx={{ my: 3, mx: 'auto' }} >
                Register
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
}



