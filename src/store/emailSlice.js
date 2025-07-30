import { createSlice } from "@reduxjs/toolkit";

 



 const emailSlice=createSlice({
    name:"email",
    initialState:{
    // inbox:[],
    // sent:[],

     inbox: JSON.parse(localStorage.getItem("inbox")) || [],
    sent: JSON.parse(localStorage.getItem("sent")) || [],
 },

  reducers:{
    setInbox:(state,action)=>{
      state.inbox=action.payload.reverse();
       localStorage.setItem("inbox", JSON.stringify(state.inbox));
    },

    setSent:(state,action)=>{
        state.sent=action.payload.reverse();
        localStorage.setItem("sent", JSON.stringify(state.sent));
    },

    
  }


 })

 export const {setInbox, setSent, addInboxMail, addSentMail, clearEmails}=emailSlice.actions;

 export default emailSlice.reducer;