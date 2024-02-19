import { Avatar, Box, Button, ButtonGroup, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import Image from '../images/users.jpg';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';

export default function Profile() {
  let tempUser = {
    city: "‘Ein Qunīya",
    dateOB: "2000-01-31",
    email: "benshuan@gmail.com",
    firstName: "בן",
    house: "5",
    image: '../images/users.jpg',
    lastName: "שואן",
    street: "באמ",
    userName: "benShuan",
  }

  return (
    <Grid container sx={{ width: '100%', maxWidth: 700 }} component={Paper} elevation={6} flexDirection='row-reverse'>

      <Grid item xs={12} md={6}  >
        <img src={Image} width={'100%'} style={{ maxWidth: 500, maxHeight: 500, display: 'block' }} />
      </Grid>

      <Grid item xs={12} md={6} my={2}   >
        <Stack spacing={3} px={2} direction="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          divider={<Divider flexItem />}>
          <Typography my={1} variant="h3" noWrap>{tempUser.firstName + " " + tempUser.lastName}</Typography>


          <Stack direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <EmailIcon></EmailIcon>
            <Typography variant="p" noWrap> {tempUser.email}</Typography>
          </Stack>
          <Stack direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
          >
            <CakeIcon></CakeIcon>
            <Typography my={1} variant="p" noWrap>{tempUser.dateOB}</Typography>
          </Stack>


          <ButtonGroup variant="contained" spacing={2} >
            <Button color="error" >Log out</Button>
            <Button >Game</Button>
            <Button color="secondary"  >Edit user</Button>
          </ButtonGroup>
        </Stack>

      </Grid>




    </Grid >
  )
}