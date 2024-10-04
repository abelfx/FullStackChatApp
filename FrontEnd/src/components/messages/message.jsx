import React from "react";
import userConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/authContext.jsx";
import extractTime from "../../../../BackEnd/utils/extractTime.js";

const message = ({ Message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = userConversation();

  const fromMe = Message?.senderId === authUser?.id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilepic = fromMe
    ? authUser.profilepic
    : selectedConversation?.profilepic;
  const backgroundColor = fromMe ? "bg-blue-500" : "";
  console.log(fromMe);
  console.log(authUser.profilepic);
  console.log(selectedConversation.profilepic);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={`${profilepic}`} alt="Tailwind css bubble component" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${backgroundColor}`}>
        {Message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {extractTime(Message.createdAt)}
      </div>
    </div>
  );
};

export default message;
