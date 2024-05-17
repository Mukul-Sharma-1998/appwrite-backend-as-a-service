import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    userData: null,
    posts: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        login: (state, action) => {
            // console.log("storeeeeeeeeeeeeeeee", action.payload.posts.documents)
            state.status = true;
            state.userData = action.payload.userData;
            state.posts = action.payload.posts;
        },
        
        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.posts = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;