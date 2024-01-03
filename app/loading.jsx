import React from "react";
import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center text-8xl">
      <CircleLoader color="#FFBF00" size={100} />
    </div>
  );
};

export default Loading;
