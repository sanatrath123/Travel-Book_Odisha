import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Userdata: null,
    status: false
}

export const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        Login : (state , action)=>{
state.Userdata= action.payload,
state.status = true 
        },

        Logout: (state , action )=>{
            state.Userdata = null,
            state.status = false
        }
    }
})

export const {Login , Logout} = AuthSlice.actions

export default AuthSlice.reducer