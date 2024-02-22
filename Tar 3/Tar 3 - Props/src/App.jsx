
import { useState } from 'react'

import './App.css'

import { Button, CssBaseline, ThemeProvider, ToggleButton, createTheme } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Components/Login'
import Register from './Components/Register'
import Profile from './Components/Profile'
import { lime, purple } from '@mui/material/colors'
import ToggleMode from './Components/ToggleMode'
import SystemAdmin from './Components/SystemAdmin'



function App() {
  const [mode, setMode] = useState('dark');

  const [screenToShow, setscreenToShow] = useState(0);


  const theme = createTheme({
    palette: {
      mode,
      primary: lime,
      secondary: purple,
    },
  });
  

  const chngScreen = () => {


    setscreenToShow(screenToShow === 0 ? 1 : 0);

  }

  const screens = [<Login key={0} />, <Register key={1} />, <Profile key={2} />]

  return (
    
    <ThemeProvider theme={theme}>
      <SystemAdmin></SystemAdmin>
      <CssBaseline />
      <ToggleMode setMode={setMode} />
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/register' element={<Register />}></Route>
        
      </Routes>
    </ThemeProvider>
  )
}

export default App
