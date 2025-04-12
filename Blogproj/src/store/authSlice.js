import { createSlice } from "@reduxjs/toolkit";  //to create a slice we need to import createslice
//createSlice is used to create slice
const initialState = {
    status: false, //it is by default false as user is not authenticated 
    userData: null //it is null as the user is not authenticated and therefore there is no userData
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { 
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout : (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions; //login and logout are actions therefore we are exporting this
export default authSlice.reducer;