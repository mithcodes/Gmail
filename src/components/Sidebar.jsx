import { FaImage } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import { MdOutlineDrafts, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { MdExpandMore } from "react-icons/md";
import { useNavigate } from "react-router-dom";

 const Sidebar=({toggleEditor})=>{
        const navigate=useNavigate()
    return (
        <div className=" w-[15%] gap-y-1 ">
            <div
            onClick={toggleEditor}
            className="p-1 md:p-3">
                <button className="flex items-center md:gap-2 p-1 md:p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF] font-medium">
                    <LuPencil md:size={"24"}/>
                     Compose
                    </button>
            </div>

         <div className="text-gr-500">
            <div 
            onClick={()=>navigate("/home/inbox")}
            className="flex items-center md:gap-4   py-2 rounded-r-full hover:cursor-pointer md:pl-6  text-md font-medium  bg-[#D3E3FD]">
             <FaImage md:size={"24"}/>
                    <p>Inbox</p> 
            </div>

             <div className="flex items-center md:gap-4   py-2 rounded-r-full hover:cursor-pointer text-md md:pl-6 hover:bg-gray-200">
             <IoMdStar size={"24"}/>
                    <p>Starred</p> 
            </div>

             <div className="flex items-center md:gap-4   py-2 rounded-r-full hover:cursor-pointer text-md md:pl-6 hover:bg-gray-200">
             <MdOutlineWatchLater size={"24"}/>
                    <p>Snoozed</p> 
            </div>

            <div 
            onClick={()=>navigate("/home/send")}
            className="flex items-center md:gap-4   py-2 md:pl-6 rounded-r-full hover:cursor-pointer text-md hover:bg-gray-200">
             <TbSend2 size={"24"}/>
                    <p>Send</p> 
            </div>

             <div className="flex items-center md:gap-4   py-2 rounded-r-full hover:cursor-pointer text-md pl-6font-medium hover:bg-gray-200 md:pl-6">
             <MdOutlineDrafts size={"24"}/>
                    <p>Drafts</p> 
            </div>
            
            <div className="flex items-center md:gap-4   py-2 rounded-r-full hover:cursor-pointer text-md pl-6font-medium hover:bg-gray-200 md:pl-6">
             <MdExpandMore  size={"24"}/>
                    <p>More</p> 
            </div>
            
        
        
         

         </div>



        </div>
    )
 }

 export default Sidebar;