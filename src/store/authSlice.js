import { createSlice } from "@reduxjs/toolkit";

 

 const authSlice=createSlice({
 name:"auth",
 initialState:{
    // tokenID:null,
    // userID:null,
    // isLoggedIn:false,
    tokenID: localStorage.getItem("tokenID") || null,
  userID: localStorage.getItem("userID") || null,
  isLoggedIn: !!localStorage.getItem("tokenID"),
 },

 reducers:{
    login:(state, action)=>{
        state.tokenID=action.payload.tokenID;
        state.userID=action.payload.userID;
        state.isLoggedIn=true;
        localStorage.setItem("tokenID", action.payload.tokenID);
        localStorage.setItem("userID", action.payload.userID);

    },

    logout:(state, action)=>{
        state.tokenID=null;
        state.userID=null;
        state.isLoggedIn=false;

        localStorage.removeItem("tokenID");
    localStorage.removeItem("userID");
 localStorage.removeItem("inbox");
  localStorage.removeItem("sent");
    },
 }

 })

 export const {login, logout}=authSlice.actions;
 
 export default authSlice.reducer;