import { useEffect, useState } from "react"
export default function useValide(Value2Check) {


  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const [value, setValue] = useState("")


  // const [email, setEmail] = useState({
  //   value: "",
  //   valid: true,
  //   message: 'Insert valid email'
  // });
  // const [password, setPassword] = useState({
  //   value: "",
  //   valid: true,
  //   message: ''
  // });

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

    let errorMassege = newPassword.length < 7 || newPassword.length > 12 ? 'Password have to be between 7 - 12 characters' : 'Password must contain at One number one uppercase letter and one special character'
    !pattern.test(newPassword) && newPassword !== "" ? setErrorsTrue(errorMassege, newPassword) : setErrorsFalse(newPassword);

  }

  const handleName = () => {
    let pattern = /^[a-zA-Z0-9$@$!%*?&#^-_.+]+$/
    let massege = 'User name can contain only latin letters, numbers and special charectors';

    !pattern.test(userNameVal) && userNameVal !== "" ? setErrorsTrue(massege, userNameVal) : setErrorsFalse(userNameVal);
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
    // 'image': handleImage,
    // 'name': handleName,
    // 'date': handleDate,
    // 'street': handleStreet,
    // 'houseNumber': handleHouseNumber
  }


  // const [first, setfirst] = useState(second)
  return [value, error, text, handleFunctions[Value2Check]];


}
