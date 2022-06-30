import React from "react";
import Header from "./header";
import Sidebar from "./Sidebar";

const index = () => {
  return (
    <div className="bg-bg max-w-7xl h-screen m-0 p-0 flex flex-row mx-auto">
      <Sidebar />
      <div className="relative max-w-7xl flex-grow ">
        <Header />
      </div>
    </div>
  );
};

export default index;
