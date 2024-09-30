import React from "react";
import { IoIosSend } from "react-icons/io";

const messageinput = () => {
  return (
    <form className="px-2 mt-2 ">
      <div className=" relative w-full">
        <input
          type="text"
          placeholder="Send a Message"
          className="border text-sm rounded-lg w-full p-2.5 h-10  border-gray-600 bg-gray-700"
        />
        <button className="absolute inset-y-0 end-0 items-center pe-3">
          <IoIosSend className="text-gray-400 hover:text-gray-100 text-xl" />
        </button>
      </div>
    </form>
  );
};

export default messageinput;
