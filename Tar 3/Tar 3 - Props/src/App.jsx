
import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
  // const [setscreenToShow, setSetscreenToShow] = useState(0)


  const screens=[<Login key={0}/>,<Register key={1} />]

  return (
    <>
      {screens[0]}
      
    </>
  )
}

export default App
