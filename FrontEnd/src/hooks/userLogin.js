import { useAuthContext } from "../context/authContext";
import { toast } from "react-hot-toast";
import { useState } from "react";

const userLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    const success = loginAuth({ username, password });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (res.status === 403 || res.error === "Invalid credentials") {
        toast.error("Invalid Credentials");
        return;
      }

      const data = await res.json();
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);

      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

function loginAuth({ username, password }) {
  if (!username || !password) {
    toast.error("Please Enter Full Credentials");
    return false;
  }

  return true;
}

export default userLogin;
