
import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { setSelectedMail } from "../store/mailSlice";
import { useDispatch } from "react-redux";

const Message = ({ email, type }) => {
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const openMail = () => {
    dispatch(setSelectedMail(email));
    
    navigate("/home/mail")
  };

  return (
    <div
      onClick={openMail} 
      className="flex items-start justify-between border-b border-gray-200 px-4 text-sm hover:cursor-pointer hover:shadow-md py-1"
    >
      <div className="flex items-center gap-1 md:gap-3">
        <MdCropSquare className="w-5 h-5 text-gray-300" />
        <RiStarLine className="w-5 h-5 text-gray-300" />
      </div>

      <div 
      
      className="flex-1 flex gap-x-5 ml-4 py-1">
        <p className="text-xs text-black">
           {type === "inbox" ? "from" : "to"} 
        </p>
       
        <p className="text-gray-600 truncate max-w-full">{type==="inbox"?email.from :email.to}</p>
        <p className="text-gray-600 truncate max-w-full">{email.subject}</p>
        
      </div>
    </div>
  );
};

export default Message;
