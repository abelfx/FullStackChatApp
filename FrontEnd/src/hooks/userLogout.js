import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../context/authContext";

const userLogout = () => {
  const [loading, SetLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    SetLoading(true);
    try {
      const res = fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = (await res).json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      SetLoading(false);
    }
  };

  return { loading, logout };
};

export default userLogout;
