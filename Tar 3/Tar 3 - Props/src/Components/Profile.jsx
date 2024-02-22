import { Avatar, Box, Button, ButtonGroup, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import Image from '../images/users.jpg';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";

export default function Profile() {
  // let tempUser = {
  //   city: "‘Ein Qunīya",
  //   dateOB: "2000-01-31",
  //   email: "benshuan@gmail.com",
  //   firstName: "בן",
  //   house: "5",
  //   image: '../images/users.jpg',
  //   lastName: "שואן",
  //   street: "באמ",
  //   userName: "benShuan",
  // }


  const { state } = useLocation();

  let currenUser = state.currentUser;


  return (
    <Grid container sx={{ width: '100%', maxWidth: 700 }} component={Paper} elevation={6} flexDirection='row-reverse'>

      <Grid item xs={12} md={6} sx={{
        minHeight: 300,
        backgroundImage: `url(${currenUser?.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} >
      </Grid>

      <Grid item xs={12} md={6} my={2}   >
        <Stack spacing={3} px={2} direction="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          divider={<Divider flexItem />}>
          <Typography my={1} variant="h3" noWrap>{currenUser.firstName + " " + currenUser.lastName}</Typography>
          {/* user name */}
          <Stack>
            <Typography variant="p" noWrap>{currenUser.userName}</Typography>
            <CakeIcon></CakeIcon>
          </Stack>
          {/* email */}
          <Stack>
            <Typography variant="p" noWrap> {currenUser.email}</Typography>
            <EmailIcon></EmailIcon>

          </Stack>
          {/* birth day */}
          <Stack>
            <Typography variant="p" noWrap>{currenUser.dateOB}</Typography>
            <CakeIcon></CakeIcon>
          </Stack>
          {/* address */}
          <Stack>
            <Typography variant="p" noWrap>{`${currenUser.city}, ${currenUser.street}, ${currenUser.house}`}</Typography>
            <CakeIcon></CakeIcon>
          </Stack>


          <ButtonGroup variant="contained" spacing={2} >
            <Link to='/'><Button color="error">Log out</Button></Link>
            <Button >Game</Button>
            <Button color="secondary"  >Edit user</Button>
          </ButtonGroup>

        </Stack>

      </Grid>

    </Grid >
  )
}