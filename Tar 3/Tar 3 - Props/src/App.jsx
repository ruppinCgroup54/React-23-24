
import { useState } from 'react'


import './App.css'

import { Button } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

import Login from './Components/Login'
import Register from './Components/Register'
import Profile from './Components/Profile'

function App() {
  const [screenToShow, setscreenToShow] = useState(0)

  const chngScreen = () => {


    setscreenToShow(screenToShow === 0 ? 1 : 0);

  }

  const screens = [<Login key={0} />, <Register key={1} />, <Profile key={2} />]

  return (
    <BrowserRouter>
      <Button variant='contained' onClick={chngScreen} >Login/Sign-in</Button>
      {screens[screenToShow]}
    </BrowserRouter>
  )
}

export default App
