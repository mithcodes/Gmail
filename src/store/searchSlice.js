import { createSlice } from "@reduxjs/toolkit";

 
 const searchSlice=createSlice({
  name:'search',
initialState:{
    searchMail:'',
},

reducers:{
    setSearch:(state, action)=>{
        state.searchMail=action.payload;
    },
},

 });

 export const {setSearch}=searchSlice.actions;
 export default searchSlice.reducer;