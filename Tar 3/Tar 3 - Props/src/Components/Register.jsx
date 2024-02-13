
// export default function Register() {









//   return (
//     <form className="row g-3 w-75 m-auto">

//       <div className="col-md-12 ">
//         <div className="input-group mb-3 flex-nowrap ">
//           <span className="input-group-text">@</span>
//           <div className="form-floating flex-grow-1 ">
//             <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
//             <label htmlFor="inputEmail">Email</label>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-6">
//         <div className="input-group mb-3 flex-nowrap">
//           <span className="input-group-text">*</span>
//           <div className="form-floating flex-grow-1">
//             <input type="password" className="form-control" id="inputPass" placeholder="Password" autoComplete="current-password" />
//             <label htmlFor="inputPass">Password</label>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-6">
//         <div className="input-group mb-3 flex-nowrap">
//           <span className="input-group-text">*</span>
//           <div className="form-floating flex-grow-1">
//             <input type="password" className="form-control" id="inputConformPass" placeholder="Password" />
//             <label htmlFor="inputConformPass"> Conform Password</label>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-4">
//         <div className="input-group mb-3 flex-nowrap">
//           <span className="input-group-text">*</span>
//           <div className="form-floating flex-grow-1 ">
//             <input type="text" className="form-control" id="inputFName" placeholder="First name" />
//             <label htmlFor="inputFName"> First name</label>
//           </div>
//         </div>
//       </div>


//       <div className="col-md-4">
//         <div className="input-group mb-3 flex-nowrap">
//           <span className="input-group-text">*</span>
//           <div className="form-floating flex-grow-1">
//             <input type="text" className="form-control" id="inputUserName" maxLength={60} placeholder="User Name" pattern="" />
//             <label htmlFor="inputUserName"> User Name</label>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-4">
//         <div className="form-floating ">
//           <input type="date" className="form-control" id="inputDOB" placeholder="User Name" />
//           <label htmlFor="inputDOB"> Date of birth</label>
//         </div>
//       </div>


//       <div class="input-group mb-3">
//         <label class="input-group-text" for="inputGroupFile01">Upload image</label>
//         <input type="file" class="form-control" id="inputGroupFile01" />
//       </div>

//       <div className="col-md-4">
//         <div className="form-floating ">

//           <input list="inputCity" className="form-control" name="city" />
//           <label htmlFor="city" className="form-label">City</label>

//           <datalist id="inputCity" >
//             <option value='...' />
//           </datalist>
//         </div>
//       </div>

//       <div className="col-md-4">
//         <div className="form-floating ">
//           <input id="inputStreet" className="form-control" name="street" placeholder="Street" />
//           <label htmlFor="street" >Street</label>
//         </div>
//       </div>
//       <div className="col-md-4">
//         <div className="form-floating ">
//           <input type='number' id="inputStreet" className="form-control" name="HouseNumber" placeholder="House number" />
//           <label htmlFor="HouseNumber" >House Number</label>
//         </div>
//       </div>


//       <div className="col-12">
//         <button type="submit" className="btn btn-primary">Sign in</button>
//       </div>
//     </form>
//   )
// }


import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, FormControl, FormControlLabel, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';




const steps = ['User identifier', 'User details', 'Address',];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <RegisterDataForm />;
    case 1:
      return <UserDetailsForm />
    case 2:
      return <AddressForm />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Register() {
  const [activeStep, setActiveStep] = useState(0);


  const handleNext = () => {

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };



  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
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
            <Box component="form" noValidate>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
}



function RegisterDataForm() {

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCon, setShowPassworCon] = useState(false);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        User Detailes
      </Typography>
      <Grid container spacing={3}>

        {/* User name */}
        <Grid item xs={12}>
          <TextField
            required
            inputProps={{
              pettern: '^[a-zA-Z0-9$@$!%*?&#^-_.+]+$',
            }}
            type='text'
            id="userName"
            name="userName"
            label="User name"
            fullWidth
            autoComplete="User name"
            variant="outlined"

          />
        </Grid>

        {/* Email */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="email"> Enter your email</InputLabel>
            <OutlinedInput
              inputProps={{
                'type': 'email',
              }}
              id="email"
              name="email"
              label="Enter your email"
              autoComplete="shipping address-line2"
              variant="outlined"
              onBlur={(e) => console.log(e.currentTarget.checkValidity())}
            />
          </FormControl>
        </Grid>

        {/* Password */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((show) => !show)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

        </Grid>

        {/* Password confirm */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="passwordConfirm">Password</InputLabel>
            <OutlinedInput
              id="passwordConfirm"
              label="Password confirm"
              type={showPasswordCon ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassworCon((show) => !show)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPasswordCon ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

        </Grid>

      </Grid>
    </>
  );
}

function UserDetailsForm() {

  return (
    <Grid container spacing={3}>
      {/* First name */}
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First name"
          fullWidth
          autoComplete="given-name"
          variant="outlined"
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
          variant="outlined"
        />
      </Grid>

      {/* Image */}
      <Grid item xs={12} sm={6}>
        <TextField
          id="state"
          name="state"
          label="State/Province/Region"
          fullWidth
          variant="outlined"
        />
      </Grid>

      {/* Date of birth */}
      <Grid item xs={12} sm={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Basic date picker" />
        </LocalizationProvider>
      </Grid>

    </Grid>

  )
}

function AddressForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <OutlinedInput type='number' variant='outlined' fullWidth />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </>
  );
}

