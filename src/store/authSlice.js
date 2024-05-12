import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        login: (state, action) => {
            console.log("state ----------------------------------------------")
            console.log(state)
            console.log("user data --------------------------------------------")
            console.log(action)
            state.status = true;
            state.userData = action.payload.userData;
        },
        
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;