
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


const steps = ['User details', 'User identifier'];


export default function Register() {

  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState({})

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

    setActiveStep(activeStep + 1);
    e.stopPropagation();
    e.preventDefault()

  }


  

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Register
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
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </>
          ) : (
            <Box component='form' onSubmit={handleSubmit} >
              {forms[activeStep]}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}> Back </Button>
                )}

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




