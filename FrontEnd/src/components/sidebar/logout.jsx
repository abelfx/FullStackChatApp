import { RiLogoutBoxLine } from "react-icons/ri";
import React from "react";
import userLogout from "../../hooks/userLogout";

const logout = () => {
  const { loading, logout } = userLogout();
  return (
    <RiLogoutBoxLine
      className=" mt-8 h-6 w-6 text-white cursor-pointer hover:text-gray-300"
      onClick={logout}
    />
  );
};

export default logout;
