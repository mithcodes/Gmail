import { createSlice } from "@reduxjs/toolkit";

 



 const emailSlice=createSlice({
    name:"email",
    initialState:{
    inbox:[],
    sent:[],
 },

  reducers:{
    setInbox:(state,action)=>{
      state.inbox=action.payload.reverse();
    },

    setSent:(state,action)=>{
        state.sent=action.payload.reverse();
    },

    
  }


 })

 export const {setInbox, setSent, addInboxMail, addSentMail, clearEmails}=emailSlice.actions;

 export default emailSlice.reducer;