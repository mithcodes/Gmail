import { createSlice } from "@reduxjs/toolkit";

 
 const mailSlice=createSlice({
    name:"mail",
    initialState:{
        selectedMail:null,
    },

    reducers:{
        setSelectedMail:(state,action)=>{
           state.selectedMail=action.payload;
        },
    }
 })

 export const {setSelectedMail}=mailSlice.actions;
 export default mailSlice.reducer;