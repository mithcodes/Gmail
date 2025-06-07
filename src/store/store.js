import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
 import emailReducer from "./emailSlice"
 import mailReducer from "./mailSlice"
 import searchReducer from "./searchSlice"
 const store=configureStore({
  reducer:{
    auth:authReducer,
    email:emailReducer,
    mail:mailReducer,
    searchMail:searchReducer,
  }
 })

 export default store;