import React from "react";
import GenderCheck from "./genderCheck";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 roundded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-5">
          SignUp
          <span className="text-blue-400 "> ETHIO APEX</span>
        </h1>
        <form action="/login" method="post">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="input input-bordered h-10 w-full"
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
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="input h-10 input-bordered w-full"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm password"
              className="input h-10 input-bordered w-full"
            />
          </div>

          <GenderCheck />

          <a
            href=""
            className="text-sm hover:underline hover:text-blue-500  inline-block mt-2"
          >
            Already have an account?
          </a>

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
