
import { useState } from 'react'

import './App.css'

import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import Login from './Components/Login'
import Register from './Components/Register'
import Profile from './Components/Profile'
import { orange, red } from '@mui/material/colors'
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
      {/* <AvatarImage></AvatarImage> */}
      <CssBaseline />
      <ToggleMode setMode={setMode} />
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/update/:email' element={<Update />}></Route>
          <Route path='/systemAdmin' element={<SystemAdmin />}></Route>
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
