import {configureStore} from '@reduxjs/toolkit'; //configure store is used to create store and store needs to know about all the reducers


//store need to knwo about all the reducers
const store = configureStore({
    reducer: {}
});

export default store;