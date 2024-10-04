import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import userLogin from "../../hooks/userLogin.js";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = userLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(input);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 roundded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-5">
          Login
          <span className="text-blue-400"> ETHIO APEX</span>
        </h1>
        <form onSubmit={handleLogin}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered h-10 w-full"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input h-10 input-bordered w-full"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-500  inline-block mt-2"
          >
            Don't have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 h-10 hover:text-blue-300">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
