import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContext from './context/UserContext'
function App() {
  

  return (
    <UserContextProvider>
      <h1>React JS</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
