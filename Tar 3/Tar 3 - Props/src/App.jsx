import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { green, orange } from '@mui/material/colors'

import Login from './Components/Login'
import Register from './Components/Register'
import Profile from './Components/Profile'

import ToggleMode from './Components/ToggleMode'
import SystemAdmin from './Components/SystemAdmin'
import Update from './Components/Update'
import UsersContextProvider from './Components/UsersContextProvider'
import './App.css'



function App() {
  const [mode, setMode] = useState('light');

  // customize the app theme
  const theme = createTheme({
    components: {
      MuiTextField:{
        defaultProps:{
          fullWidth:true,
          required:true
        }
      },
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
            top: '100%',
            borderRadius: 10,
            width: 'inherit',
            boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
            zIndex: 10,
            fontWeight: 'bold',
            fontSize: '0.9rem',
          },

        },
      },
      MuiTableCell: {
        defaultProps: {
          align: 'center',
        }
      }

    },
    palette: {
      mode,
      primary: {
        main: green[300],
        light: green[100],
        dark: green[500],
      },
      secondary: {
        main: orange[300],
        light: orange[100],
        dark: orange[500],
      },
      background: {
        paper: mode === 'dark' ? '#89728C' : '#F2F2F2',
        default: mode === 'dark' ? '#F2F2F2' : '#89728C'
      }

    },

  });

  return (

    <ThemeProvider theme={theme}>
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
