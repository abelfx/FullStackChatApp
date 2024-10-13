import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import userConversation from "../../zustand/userConversation";
import userGetConversation from "../../hooks/userGetConversation";
import { toast } from "react-hot-toast";

const search = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = userConversation();
  const { conversations } = userGetConversation();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    const convoFound = conversations.find((convo) =>
      convo.username.toLowerCase().includes(search.toLowerCase())
    );
    if (!convoFound) return toast.error("Username not found");
    else {
      setSelectedConversation(convoFound);
    }
  };

  return (
    <div>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default search;
