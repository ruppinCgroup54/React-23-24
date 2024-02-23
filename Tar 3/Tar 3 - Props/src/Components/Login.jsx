import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Box, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



import Image from '../images/users.jpg';
import { useEffect, useState } from 'react'
import useValide from '../Hooks/useValide';
import PasswordTextField from './PasswordTextField';

import { Link, useNavigate } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function Login() {

  const [userNameValue, userNameError, userNameText, setUserName] = useValide('userName');

  const [remember, setRemember] = useState(false);

  const [initialValue, setInitialValue] = useState("");

  // const ver='top';
  // const hor='left';

  const navigate = useNavigate();

  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('last user') !== null) {
      let lastUser = JSON.parse(localStorage.getItem('last user'));
      setUserName(lastUser['userName']);
      setInitialValue(lastUser['password']);
    }
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let user = {
      userName: data.get('userName'),
      password: data.get('password'),
    };
    //delete after finish
    loginUser(user);
  };

  const loginUser = (user) => {
    if (user.userName == "admin" && user.password == "ad12343211ad") {
      navigate('/systemAdmin');
    }
    else {
      let usersFromLocal = JSON.parse(localStorage.getItem("users"));
      let exist = usersFromLocal.find(userLC => userLC['userName'] === user.userName && userLC['password'] === user.password);
      if (exist != undefined) {
        sessionStorage.setItem("currentUser", JSON.stringify(exist));
        if (remember) {
          localStorage.setItem('last user', JSON.stringify(exist))
        }
        navigate('/profile', { state: exist })
      }
      else {
        setOpenAlert(true);
      }
    }

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
            <PasswordTextField initialValue={initialValue}></PasswordTextField>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" checked={remember} />}
              label="Remember me"
              onChange={(e) => setRemember(e.target.checked)}
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
                <Link to="/register" variant="body2">
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
