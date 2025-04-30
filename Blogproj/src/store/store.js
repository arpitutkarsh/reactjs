import {configureStore} from '@reduxjs/toolkit'; //configure store is used to create store and store needs to know about all the reducers
import { login, logout, } from './authSlice';
import authSlice from './authSlice'; //importing authSlice to use it in the store


//store need to knwo about all the reducers
const store = configureStore({
    
    reducer: {
        auth: authSlice, //authSlice is the name of the slice and reducer is the name of the reducer
        }
});

export default store;