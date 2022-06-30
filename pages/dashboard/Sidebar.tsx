import React, { useState } from "react";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
  BsInfoSquare,
} from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineContacts } from "react-icons/ai";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={
        "min-h-screen bg-green-500 p-3 select-none space-y-5 ease-in-out  transition-transform" +
        `${!isOpen ? "w-16 sm:w-24" : "w-28 sm:w-52"}`
      }
    >
      <div className={`${!isOpen ? "px-9 sm:px-12" : "px-14 sm:px-40"}`}>
        {!isOpen ? (
          <BsFillArrowRightSquareFill
            size={25}
            color="white"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="cursor-pointer"
          />
        ) : (
          <BsFillArrowLeftSquareFill
            size={25}
            color="white"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="cursor-pointer "
          />
        )}
      </div>
      <div className="p-3 sm:p-4 space-y-5">
        <div className="flex items-center space-x-2">
          <RiDashboardLine size={35} />
          <div className={`${!isOpen ? "hidden" : ""}`}>
            <h1 className={"text-xl font-serif"}>Deashboard</h1>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <BsInfoSquare size={35} />
          <div className={`${!isOpen ? "hidden" : ""}`}>
            <h1 className={"text-xl font-serif"}>About</h1>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlineContacts size={35} />
          <div className={`${!isOpen ? "hidden" : ""}`}>
            <h1 className={"text-xl font-serif"}>Contact</h1>
          </div>
        </div>
      </div>

      {/* <div className={"hidden sm:flex sm:flex-col p-4"}>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div> */}
    </div>
  );
};

export default Sidebar;
