import React from "react";

const InlineHr = () => {
  return (
    <div className="flex w-64 justify-evenly items-center gap-x-4">
      <hr className="w-52" />
      <p className="text-pink-900 font-bold text-xl  dark:text-white ">or</p>
      <hr className="w-52" />
    </div>
  );
};

export default InlineHr;
