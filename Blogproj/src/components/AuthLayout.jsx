import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
//import Login from '../components/Login'
export default function Protected({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.authStatus)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        })
        //TODO: make it more easy and readable to understand
        if( !authentication && authStatus !== authentication){
            navigate("/login")
        }
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])
  return loader? <h1 className='text-2xl'>Loading... Please wait</h1>:<>{children}</>
}

