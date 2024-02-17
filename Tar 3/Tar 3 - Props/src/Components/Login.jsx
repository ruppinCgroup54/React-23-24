import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


import Image from '../images/users.jpg';
import { useState } from 'react'


export default function Login() {

  const [userName, setUserName] = useState({
    value: "",
    valid: true
  });
  const [password, setPassword] = useState({
    value: "",
    valid: true
  });

  const [eye, setEye] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let user = {
      userName: data.get('userName'),
      password: data.get('password'),
    };
    localStorage.setItem("users", JSON.stringify([user]));
    loginUser(user);

  };

  const loginUser = (user) => {

    let usersFromLocal = JSON.parse(localStorage.getItem("users"));
    let exist = usersFromLocal.some(user => user['userName'] === user.userName && user['password'] === user.password);
    if (exist) {
      sessionStorage.setItem("currentUser", JSON.stringify(user));
    }
  };

  const chgUserName = (event) => {
    let valid = event.currentTarget.checkValidity();
    if (valid) {
      setUserName({
        value: event.target.value,
        valid
      })
    }
    else {
      let prev = userName;
      setUserName({ ...prev, valid })
    };
    console.log(userName);
  };

  const chgPassword = (event) => {
    let valid = event.currentTarget.checkValidity();
    if (valid) {
      setPassword({
        value: event.currentTarget.value,
        valid
      })
    }
    else {
      let prev = password;
      setPassword({ ...prev, valid })
    };
    console.log(password);
  };

  const chgEye = () => {
    setEye(!eye);
  }

  return (
    <Grid container component="main" >
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User name"
              name="userName"
              autoComplete="userName"
              autoFocus
              onChange={chgUserName}
              error={!userName.valid}
              inputProps={{
                maxLength: 60,
                pattern: "^[A-Za-z0-9]+$"
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={eye ? "password" : "text"}
              id="password"
              autoComplete="current-password"
              onChange={chgPassword}
              error={!password.valid}
              inputProps={{
                maxLength: 12,
                pattern: `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.* ).{7,12}$`,
                  
              }}
              InputProps={{
                endAdornment:(<InputAdornment position="end">
                <IconButton onClick={chgEye}>
                  {!eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>)
              }}


            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
