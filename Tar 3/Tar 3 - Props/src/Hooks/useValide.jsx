import { useState } from "react"

import Compressor from "compressorjs";

//custom hook that validate all the user fileds and mange their state
export default function useValide(Value2Check) {

  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const [value, setValue] = useState("")

  const handleUserName = (userNameVal) => {
    let pattern = /^[a-zA-Z0-9$@$!%*?&#^-_.+]+$/
    let massege = 'User name can contain only latin letters, numbers and special charectors';

    !pattern.test(userNameVal) && userNameVal !== "" ? setErrorsTrue(massege, userNameVal) : setErrorsFalse(userNameVal);
  }

  const handleEmail = (e) => {
    let input = e.currentTarget;

    !input.checkValidity() && input.value !== "" ?
      setErrorsTrue(input.validationMessage, input.value) :
      setErrorsFalse(userNameVal);
  }

  const handlePassword = (newPassword = "") => {
    let pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,12}$/

    let errorMassege = newPassword.length < 7 || newPassword.length > 12 ? 'Password must be between 7 - 12 characters.' : 'Password must contain at One number one uppercase letter and one special character.'
    pattern.test(newPassword) || newPassword === "" || newPassword === 'ad12343211ad' ? setErrorsFalse(newPassword) : setErrorsTrue(errorMassege, newPassword);
  }

  const handleName = (nameVal) => {
    let pattern = /^[a-zA-Z\u0590-\u05FF]+$/
    let massege = 'User name can contain only latin letters, numbers and special charectors';

    !pattern.test(nameVal) && nameVal !== "" ? setErrorsTrue(massege, nameVal) : setErrorsFalse(nameVal);
  }

  const handleImage = (e) => {
    if (typeof e === 'string') {
      setValue(e);
      return
    }
    let file = e.currentTarget.files[0]; // 0 = get the first file

    if (file.type !== "image/jpeg" && file.type !== "image/jpg") {
      let messege = 'Invalide file type';
      setErrorsTrue(messege, "");
      e.currentTarget.value = "";
    }

    let reader = new FileReader();

    console.log('file', file);

    new Compressor(file, {
      quality: 0.2, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        // compressedResult has the compressed file.
        console.log('commprest', compressedResult)
        // Use the compressed file to upload the images to your server.        
        reader.readAsDataURL(compressedResult)

        reader.onloadend = (eFile) => {
          setErrorsFalse(eFile.target.result)
        }
      },
    });

  }

  const handleDate = (date) => {

    let choosedate = new Date(date)

    let massege = 'Need to be at least 18 years old';

    diff_years(new Date(), choosedate) < 18 ? setErrorsTrue(massege, date) : setErrorsFalse(date);
  }

  const handleStreet = (streetVal) => {
    let pattern = /^[\u0590-\u05FF\s]*$/
    let massege = "Street must contain only hebrew letters";

    !pattern.test(streetVal) && streetVal !== "" ? setErrorsTrue(massege, streetVal) : setErrorsFalse(streetVal);
  }

  const handleHouseNumber = (houseNum) => {
    let massege = `House number can't be less than 0`
    houseNum < 0 ? setErrorsTrue(massege, houseNum) : setErrorsFalse(houseNum);
  }

  const handleCity = (city) => {
    setValue(city);
  }

  const setErrorsTrue = (massege, val) => {
    setError(true);
    setText(massege);
    setValue(val);
  }

  const setErrorsFalse = (val) => {
    setError(false);
    setText("");
    setValue(val);
  }

  const handleFunctions = {
    'userName': handleUserName,
    'email': handleEmail,
    'password': handlePassword,
    'image': handleImage,
    'name': handleName,
    'city': handleCity,
    'date': handleDate,
    'street': handleStreet,
    'houseNumber': handleHouseNumber
  }

  // const [first, setfirst] = useState(second)
  return [value, error, text, handleFunctions[Value2Check]];
}

const diff_years = (dt2, dt1) => {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  return diff / 365.25;
}