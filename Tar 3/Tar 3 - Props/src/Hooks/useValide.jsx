import { useState } from "react"

export default function useValide(Value2Check) {

  const fildes = ['userName', 'email', 'password', 'image', 'name', 'date', 'city', 'street', 'houseNumber']

  const [filedIndex, setFiledIndex] = useState(Object.keys(Value2Check)[0])




  const handleEmail = () => {

  }
  const handlePassword = () => {

  }


  // const [first, setfirst] = useState(second)




  return (
    [1, 2, 3]
  )
}
