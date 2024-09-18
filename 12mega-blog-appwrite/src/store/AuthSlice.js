import {createSlice} from "@reduxjs/toolkit"

const initialState = { //user authenticaed yes or no
    status: false, // authentication status
    userData: null // user er bapare kono information
}


const authSlice = createSlice({ // slice banano holo
    name: "auth", //name 
    initialState, //status, user data
    reducers: {  //object
        login: (state, action) => { //reducer er vitor state r action
            state.status = true; // true means loged in
            state.userData = action.payload.userData;
        },

        logout: (state) => {
            state.status = false; // false means login nei
            state.userData = null; //login nei so kono user data o nei
        }
    }
}) 

export const {login, logout} = authSlice.actions; // actions mane authSlice er vitor je reducers er login logout ache seguloi actions

export default authSlice.reducer;