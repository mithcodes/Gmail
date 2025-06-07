  import { GiHamburgerMenu } from "react-icons/gi";
  import { IoSearch } from "react-icons/io5";
  import { FaQuestion } from "react-icons/fa";
  import { IoSettingsOutline } from "react-icons/io5";
  import { PiDotsNineBold } from "react-icons/pi";
  import { RiGeminiFill } from "react-icons/ri";
import { logout } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearch } from '../store/searchSlice';


  const Header=()=>{
    const search=useSelector((state)=>state.searchMail.searchMail)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    return (
       <div className="flex items-center justify-between mx-3 h-16 bg-[#F8FAFD]">
        <div className="flex items-center gap-10 mr-8 ">
            <div className="flex items-center gap-2 ">
             <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer ">
                <GiHamburgerMenu  size={"20px"}/>
                </div> 
                <img 
                className="w-10"
                src="https://static.vecteezy.com/system/resources/previews/013/948/544/non_2x/gmail-logo-on-transparent-white-background-free-vector.jpg"  alt="gmail-clone"/> 
                <h1 className="hidden md:block text-xl text-gray-800 font-bold">Gmail</h1> 
            </div>
        </div>
        <div className="w-[50%]  md:w-[50%] md:mr-60  ">
            <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
               <IoSearch  size={"24px"} className="text-gray-700" /> 
               <input
                value={search}
                onChange={(e)=>dispatch(setSearch(e.target.value))}
               type="text"
               className="rounded-full w-full bg-transparent outline-none "
               placeholder="Search Mail"

               />
            </div>
        </div>
        {/* <div className="md:block hidden "> */}
        <div className=" ">
            <div className="flex items-center gap-2">
                <div className=" hidden md:block p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                <FaQuestion size={"20px"} />
                
                </div>
                <div className=" hidden md:block p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            
                <IoSettingsOutline size={"20px"}/>
                </div>
                <div className="hidden md:block p-3 rounded-full cursor-pointer transform  transition duration-500 hover:rotate-45 hover:bg-blue-700">
            
                <RiGeminiFill  size={"20px"}/>
                </div>

                
                <div className="hidden mb:block p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                
                <PiDotsNineBold size={"20px"}/>
                </div>
                <div
                onClick={()=>{dispatch(logout());
                   navigate("/");
                }}
                
                className="cursor-pointer bg-gray-500 rounded-full">
              
              <img 
              className="w-10 h-10 rounded-full"
              src="https://static.vecteezy.com/system/resources/thumbnails/051/075/304/small/a-young-indian-man-with-glasses-and-a-blue-shirt-free-png.png"
              
              />
                
                </div>
            
            </div>

        </div>
       </div>  
    )
  }

  export default Header;