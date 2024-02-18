import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



import Image from '../images/users.jpg';
import { useEffect, useState } from 'react'
import useValide from '../Hooks/useValide';
import PasswordTextField from './PasswordTextField';


export default function Login() {

  const [userNameValue, userNameError, userNameText, setUserName] = useValide('userName');

  const [remember, setRemember] = useState(false);

  let rememberUser = JSON.parse(localStorage.getItem('last user'));

  useEffect(() => {
    let lastUser = JSON.parse(localStorage.getItem('last user'));
    let rememberUser = lastUser == null ? '' : lastUser;
    setUserName(rememberUser['userNam']);
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let user = {
      userName: data.get('userName'),
      password: data.get('password'),
    };
    //delete after finish
    localStorage.setItem("users", JSON.stringify([user]));
    loginUser(user);

  };

  const loginUser = (user) => {
    let usersFromLocal = JSON.parse(localStorage.getItem("users"));
    let exist = usersFromLocal.some(user => user['userName'] === user.userName && user['password'] === user.password);
    if (exist) {
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      if (remember) {
        localStorage.setItem('last user', JSON.stringify(user))
      }
    }
  };


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
              onChange={(e) => setUserName(e.target.value)}
              error={userNameError}
              helperText={userNameText}
              value={userNameValue}
            />
            <PasswordTextField></PasswordTextField>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" checked={remember} />}
              label="Remember me"
              onChange={(e) => setRemember(e.target.checked)}
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
