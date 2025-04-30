import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice' // fix: make sure it's a named export

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        await authService.logout();
        dispatch(logout());
        navigate('/login'); // navigate only after successful logout
    };

    return (
        <button 
            onClick={logoutHandler} 
            className='inline-block text-xl px-6 py-2 duration-200 hover:bg-amber-600 rounded-full'>
            Logout
        </button>
    );
}

export default LogoutBtn
