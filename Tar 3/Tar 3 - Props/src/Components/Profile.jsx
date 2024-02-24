import { Avatar, Box, Button, ButtonGroup, Divider, Grid, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from '../images/users.jpg';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Remove } from "@mui/icons-material";

export default function Profile() {

  const { state } = useLocation();

  let currenUser = state;

  const navigate = useNavigate();

  const isLargeScreen = useMediaQuery('(min-width:600px)');

  const removeUser = () => {
    sessionStorage.removeItem('currentUser');
    navigate('/');
  }

  return (
    <Grid container sx={{ width: '100vw', maxWidth: 700 }} component={Paper} elevation={10} flexDirection='row'>

      <Grid item xs={12} md={6} sx={{
        minHeight: 300,
        backgroundImage: `url(${currenUser?.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',

      }} >
      </Grid>

      <Grid item xs={12} md={6} my={2}   >
        <Stack spacing={3} px={2} direction="column"
          justifyContent="flex-end"
          alignItems="flex-start"
          divider={<Divider flexItem />}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }} >{currenUser.firstName + " " + currenUser.lastName}</Typography>
          {/* user name */}
          <Stack>
            <Typography variant="p" >{currenUser.userName}</Typography>
            <PersonIcon ></PersonIcon>
          </Stack>
          {/* email */}
          <Stack >
            <Typography variant="p" > {currenUser.email}</Typography>
            <EmailIcon></EmailIcon>

          </Stack>
          {/* birth day */}
          <Stack>
            <Typography variant="p" >{currenUser.dateOB}</Typography>
            <CakeIcon></CakeIcon>
          </Stack>
          {/* address */}
          <Stack>
            <Typography variant="p" >{`${currenUser.city}, ${currenUser.street}, ${currenUser.houseNumber}`}</Typography>
            <HomeIcon></HomeIcon>
          </Stack>


          <ButtonGroup variant="text" orientation={isLargeScreen ? "horizontal" : "vertical"} fullWidth spacing={2}  >
            <Button   >Edit user</Button>
            <Button target="_blank" href="https://gold-miner-games.com/classic-gold-miner.htm" >Game</Button>
            <Button onClick={removeUser} color="error">Log out</Button>
          </ButtonGroup>

        </Stack>

      </Grid>

    </Grid >
  )
}