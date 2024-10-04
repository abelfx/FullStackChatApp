import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const userSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullname,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleAuth({
      fullname,
      username,
      password,
      confirmpassword,
      gender,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmpassword,
          gender,
        }),
      });

      const data = await res.json();
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);

      console.log(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

function handleAuth({ fullname, username, password, confirmpassword, gender }) {
  if (!fullname || !username || !password || !confirmpassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }

  if (password !== confirmpassword) {
    toast.error("Passwords don't match");
    return false;
  }

  if (password < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
export default userSignup;
