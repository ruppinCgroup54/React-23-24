import { Avatar, Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
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
    <Grid container sx={{ width: '100%', maxWidth:700 }} component={Paper} elevation={6} flexDirection='row-reverse'>

      <Grid xs={12} md={6}  >
        <img src={Image} width={'100%'}  />
      </Grid>

      <Grid xs={12} md={6} my={2} spacing={3}>
        <Typography my={1} variant="h3" noWrap>{tempUser.firstName + " " + tempUser.lastName}</Typography>
        <Divider></Divider>
        <Stack direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={6}>
          <EmailIcon></EmailIcon>
          <Typography variant="p" noWrap>{tempUser.email}</Typography>
        </Stack>  
        <Stack direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={6}>
          <CakeIcon></CakeIcon>
          <Typography variant="p" noWrap>{tempUser.dateOB}</Typography>
        </Stack>

      </Grid>




    </Grid>
  )
}

// import React from "react";
// import FavoriteBorderRounded from "@mui/icons-material/FavoriteBorderRounded";
// import Share from "@mui/icons-material/Share";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import IconButton from "@mui/material/IconButton";

// export default function Profile() {

//   let tempUser = {
//     city: "‘Ein Qunīya",
//     dateOB: "2000-01-31",
//     email: "benshuan@gmail.com",
//     firstName: "בן",
//     house: "5",
//     image: '../images/users.jpg',
//     lastName: "שואן",
//     street: "באמ",
//     userName: "benShuan",
//   }

//   return (
//   <Card
//       sx={{

//         margin: "auto",
//         boxShadow: "0 0 20px 0 rgba(0,0,0,0.12)",
//         transition: "0.3s",
//       }}
//     >
//       <CardMedia
//         image={ tempUser.image}
//         sx={{
//           width: "100%",
//           paddingBottom: "56.25%",
//           backgroundColor: "rgba(0, 0, 0, 0.08)",
//         }}
//       />
//       <CardContent sx={{ p: 3 }}>
//         {/* <Info useStyles={getInfoN01Styles}>
//           <InfoTitle>First Snow Storm</InfoTitle>
//           <InfoSubtitle>
//             Snow storm coming in Sommaroy island, Arctic Norway. This is
//             something that you definitely wanna see in your life.
//           </InfoSubtitle>
//         </Info> */}
//       </CardContent>
//       <Box px={2} pb={2} mt={-1}>
//         <IconButton>
//           <Share />
//         </IconButton>
//         <IconButton>
//           <FavoriteBorderRounded />
//         </IconButton>
//       </Box
//       >
//     </Card>
//   );
// }
