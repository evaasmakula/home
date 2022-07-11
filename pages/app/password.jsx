import React, { useContext, useEffect, useState } from "react";
const crypto = require("crypto");

function password() {
  const [password, setPassword] = useState("Create password");

  let generate = () => {
    crypto.randomBytes(8, (ex, buf) => {
      setPassword(
        buf
          .toString("base64")
          .replace(/\+/g, "")
          .replace(/\//g, "")
          .replace(/\=/g, "")
      );
    });
  };
  let copy = () => {
    navigator.clipboard.writeText(password);
    alert("Your password has been successfully copied");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white p-7 max-w-screen-sm rounded-3xl shadow-lg bg-opacity-25  ">
        <h1 className="text-xl font-bold text-black w-full text-center">
          Password Generator
        </h1>
        <div className="border-b-2 mt-5 px-2 py-[1px] text-center">
          {password}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div
            className="cursor-pointer p-2 bg-slate-500 rounded-md min-w-[40%] text-center"
            onClick={() => {
              generate();
            }}
          >
            Generate
          </div>
          <div
            className="cursor-pointer p-2 bg-slate-500 rounded-md min-w-[40%] text-center"
            onClick={() => {
              copy();
            }}
          >
            Copy
          </div>
        </div>
      </div>
    </div>
  );
}

export default password;
