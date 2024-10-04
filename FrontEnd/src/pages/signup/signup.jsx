import React from "react";
import GenderCheck from "./genderCheck";
import { useState } from "react";
import { Link } from "react-router-dom";
import userSignup from "../../hooks/userSignup";

const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });

  const checkboxSelected = (gender) => {
    setInput({ ...input, gender });
  };

  const { loading, signup } = userSignup();

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(input);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 roundded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-5">
          SignUp
          <span className="text-blue-400 "> ETHIO APEX</span>
        </h1>
        <form onSubmit={handleSignup}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="input input-bordered h-10 w-full"
              value={input.fullname}
              onChange={(e) => setInput({ ...input, fullname: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
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

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input h-10 input-bordered w-full"
              value={input.confirmpassword}
              onChange={(e) =>
                setInput({ ...input, confirmpassword: e.target.value })
              }
            />
          </div>

          <GenderCheck
            onCheckboxChange={checkboxSelected}
            selectedInput={input.gender}
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-500  inline-block mt-2"
          >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 h-10 hover:text-blue-300">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
