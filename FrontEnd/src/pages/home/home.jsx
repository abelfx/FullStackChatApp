import React from "react";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import MessageContainer from "../../components/messages/messageContainer.jsx";
const home = () => {
  return (
    <div className="flex sm:h-[500px] md:h-[550px] p-6 roundded-lg shadow-md bg-gray-400 bg-clip-padding overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default home;
