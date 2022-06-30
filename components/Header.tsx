import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/login");
  };
  return (
    <main className="p-3 shadow-lg select-none ">
      <div className="ml-4 flex items-center justify-between">
        <img className="w-32" src="logo.png" alt="logo" />

        <div className="pt-1 mr-6" onClick={onClickHandler}>
          <h2 className=" text-white font-serif bg-green-600 rounded-lg px-2 cursor-pointer  p-0.5 hover:scale-110 hover:font-light">
            log In
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Header;
