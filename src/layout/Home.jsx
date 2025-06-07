 import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import TextEditor from '../components/TextEditor'
 
 const Home = () => {
  const [showEditor, setShowEditor]=useState(false);
  
     const toggleEditor=()=>{
      setShowEditor((prev)=>!prev);
     }


   return (
    <>
     <Header/>
     
     <div className='flex'>
        
        <Sidebar toggleEditor={toggleEditor}/>
        <Outlet/>
        {showEditor && <TextEditor toggleEditor={toggleEditor}/>}
       
     </div>
     </>
   )
 }
 
 export default Home
 