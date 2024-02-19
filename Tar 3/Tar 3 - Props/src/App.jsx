
import { useState } from 'react'


import './App.css'

import { Button, CssBaseline, ThemeProvider, ToggleButton, createTheme } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

import Login from './Components/Login'
import Register from './Components/Register'
import Profile from './Components/Profile'
import { lime, purple } from '@mui/material/colors'
import ToggleMode from './Components/ToggleMode'



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
      <CssBaseline />
      <BrowserRouter>
        <ToggleMode setMode={setMode} />
        <Profile />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
