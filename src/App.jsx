import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Inbox from './pages/Inbox'
import Sent from './pages/Send'
import Home from './layout/Home'
import Send from './pages/Send'
import Message from './pages/Message'
import Login from './pages/Login'
// import Messages from './pages/Messages'
import Mail from './pages/Mail'

function App() {
  

  return (
   <div className='bg-[#F6F8FC] h-screen w-screen overflow-hidden'>
   
    <Routes>
     <Route path="/" element={<Login/>}/> 
      
<Route path="/home" element={<Home/>}>
<Route index element={<Send />} />
      <Route path="inbox" element={<Inbox/>}/>
      <Route path="send" element={<Send/>}/>
      {/* <Route path="message" element={<Message/>}/>
       */}
      <Route path="/home/mail" element={<Mail/>}/>
</Route>
     </Routes>
    </div>
   
  )
}

export default App
