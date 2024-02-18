import { useEffect, useState } from "react"
export default function useValide(Value2Check) {

  const fildes = ['userName', 'email', 'password', 'image', 'name', 'date', 'city', 'street', 'houseNumber']

  const [valid, setValid] = useState(true);
  const [text, setText] = useState("")

  const handleEmail = () => {
    console.log('first', first);
  }
  const handlePassword = (newPassword) => {
    console.log('pass', newPassword );

    //check if password valid

    setValid(false);
    setText(newPassword)
    return;
  }




  // switch (Value2Check) {
  //   case 'password':

  //     return [1, 2, handlePassword];
  //     break;
  //   case 'email':

  //     break;


  //   default:

  //     return null
  //     break;
  // }


 


  // const [first, setfirst] = useState(second)
  return [valid, text, handlePassword];


}
