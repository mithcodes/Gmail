import { createSlice } from "@reduxjs/toolkit";

 



 const emailSlice=createSlice({
    name:"email",
    initialState:{
    inbox:[],
    sent:[],
 },

  reducers:{
    setInbox:(state,action)=>{
      state.inbox=action.payload;
    },

    setSent:(state,action)=>{
        state.sent=action.payload;
    },

    
  }


 })

 export const {setInbox, setSent, addInboxMail, addSentMail, clearEmails}=emailSlice.actions;

 export default emailSlice.reducer;