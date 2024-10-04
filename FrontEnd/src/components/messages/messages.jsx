import React, { useEffect, useRef } from "react";
import Message from "./message.jsx";
import userGetMessages from "../../hooks/userGetMessages.js";
const messages = () => {
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 10);
  });
  const { messages, loading } = userGetMessages();
  return (
    <div className="overflow-auto px-4 flex-1">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message Message={message} />
          </div>
        ))}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default messages;
