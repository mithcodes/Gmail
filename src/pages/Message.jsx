
import React from "react";
import { MdCropSquare , MdDelete  } from "react-icons/md";
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
      className="flex items-start justify-between border-b border-gray-200 px-4 text-sm hover:cursor-pointer hover:shadow-md py-1 mx-2 "
    >
      <div className="flex items-center  gap-1 md:gap-4">

         <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(email.id);
        }}
        className="mr-2 ml-0 mt-1 text-gray-600 hover:text-red-700 flex-shrink-0 "
      >
        <MdDelete className="w-5 h-5" />
      </button>
        <MdCropSquare className="w-5 h-5 text-gray-500 hidden md:block " />
        <RiStarLine className="w-5 h-5 text-gray-500 hidden md:block" />
      </div>

      {/* <div 
      
      className="flex-1 flex gap-x-5 md:ml-4 py-1">
        <p className="text-xs text-black">
           {type === "inbox" ? "from" : "to"} 
        </p>
       
        <p className="text-gray-600 truncate max-w-full">{type==="inbox"?email.from :email.to}</p>
        <p className="text-gray-600 truncate max-w-full">{email.subject}</p>
        
      </div> */}
      <div className="flex-1 md:flex gap-x-5 md:ml-4 py-1 overflow-hidden min-w-0">
  {/* From/To + Email ek hi line */}
  <div className="flex gap-x-3 min-w-0">
    <p className="text-xs text-black">
      {type === "inbox" ? "from" : "to"}
    </p>
    <p className="text-black-600 truncate max-w-full min-w-0">
      {type === "inbox" ? email.from : email.to}
    </p>
  </div>

  {/* Subject niche aayega mobile par */}
  {/* <p className="text-gray-600 truncate max-w-full md:ml-5 mt-1 md:mt-0">
    {email.subject}
  </p> */}

  <p className="text-sm md:text-md  text-black-600 md:ml-5 mt-1 md:mt-0">
  {email.subject.length > 40 
    ? email.subject.slice(0, 50) + "..." 
    : email.subject}
</p>

</div>

    </div>
  );
};

export default Message;
