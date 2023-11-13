import React from "react";

const Pallete = ({ src, titleColor }) => {
  return (
    <>
      <div className="  bg-black ">
        <h1 className="font-bold tracking-wide px-10 sm:px-24 py-6 sm:py-10 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl">
          Color <span className={`${titleColor}`}> Pallete</span>
        </h1>
        <div className=" w-screen">
          <img className="" src={src} />
        </div>
      </div>
    </>
  );
};

export default Pallete;
