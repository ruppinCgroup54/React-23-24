import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import useValide from '../Hooks/useValide';
import PasswordTextField from './PasswordTextField';


export default function RegisterDataForm({ sendData }) {
  //using custom hook of text filed for validation handling
  const [userName, userNameError, userNameText, setUserName] = useValide('userName');
  const [email, emailError, emailText, setEmail] = useValide('userName');

  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState(false);


  //send user data to main register component on unmount
  useEffect(() => {
    return () => {
      let userObj = {
        userName,
        email,
        password,
      }
      sendData(userObj);

    }
  }, [])


  return (
    <>
      <Typography variant="h6" gutterBottom>
        User Detailes
      </Typography>
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

      </Grid>
    </>
  );
}
RegisterDataForm.propTypes = {
  sendData: PropTypes.func
};