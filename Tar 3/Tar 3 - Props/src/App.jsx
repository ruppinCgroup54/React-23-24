
import { useState } from 'react'

import './App.css'

import { Button, CssBaseline, ThemeProvider, ToggleButton, createTheme } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Components/Login'
import Register from './Components/Register'
import Profile from './Components/Profile'
import { brown, green, lightGreen, lime, orange, purple, red } from '@mui/material/colors'
import ToggleMode from './Components/ToggleMode'
import SystemAdmin from './Components/SystemAdmin'
import Update from './Components/Update'



function App() {
  const [mode, setMode] = useState('dark');

  const [screenToShow, setscreenToShow] = useState(0);


  const theme = createTheme({
    components: {
      MuiStack: {
        defaultProps: {
          direction: "row-reverse",
          justifyContent: "flex-start",
          alignItems: "center",
          spacing: 2
        }

      }
    },
    palette: {
      mode,
      primary: {
        main: red[300],
        light: red[600],
        dark: red[100],
      },
      secondary: {
        main: orange[300],
        light: orange[600],
        dark: orange[100],
      },
    },
  });


  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToggleMode setMode={setMode} />
      <div style={{ marginTop: 30 }}>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/update/:email' element={<Update />}></Route>
          <Route path='/systemAdmin' element={<SystemAdmin />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
