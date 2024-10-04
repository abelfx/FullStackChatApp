import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import userConversation from "../zustand/useConversation";
import { getMessage } from "../../../BackEnd/controller/messagesController";

const userGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = userConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        // Make sure 'data' is an array of messages
        if (Array.isArray(data)) {
          setMessages(data);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (error) {
        // Handle and log errors
        console.error(error);
        toast.error("Failed to load messages.");
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default userGetMessages;
