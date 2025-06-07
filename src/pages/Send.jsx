import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSent } from "../store/emailSlice";
import Message from "./Message";
import { MdCropSquare } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineUpdate, MdInbox } from "react-icons/md";

const Send = () => {
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.auth.userID);
  const sent = useSelector((state) => state.email.sent);
   const sentSearch=useSelector((state)=>state.searchMail.searchMail)
  const sanitizeEmail = (email) => {
    return email.toLowerCase().replace(/[^a-z0-9]/g, "");
  };
    
  
  const filterSent = sent.filter((email) => {
 return email.subject.toLowerCase().includes(sentSearch);
})


  
  const fetchSent = async () => {
    if (!userID) return 

    const cleanID = sanitizeEmail(userID);

    try {
      const res = await fetch(
        `https://mail-box-2-82561-default-rtdb.firebaseio.com/${cleanID}/sent.json`
      );
      if (!res.ok) {
        console.log("Error fetching sent emails");
        return;
      }
      const data = await res.json();

      const loadedSent = data
        ? Object.entries(data).map(([id, val]) => ({ id, ...val }))
        : [];

      dispatch(setSent(loadedSent));
    } catch (error) {
      console.log("Error fetching sent emails", error);
    }
  };

  useEffect(() => {
      if(userID){
    fetchSent();
  
      }
    
  
  }, [userID]);

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={20} />
            <FaCaretDown size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer" onClick={fetchSent}>
            <IoMdRefresh size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={20} />
          </div>
        </div>
      </div>

      {/* Categories */}
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
        <div className="flex gap-1">
          <MdOutlineUpdate size={20} />
          <p>Updates</p>
        </div>
      </div>

      <hr className="border-t border-gray-200 w-full my-2" />

      {/* Messages */}
      <div className="h-[90vh] overflow-y-auto">
        {filterSent.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No sent emails</p>
        ) : (
          filterSent.map((email) => <Message key={email.id} email={email} type="sent" />)
        )}
      </div>
    </div>
  );
};

export default Send;
