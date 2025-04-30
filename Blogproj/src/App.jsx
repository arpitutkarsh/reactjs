import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux' 
import authService from './appwrite/auth'
import {login, logout} from "./store/authSlice.js"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  
  //Step:1 We will create a loading state as we have to fetch some data from database and it may take  time and on the basis of loading we can do conditional rendering
  const [loading, setLoading] = useState(true)
  
  const dispatch = useDispatch()
//useEffect is used to perform side effects in functional components as the webpage is loaded
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap w-content-between bg-amber-400' >
    <div className='w-full block'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      
    </div>
    <Footer />
    
    </div>
  ) : null
}

export default App
