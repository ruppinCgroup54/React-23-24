import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Box, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



import Image from '../images/users.jpg';
import { useContext, useEffect, useState } from 'react'
import useValide from '../Hooks/useValide';
import PasswordTextField from './PasswordTextField';

import { Link, useNavigate } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { UsersContext } from './UsersContextProvider';



export default function Login() {

  const { rememberUser, loginUser } = useContext(UsersContext);

  const [userNameValue, userNameError, userNameText, setUserName] = useValide('userName');

  const navigate = useNavigate();

  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    setUserName(rememberUser.userName)

  }, [rememberUser])




  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let user = {
      userName: data.get('userName'),
      password: data.get('password'),
      remember: data.get('remember')
    };

    if (user.userName == "admin" && user.password == "ad12343211ad") {
      navigate('/systemAdmin');
    }
    else {
      loginUser(user) ? navigate('/profile') : setOpenAlert(true);
    };
  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };


  return (
    <Grid container component="main"  >
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
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
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
              onChange={(e) => setUserName(e.target.value)}
              error={userNameError}
              helperText={userNameText}
              value={userNameValue}
            />
            <PasswordTextField initialValue={rememberUser.password}></PasswordTextField>
            <FormControlLabel
              control={<Checkbox name='remember' value="remember" color="primary" />}
              label="Remember me"
            />
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }} >
              <Alert variant="outlined" severity="error">
                User is not found. please register.
              </Alert>
            </Snackbar>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link to="/register" style={{ color: 'ButtonText' }}>
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
