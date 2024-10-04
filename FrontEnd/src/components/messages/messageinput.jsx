import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import userSendMessage from "../../hooks/userSendMessage";

const messageinput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = userSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-2 mt-2 " onSubmit={handleSubmit}>
      <div className=" relative w-full">
        <input
          type="text"
          placeholder="Send a Message"
          className="border text-sm rounded-lg w-full p-2.5 h-10  border-gray-600 bg-gray-700"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="absolute inset-y-0 end-0 items-center pe-3">
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <IoIosSend className="text-gray-400 hover:text-gray-100 text-xl" />
          )}
        </button>
      </div>
    </form>
  );
};

export default messageinput;
