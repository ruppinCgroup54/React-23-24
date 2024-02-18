
import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import Profile from './Components/Profile'
import { Button } from '@mui/material'

function App() {
  const [screenToShow, setscreenToShow] = useState(0)

  const chngScreen = () => {


    setscreenToShow(screenToShow === 0 ? 1 : 0);

  }

  const screens = [<Login key={0} />, <Register key={1} />, <Profile key={2} />]

  return (
    <>
      <Button  onClick={chngScreen} >Login/Sign-in</Button>
      {screens[screenToShow]}

    </>
  )
}

export default App
