import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, ButtonGroup, Divider, Grid, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';

import UpdateModal from "./UpdateModal";
import Update from "./Update";
import { UsersContext } from "./UsersContextProvider";


export default function Profile() {

  // get  current user
  const { currentUser, logOutUser } = useContext(UsersContext);

  const isLargeScreen = useMediaQuery('(min-width:600px)');

  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setOpenModal(false)
  }, [currentUser])


  const logOut = () => {
    logOutUser();
    navigate('/');
  }
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
            <Button target="_blank" href="https://gold-miner-games.com/classic-gold-miner.htm" >Game</Button>
            <Button onClick={logOut} color="error">Log out</Button>
          </ButtonGroup>

        </Stack>

      </Grid>
      {/* modal for update current user */}
      <UpdateModal toggle={{ openModal, setOpenModal }} text={<Update emailFromProp={currentUser.email} isCurrent={true} />} />

    </Grid >
  )
}