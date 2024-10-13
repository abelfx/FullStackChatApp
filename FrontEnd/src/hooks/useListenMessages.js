import { useSocketContext } from "../context/socketContext";
import userConversation from "../zustand/userConversation.js";
import { useEffect } from "react";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = userConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
