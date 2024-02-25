
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
import UsersContextProvider from './Components/UsersContextProvider'



function App() {
  const [mode, setMode] = useState('dark');

  const theme = createTheme({
    components: {
      MuiStack: {
        defaultProps: {
          direction: "row-reverse",
          justifyContent: "flex-start",
          alignItems: "center",
          spacing: 2
        }
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            position: 'absolute',
            backgroundColor: '#fff5ee',
            border: '2px red solid',
            padding: 5,
            left: '100%',
            borderRadius: 10,
            width: '70%',
            height: 'inhrit',
            boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
            zIndex: 10,
            fontWeight: 'bold',
            fontSize: '0.9rem',
          },

        }
      }
    },
    palette: {
      mode,
      primary: {
        main: '#FF8100',
        light: '#FFA64C',
        dark: '#FFA64C',
      },
      secondary: {
        main: '#FFA64C',
        light: orange[600],
        dark: orange[100],
      },
      background: {
        paper: mode === 'dark' ? '#89728C' : '#F2F2F2',
        default: mode === 'dark' ? '#89728C' : '#F2F2F2'
      }

    },

  });


  return (

    <ThemeProvider theme={theme}>
      {/* <AvatarImage></AvatarImage> */}
      <CssBaseline />
      <ToggleMode setMode={setMode} mode={mode} />
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <UsersContextProvider>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/update/:email' element={<Update />}></Route>
            <Route path='/systemAdmin' element={<SystemAdmin />}></Route>
          </Routes>
        </UsersContextProvider>
      </Box>
    </ThemeProvider>
  )
}

export default App
