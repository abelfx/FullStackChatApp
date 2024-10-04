import React from "react";
import Conversation from "./conversation.jsx";
import userGetConversation from "../../hooks/userGetConversation.js";

// conversations do not work....
const conversations = () => {
  const { loading, conversations } = userGetConversation();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => {
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
          />
        );
      })}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default conversations;
