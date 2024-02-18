
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
import { Popper } from '@mui/material';


const steps = ['User details', 'User identifier'];


export default function Register() {

  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);




  const getUserData = (data) => {
    let prev = userData;

    setUserData({ ...prev, ...data })
    console.log('data', prev)
  }

  const forms = [
    <UserDetailsForm key={1} sendData={getUserData} />,
    <RegisterDataForm key={2} sendData={getUserData} />
  ]

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = (e) => {

    console.log(e.currentTarget);

    setOpen(false)
    setAnchorEl(e.currentTarget);

    activeStep === 1 && addUserToLS(userData);

    setActiveStep(prev => prev + 1);

    e.stopPropagation();
    e.preventDefault();

  }

  const addUserToLS = (user) => {

    if (localStorage.getItem('users') !== null) {

      let tempUsers = JSON.parse(localStorage.getItem('users'));

      if (!tempUsers.find(u => u.userName == user.userName)) {
        tempUsers = [...tempUsers, user]
        localStorage.setItem('users', JSON.stringify(tempUsers));

        sessionStorage.setItem('currentUser', user)
      }
      else {
        console.log('User allready exists')
        setActiveStep(prev => prev - 1);
        setOpen(true)

      }
    }
    else {
      localStorage.setItem('users', JSON.stringify([user]));

    }

  }

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined"  elevation={6} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Registertion form
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Regesration was successfull
              </Typography>
              <Typography variant="subtitle1">
                <Button variant="contained" sx={{ mt: 3, ml: 1 }}>continue</Button>
              </Typography>
            </>
          ) : (
            <Box component='form' onSubmit={handleSubmit} >
              {forms[activeStep]}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}> Back </Button>
                )}
                <Popper id="regstratin-problem" open={open} anchorEl={anchorEl} >
                  <Typography component={'h4'}>User Already exists</Typography>
                </Popper>

                <Button type='submit' variant="contained" sx={{ mt: 3, ml: 1 }} >
                  {activeStep === steps.length - 1 ? 'Register' : 'Next'}
                </Button>
              </Box>
            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
}




