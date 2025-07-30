
 

import React from "react";
import { BiArchive } from "react-icons/bi";
import { IoMdArrowBack } from "react-icons/io";
import {
  MdDeleteOutline,
  MdOutlineAddTask,
  MdOutlineMore,
  MdOutlineReport,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Mail = () => {
  const navigate = useNavigate();
  const mail = useSelector((state) => state.mail.selectedMail);

  if (!mail) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
        📭 Please select a mail to view
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg mx-5 border border-gray-200">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-3 text-gray-700">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <IoMdArrowBack size={22} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <BiArchive size={22} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <MdOutlineReport size={22} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <MdDeleteOutline size={22} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <MdOutlineAddTask size={22} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <MdOutlineMore size={22} />
          </button>
        </div>
      </div>

      {/* Mail Content */}
      <div className="h-[calc(100vh-70px)] overflow-y-auto p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 flex items-center">
              <span className="mr-3 text-blue-600">📩</span>
              {mail.subject}
            </h1>
            {/* <p className="text-sm text-gray-500 mt-1">
              From: <span className="font-medium">{mail.from || "abhishek@gmail.com"}</span>
            </p> */}
            <p className="text-sm text-gray-500 mt-2">
              {/* To: <span className="font-medium">{mail.to || "You"}</span> */}
            </p>
          </div>
          <span className="text-xs text-gray-400">
            {/* {mail.date || "Just now"} */}
          </span>
        </div>

        <hr className="my-4 border-gray-200" />

        <div className="mt-4 text-gray-800 leading-relaxed text-md whitespace-pre-wrap">
          {mail.text}
        </div>
      </div>
    </div>
  );
};

export default Mail;
