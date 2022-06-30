import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
const Header = () => {
  return (
    <main className="p-2 shadow-lg select-none ">
      <div className="ml-2 flex items-center justify-between">
        <img className="w-24 h-8" src="logo.png" alt="logo" />
        <div className="pr-4">
          <AiOutlineLogout size={20} color="white"/>
        </div>
      </div>
    </main>
  );
};

export default Header;
