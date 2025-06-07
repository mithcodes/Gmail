import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSelector } from "react-redux";

const TextEditor = ({ toggleEditor }) => {
  const [editorState, setEditorState] = useState("");
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const userID = useSelector((store) => store.auth.userID);

  
  const sanitizeEmail = (email) =>
    email.toLowerCase().replace(/[^a-z0-9]/g, "");

  const sendEmail = async () => {
    if (!to || !subject || !editorState) {
      alert("Please fill all fields before sending!");
      return;
    }

    const sanitizedSenderEmail = sanitizeEmail(userID);
    const sanitizedReceiverEmail = sanitizeEmail(to);
    const plainText = editorState.getCurrentContent().getPlainText();

    const inboxMail = {
      from: userID,
      subject,
      text: plainText,
      isRead: false,
    };

    const sentMail = {
      to,
      subject,
      text: plainText,
    };

    try {
    
      await fetch(
        `https://mail-box-2-82561-default-rtdb.firebaseio.com/${sanitizedReceiverEmail}/inbox.json`,
        {
          method: "POST",
          body: JSON.stringify(inboxMail),
          headers: { 
            "Content-type": "application/json"
           },
        }
      );

      
      await fetch(
        `https://mail-box-2-82561-default-rtdb.firebaseio.com/${sanitizedSenderEmail}/sent.json`,
        {
          method: "POST",
          body: JSON.stringify(sentMail),
          headers: { 
            "Content-type": "application/json"
           },
        }
      );

      alert("Mail sent successfully!");
      setTo("");
      setEditorState("");
      setSubject("");
      toggleEditor({ toggleEditor }); 
    } catch (error) {
      console.error("Error sending mail:", error);
      alert("Failed to send mail.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-90 bg-black/80">
      <div className="bg-white w-4/5 md:w-3/4 p-6 rounded-lg shadow-lg">
        <h1 className="text-lg font-semibold mb-4 py-1 bg-slate-100 px-2 text-gray-800">
          New Message
        </h1>

        <div className="mb-4">
          <label htmlFor="to" className="block mb-2 text-gray-700 font-bold">
            To:
          </label>
          <input
            id="to"
            type="email"
            className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Receiver Email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2 text-gray-700 font-bold">
            Subject:
          </label>
          <input
            id="subject"
            type="text"
            className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="mb-4 h-[200px] md:max-h-[80vh] overflow-y-auto border border-gray-300 rounded-md">
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            toolbarClassName="bg-gray-100 border-b px-2"
            editorClassName="px-3 py-6 bg-gray-100 min-h-[150px]"
            wrapperClassName="mb-2"
          />
        </div>

        <button
          className="bg-blue-500 shadow-md hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={sendEmail}
        >
          Send
        </button>

        <button
          className="bg-red-500 m-2 shadow-md hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={toggleEditor}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
