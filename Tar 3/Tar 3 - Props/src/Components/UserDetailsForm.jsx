import { Autocomplete, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { allCities } from "../assets/cities";
import PropTypes from 'prop-types';
import useValide from "../Hooks/useValide";


export default function UserDetailsForm({ sendData }) {

//using custom hook of text filed for validation handling
  const [firstName, firstNameError, firstNameText, setFirstName] = useValide('name');
  const [lastName, lastNameError, lastNameText, setLastName] = useValide('name');
  const [image, imageError, imageText, setImage] = useValide('image');
  const [dateOB, dateError, dateText, setDate] = useValide('date');
  const [city, , , setCity] = useValide('city');
  const [street, streetError, streetText, setStreet] = useValide('street');
  const [house, houseError, houseText, setHouse] = useValide('houseNumber');


//send user data to main register component on unmount
  useEffect(() => {
    return () => {
      let userObj = {
        firstName,
        lastName,
        image,
        dateOB,
        city,
        street,
        house
      }
      sendData(userObj);

    }
  }, [])

  return (

    <Grid container spacing={3}>
      {/* First name */}
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First name"
          fullWidth
          autoComplete="given-name"
          value={firstName}
          error={firstNameError}
          helperText={firstNameText}
          onChange={(e) => setFirstName(e.currentTarget.value)}
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
          value={lastName}
          error={lastNameError}
          helperText={lastNameText}
          onChange={(e) => setLastName(e.currentTarget.value)}
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
          // value={imageVal}
          error={imageError}
          helperText={imageText}
          onChange={setImage}
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
          autoComplete='bday'
          error={dateError}
          helperText={dateText}
          onChange={(e) => setDate(e.currentTarget.value)}
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
          onInputChange={(e, val) => setCity(val)}

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
          value={street}
          error={streetError}
          helperText={streetText}
          onChange={(e) => setStreet(e.currentTarget.value)}
        />
      </Grid>

      {/* house number */}
      <Grid item xs={12} md={4} >
        <TextField required fullWidth type='number'
          label='House number'
          inputProps={{ min: 0 }}
          value={house}
          error={houseError}
          helperText={houseText}
          onChange={(e) => setHouse(e.currentTarget.value)}
        />


      </Grid>
    </Grid>

  )
}
UserDetailsForm.propTypes = {
  sendData: PropTypes.func
};
