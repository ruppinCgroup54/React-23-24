import { Autocomplete, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { allCities } from "../assets/cities";
import PropTypes from 'prop-types';
import useValide from "../Hooks/useValide";


export default function UserDetailsForm({ sendData }) {


  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [streetValid, setStreetValid] = useState(true);
  const [dateValid, setDateValid] = useState(true)

  const [userData, setUserData] = useState({})

  const firstNameHandle = (e) => {

    let input = e.currentTarget;

    addDataToUser({ firstName: input.value })

    setFirstNameValid(input.checkValidity() || input.value === "");
  }

  const lastNameHandle = (e) => {

    let input = e.currentTarget;

    addDataToUser({ lastName: input.value })

    setLastNameValid(input.checkValidity() || input.value === "");
  }

  const streetHandel = (e) => {

    let input = e.currentTarget;

    addDataToUser({ street: input.value })

    setStreetValid(input.checkValidity() || input.value === "");
  }

  const imageHandle = (e) => {
    let file = e.currentTarget.files[0]; // 0 = get the first file


    let reader = new FileReader();

    reader.onloadend = (eFile) => {
      addDataToUser({ image: eFile.target.result });
    }

    reader.readAsDataURL(file)

  }

  const dateHandle = (e) => {
    let input = e.currentTarget;

    addDataToUser({ dateOfBirth: input.value })

    setDateValid(input.checkValidity() || input.value === "");

  }

  const addDataToUser = (attr) => {

    let tempUser = { ...userData, ...attr };
    setUserData(tempUser);
    sendData(tempUser)
  }

  const [passValid, passText, setPass] = useValide('password');


  return (

    <Grid container spacing={3}>
      {passValid + " " + passText}
      {/* First name */}
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First name"
          fullWidth
          autoComplete="given-name"
          inputProps={{
            pattern: "^[a-zA-Z\u0590-\u05FF]+$"
          }}
          error={!firstNameValid}
          helperText={!firstNameValid && "Name must contain only letters"}
          // onChange={firstNameHandle}
          onChange={(e) => setPass(e.currentTarget.value)}
        />
      </Grid>

      {/* Last name */}
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last name"
          fullWidth
          autoComplete="family-name"
          inputProps={{
            pattern: "^[a-zA-Z\u0590-\u05FF]+$"
          }}
          error={!lastNameValid}
          helperText={!lastNameValid && "Name must contain only letters"}
          onChange={lastNameHandle}
        />
      </Grid>

      {/* Image */}
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth required
          type='file'
          id='file'
          name='file'
          label='Image'
          inputProps={{
            accept: "image/jpg, image/jpeg"
          }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={imageHandle}
        />
      </Grid>

      {/* Date of birth */}
      <Grid item xs={12} sm={6}>
        <TextField
          required fullWidth
          type='date'
          id='DateOB'
          name='DateOB'
          label='Date of birth'
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            max: '2006-12-31'
          }}
          autoComplete='bday'
          error={!dateValid}
          onChange={dateHandle}
        />

      </Grid>

      {/* city  */}
      <Grid item xs={12} md={4}>
        <Autocomplete
          fullWidth
          required
          id="city"
          options={allCities.sort((a, b) => -b.name[0].localeCompare(a.name[0]))}
          groupBy={(option) => option.name[0]}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => <TextField {...params} label="Cities" />}
          onInputChange={(e, val) => addDataToUser({ city: val })}

        />
      </Grid>

      {/* street */}
      <Grid item xs={12} md={4}>
        <TextField
          required
          id="street"
          label="Street"
          fullWidth
          autoComplete="street-address"
          inputProps={{
            pattern: "^[\u0590-\u05FF]*$"
          }}
          error={!streetValid}
          helperText={!streetValid && "Name must contain only letters"}
          onChange={streetHandel}
        />
      </Grid>

      {/* house number */}
      <Grid item xs={12} md={4} >
        <TextField required fullWidth type='number'
          variant='outlined'
          label='House number'
          inputProps={{ min: 0 }}
          onChange={(e) => addDataToUser({ houseNum: e.currentTarget.value })}
        />


      </Grid>
    </Grid>

  )
}
UserDetailsForm.propTypes = {
  sendData: PropTypes.func
};
