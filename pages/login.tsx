import { useRouter } from "next/router";

import React from "react";
import Header from "../components/Header";

const login = () => {
  const router = useRouter();
  const onClickeHnader = () => {
    console.log("first");
    router.push("/dashboard");
  };
  return (
    <div className="max-w-7xl mx-auto  bg-indigo-400 h-screen select-none space-y-20">
      <Header />

      <div className="bg-slate-500 p-4 pt-10  md:p-6 w-max mx-auto rounded-xl items-center justify-center flex flex-col space-y-5 shadow-lg shadow-cyan-100 ">
        <div className="flex space-x-3">
          {/* username password */}
          <h1>Username</h1>
          <input type="text" className="outline-none rounded-lg h-8" />
        </div>
        <div className="flex space-x-3">
          {/* username password */}
          <h1>Password</h1>
          <input type="password" className="outline-none rounded-lg h-8" />
        </div>
        <div
          onClick={onClickeHnader}
          className="bg-green-700 px-3 rounded-lg py-1 cursor-pointer font-serif  transition hover:scale-110"
        >
          {/* Login */}
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default login;
