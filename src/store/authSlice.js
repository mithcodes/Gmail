import { createSlice } from "@reduxjs/toolkit";

 

 const authSlice=createSlice({
 name:"auth",
 initialState:{
    tokenID:null,
    userID:null,
    isLoggedIn:false,
 },

 reducers:{
    login:(state, action)=>{
        state.tokenID=action.payload.tokenID;
        state.userID=action.payload.userID;
        state.isLoggedIn=true;
    },

    logout:(state, action)=>{
        state.tokenID=null;
        state.userID=null;
        state.isLoggedIn=false;

    },
 }

 })

 export const {login, logout}=authSlice.actions;
 
 export default authSlice.reducer;