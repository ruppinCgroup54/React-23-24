import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';


export default function RegisterDataForm({ sendData }) {

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCon, setShowPassworCon] = useState(false);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const [userName, setUserName] = useState({
    value: "",
    valid: true,
    message: 'User name can contain only latin letters, numbers and special charectors'
  });
  const [email, setEmail] = useState({
    value: "",
    valid: true,
    message: 'Insert valid email'
  });
  const [password, setPassword] = useState({
    value: "",
    valid: true,
    message: 'Password must contain at One number one uppercase letter and one special character'
  });
  const [passwordConf, setPasswordConf] = useState(true);
  const [userData, setUserData] = useState({});


  // handlers section
  const userNameHandle = (e) => {
    let input = e.currentTarget;
    let newState = {
      valid: input.checkValidity() || input.value === "",
      value: input.value
    };

    addDataToUser({ userName: input.value });

    let prev = userName;
    setUserName({ ...prev, ...newState });

  }

  const emailHandle = (e) => {
    let input = e.currentTarget;

    let newState = {
      valid: input.checkValidity() || input.value === "",
      value: input.value,
      message: input.validationMessage,
    };

    addDataToUser({ email: input.value });


    let prev = email;

    setEmail({ ...prev, ...newState });
  }

  const passwordHandle = (e) => {

    let input = e.currentTarget;

    let newState = {
      valid: input.checkValidity(),
      value: input.value,
    };



    if (input.value.length < 7) {
      newState.message = 'Password minimun lengh must be 7';
    }

    addDataToUser({ password: input.value });


    let prev = password;

    setPassword({ ...prev, ...newState });

  }

  const addDataToUser = (attr) => {

    let tempUser = { ...userData, ...attr };
    setUserData(tempUser);
    sendData(tempUser)

  }


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
            variant="outlined"
            inputProps={{
              pattern: '^[a-zA-Z0-9$@$!%*?&#^-_.+]+$'
            }}
            error={!userName.valid}
            helperText={!userName.valid && userName.message}
            onChange={userNameHandle}
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
            error={!email.valid}
            helperText={!email.valid && email.message}
            onChange={emailHandle}
          />

        </Grid>

        {/* Password */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel required htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete='new-password'
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
              inputProps={{
                maxLength: 12,
                pattern: `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.* ).{7,12}$`

              }}
              error={!password.valid && password.value !== ""}
              helpertext={!password.valid ? password.message : ""}
              onBlur={passwordHandle}
            />
            <FormHelperText error id="accountId-error">
              {!password.valid ? password.message : ""}
            </FormHelperText>

          </FormControl>

        </Grid>

        {/* Password confirm */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel required htmlFor="passwordConfirm">Password confirm</InputLabel>
            <OutlinedInput
              id="passwordConfirm"
              label="Password confirm"
              type={showPasswordCon ? 'text' : 'password'}
              autoComplete='new-password'
              error={!passwordConf}
              onBlur={(e) => setPasswordConf(e.currentTarget.value === password.value)}
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
            <FormHelperText error>
              {!passwordConf && `Password doesn't match`}
            </FormHelperText>
          </FormControl>

        </Grid>

      </Grid>
    </>
  );
}
RegisterDataForm.propTypes = {
  sendData: PropTypes.func
};