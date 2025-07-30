import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInbox } from "../store/emailSlice";
import { useNavigate } from "react-router-dom";
import Message from "./Message";
import { MdCropSquare } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineUpdate, MdInbox } from "react-icons/md";

const Inbox = () => {
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.auth.userID);
  const sentSearch=useSelector((state)=>state.searchMail.searchMail)
  console.log("userID:", userID);
  const inbox = useSelector((state) => state.email.inbox);
  const navigate = useNavigate();
  const filterInbox=inbox.filter((email)=>{
     return email.subject.toLowerCase().includes(sentSearch);
    })

  
  
  
    const sanitizeEmail = (email) => {
    return email.toLowerCase().replace(/[^a-z0-9]/g, "");
  };

  const fetchInbox = async () => {
    if (!userID) return 
  

    const cleanedID = sanitizeEmail(userID);

    

    try {
      const res = await fetch(
        `https://fir-df7be-default-rtdb.firebaseio.com/${cleanedID}/inbox.json`
      );
      if (!res.ok) {
        console.log("Error fetching inbox");
        return;
      }
      const data = await res.json();

      const loadedInbox = data
        ? Object.entries(data).map(([id, val]) => ({ id, ...val }))
        : [];

      dispatch(setInbox(loadedInbox));
    } catch (error) {
      console.log("Inbox fetch error", error);
    }
  };

  useEffect(() => {
     
    if (!userID) {
    navigate("/"); 
  } else {
    fetchInbox();
  }
  
  }, [userID]);

  return (
    <div className="flex-1 bg-white rounded-xl mx-5 mb-2">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={20} />
            <FaCaretDown size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer" onClick={fetchInbox}>
            <IoMdRefresh size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={20} />
          </div>
        </div>
      </div>

    
      <div className="flex items-center gap-4 mx-3">
        <div className="flex gap-1 cursor-pointer">
          <MdInbox size={20} />
          <p>Primary</p>
        </div>
        <div className="flex gap-1 cursor-pointer">
          <GoProjectSymlink size={20} />
          <p>Promotions</p>
        </div>
        <div className="flex gap-1">
          <IoMdPerson size={20} />
          <p>Social</p>
        </div>
        <div className="hidden md:flex gap-1 cursor-pointer">
    <MdOutlineUpdate size={20} />
    <p>Updates</p>
  </div>

      </div>

      <hr className="border-t border-gray-200 w-full my-2" />

      
      <div className="h-[90vh] overflow-y-auto">
        {filterInbox.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No inbox emails</p>
        ) : (
          filterInbox.map((email) => (
            <Message key={email.id} email={email} type="inbox" />
          ))
        )}
      </div>
    </div>
  );
};

export default Inbox;
