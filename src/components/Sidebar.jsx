


import { FaImage } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import { MdOutlineDrafts, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { MdExpandMore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Sidebar = ({ toggleEditor }) => {
  const navigate = useNavigate();
  
  // Default active "Send"
  const [active, setActive] = useState("/home/send");

  // Jab component mount ho aur /home ho, tab Send default rahe
  useEffect(() => {
    if (window.location.pathname === "/home" || window.location.pathname === "/") {
      setActive("/home/send");
      navigate("/home/send");
    }
  }, [navigate]);

  // Active CSS helper
  const activeClass = (path) =>
    active === path
      ? "bg-[#7FAFFF] font-semibold"
      : "hover:bg-gray-100";

  return (
    <div className="w-[15%] gap-y-1">
      <div onClick={toggleEditor} className="p-1 md:p-3">
        <button className="flex items-center md:gap-2 p-1 md:p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF] font-medium">
          <LuPencil size={24} />
          Compose
        </button>
      </div>

      <div className="text-gr-200">
        {/* Inbox */}
        <div
          onClick={() => { setActive("/home/inbox"); navigate("/home/inbox"); }}
          className={`flex items-center md:gap-4 py-2 rounded-r-full cursor-pointer md:pl-6 text-md ${activeClass("/home/inbox")}`}
        >
          <FaImage size={24} />
          <p>Inbox</p>
        </div>

        {/* Starred */}
        <div
          
          className={`flex items-center md:gap-4 py-2 rounded-r-full cursor-pointer md:pl-6 text-md ${activeClass("/home/starred")}`}
        >
          <IoMdStar size={24} />
          <p>Starred</p>
        </div>

        {/* Snoozed */}
        <div
        
          className={`flex items-center md:gap-4 py-2 rounded-r-full cursor-pointer md:pl-6 text-md ${activeClass("/home/snoozed")}`}
        >
          <MdOutlineWatchLater size={24} />
          <p>Snoozed</p>
        </div>

        {/* Send */}
        <div
          onClick={() => { setActive("/home/send"); navigate("/home/send"); }}
          className={`flex items-center md:gap-4 py-2 rounded-r-full cursor-pointer md:pl-6 text-md ${activeClass("/home/send")}`}
        >
          <TbSend2 size={24} />
          <p>Send</p>
        </div>

        {/* Drafts */}
        <div
          
          className={`flex items-center md:gap-4 py-2 rounded-r-full cursor-pointer md:pl-6 text-md ${activeClass("/home/drafts")}`}
        >
          <MdOutlineDrafts size={24} />
          <p>Drafts</p>
        </div>

        {/* More */}
        <div
          onClick={() => { setActive("/home/more"); navigate("/home/more"); }}
          className={`flex items-center md:gap-4 py-2 rounded-r-full cursor-pointer md:pl-6 text-md ${activeClass("/home/more")}`}
        >
          <MdExpandMore size={24} />
          <p>More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
