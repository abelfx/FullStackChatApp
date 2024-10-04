import { createContext } from "react";

export const SocketContext = createContext();

export const SocketContextProvider = ({ Children }) => {
  return <SocketContext.Provider value={{}}>{Children}</SocketContext.Provider>;
};
