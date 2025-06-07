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

    // addInboxMail:(state, action)=>{
    //  state.inbox.push(action.payload);
    // },

    // addSentMail:(state, action)=>{
    //     state.sent.push(action.payload);
    // },

    // clearEmails:(state)=>{
    //     state.inbox=[];
    //     state.sent=[];

    // }
  }


 })

 export const {setInbox, setSent, addInboxMail, addSentMail, clearEmails}=emailSlice.actions;

 export default emailSlice.reducer;