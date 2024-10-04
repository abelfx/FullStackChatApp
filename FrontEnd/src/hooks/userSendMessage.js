import userConversation from "../zustand/useConversation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const userSendMessage = () => {
  const { authUser } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = userConversation();

  const sendMessage = async (messageText) => {
    setLoading(true);
    try {
      const newMessage = {
        message: messageText,
        senderId: authUser.id,
        createdAt: new Date().toISOString(),
      };

      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMessage),
        }
      );

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default userSendMessage;
