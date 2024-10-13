import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./authContext";
import io from "socket.io-client"; // <-- Import from socket.io-client

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser?.id) {
      // Ensure authUser.id is defined
      const socket = io("http://localhost:5000", {
        query: {
          userId: authUser.id,
        },
      });

      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        console.log("Received online users:", users);
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
