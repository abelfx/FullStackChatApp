import React from "react";

const genderCheck = ({ onCheckboxChange, selectedInput }) => {
  return (
    <div className="flex">
      <div>
        <label
          className={` label p-2 ${selectedInput === "male" ? "selected" : ""}`}
        >
          <span className="label-text mr-2">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedInput === "male"}
            onChange={() => {
              onCheckboxChange("male");
            }}
          />
        </label>
      </div>

      <div>
        <label
          className={`label p-2 ${
            selectedInput === "female" ? "selected" : ""
          } `}
        >
          <span className="label-text mr-2">female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedInput === "female"}
            onChange={() => {
              onCheckboxChange("female");
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default genderCheck;
