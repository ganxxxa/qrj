import React from "react";
import Columns from "./Columns";

const Pallete = () => {
  const colors = [
    {
      bg: "bg-[#E2282A]",
      from: "from-[#E95455]",
      to: "to-[#EE7F80]",
    },
    {
      bg: "bg-[#009C47]",
      from: "from-[#33B16C]",
      to: "to-[#66C491]",
    },
    {
      bg: "bg-[#EEEEEC]",
      from: "from-[#F3F2F1]",
      to: "to-[#F6F5F4]",
    },
    {
      bg: "bg-[#A42328]",
      from: "from-[#B74F54]",
      to: "to-[#C97B7E]",
    },
    {
      bg: "bg-[#0B6D39]",
      from: "from-[#3E8B61]",
      to: "to-[#6EA888]",
    },
  ];

  return (
    <div className="w-full min-h-screen  ">
      <h1 className="absolute font-bold tracking-widest w-screen bg-black p-24 flex text-5xl justify-start ">
        Color Palette
      </h1>
      <div className="flex  gap-0  h-screen w-screen">
        {colors.map((color, i) => (
          <Columns key={i} {...color} />
        ))}
      </div>
    </div>
  );
};

export default Pallete;
