import React from "react";

const genderCheck = () => {
  return (
    <div className="flex">
      <div>
        <label className="label p-2">
          <span className="label-text mr-2">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>

      <div>
        <label className="label p-2">
          <span className="label-text mr-2">female</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
    </div>
  );
};

export default genderCheck;
