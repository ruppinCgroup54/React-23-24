import { Button, ButtonGroup, Divider, Grid, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import { Link, useLocation, useNavigate } from "react-router-dom";
import TransitionsModal from "./TransitionsModal";
import Update from "./Update";
import { useEffect, useState } from "react";

export default function Profile() {

  const { state } = useLocation();

  const [currentUser, setCurrentUser] = useState(state);

  const navigate = useNavigate();

  const isLargeScreen = useMediaQuery('(min-width:600px)');

  const removeUser = () => {
    sessionStorage.removeItem('currentUser');
    navigate('/');
  }

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setOpenModal(false)
  }, [currentUser])
  

  return (
    <Grid container sx={{ mx: 'auto', maxWidth: 800 }} component={Paper} elevation={10} flexDirection='row'>

      <Grid item xs={12} md={6} sx={{
        minHeight: 300,
        backgroundImage: `url(${currentUser?.image})`,
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
          <Typography variant="h4" sx={{ fontWeight: 'bold' }} >{currentUser.firstName + " " + currentUser.lastName}</Typography>
          {/* user name */}
          <Stack>
            <Typography variant="p" >{currentUser.userName}</Typography>
            <PersonIcon ></PersonIcon>
          </Stack>
          {/* email */}
          <Stack >
            <Typography variant="p" > {currentUser.email}</Typography>
            <EmailIcon></EmailIcon>

          </Stack>
          {/* birth day */}
          <Stack>
            <Typography variant="p" >{currentUser.dateOB}</Typography>
            <CakeIcon></CakeIcon>
          </Stack>
          {/* address */}
          <Stack>
            <Typography variant="p" >{`${currentUser.city}, ${currentUser.street}, ${currentUser.houseNumber}`}</Typography>
            <HomeIcon></HomeIcon>
          </Stack>


          <ButtonGroup variant="contained" orientation={isLargeScreen ? "horizontal" : "vertical"} fullWidth spacing={2}  >
            <Button onClick={() => setOpenModal(true)} >Edit user</Button>
            <Button  target="_blank" href="https://gold-miner-games.com/classic-gold-miner.htm" >Game</Button>
            <Button onClick={removeUser} color="error">Log out</Button>
          </ButtonGroup>

        </Stack>

      </Grid>
      <TransitionsModal toggle={{ openModal, setOpenModal }} text={<Update emailFromProp={currentUser.email} sendNewUSer={setCurrentUser} />} />

    </Grid >
  )
}