 import React from 'react'
import { BiArchive } from 'react-icons/bi'
import { IoMdArrowBack } from 'react-icons/io'
import { MdDeleteOutline, MdOutlineAddTask, MdOutlineMore, MdOutlineReport } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
 
 const Mail = () => {
  const navigate=useNavigate();
  const mail=useSelector((state)=>state.mail.selectedMail)
    console.log(mail);
    if (!mail) {
  return <div className="p-5 text-gray-500">Please select a mail to view.</div>;
}
  const handleBack=()=>{
    navigate(-1);
  }
  
   return (
     <div className='flex-1 bg-white rounded-xl mx-5'>
        <div className='flex items-center justify-between px-4'>
            <div className='flex items-center gap-2 text-gray-700 py-2'>
                <div
                onClick={handleBack}
                className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
<IoMdArrowBack size={"20px"}/>
                </div>
                 <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
<BiArchive size={"20px"}/>
                </div>
                 <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
<MdOutlineReport size={"20px"}/>
                </div>
                 <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
<MdDeleteOutline size={"20px"}/>
                </div>
                 <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
<MdOutlineAddTask/>
                </div>
                 
                 <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
<MdOutlineMore/>
                </div>
            </div>

        </div>
        <div className='h-[90vh] overflow-y-auto p-4'>
            <div className='flex items-center justify-between bg-white gap-1'>
               <div className='flex items-center gap-2'>
                <h1 className='text-xl font-medium '><span className='mr-4'>Subject</span>{mail.subject}</h1>
                {/* <span className='text-sm bg-gray-200 rounded-md px-2'>Inbox</span> */}
                </div> 
            

            </div>
            <div className='mt-5 text-gray-900 text-md text-left font-semibold'>
             {mail.text}
            </div>

        </div>
       
     </div>
   )
 }
 
 export default Mail
 