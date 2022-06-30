import React from "react";
import classes from "./Body.module.css";

const Body = () => {
  return (
    <div className="text-center text-white space-y-3 mx-auto pt-12">
      <div>
        {" "}
        <p className="font-serif text-3xl md:text-4xl ">Welcome</p>
        <p className="font-serif text-3xl md:text-4xl">to</p>
        <p className="font-serif text-4xl md:text-6xl">
          <span className={classes.typewriter}>Distronix</span>
        </p>
      </div>
      <div className="pt-3">
        <h1>Please login to access internal dashboard</h1>
      </div>
    </div>
  );
};

export default Body;
