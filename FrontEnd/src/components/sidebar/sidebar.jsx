import React from "react";
import Search from "./search.jsx";
import Conversations from "./conversations.jsx";
import Logoutbutton from "./logout.jsx";

const sidebar = () => {
  return (
    <div className=" border-r border-slate-500 pr-10 flex flex-col">
      <Search />
      <div className="divider px-3"></div>
      <Conversations />

      <Logoutbutton />
    </div>
  );
};

export default sidebar;
