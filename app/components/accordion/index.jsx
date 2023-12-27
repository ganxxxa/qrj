"use client";
import { useState } from "react";
import "./style.scss";
import WavyText from "../WavyText";
const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="w-screen">
      {data.map((item, i) => (
        <div className="item" key={i}>
          <div
            className={`flex flex-row-reverse items-center justify-between  py-12  px-6 sm:px-12 lg:px-28 xl:px-36 hover:bg-[#2e2e2e75] ${
              selected === i && "bg-[#2e2e2e75]"
            }`}
            onClick={() => toggle(i)}
            // onClick={() => console.log(item.description)}
          >
            <span className="flex items-center text-4xl">
              {selected === i ? "-" : "+"}
            </span>
            {/* <h2 className="font-bold text-4xl">{item.title}</h2> */}
            <WavyText text={item.title} />
          </div>
          <div className={selected === i ? "content show" : "content"}>
            <div className="text-2xl font-light h-full w-full  px-6 sm:px-12 lg:px-28 xl:px-36 py-4 ">
              {Array.isArray(item.description) ? (
                item.description.map((it, i) => (
                  <p className="py-2" key={i}>
                    {it}
                  </p>
                ))
              ) : (
                <p className="py-2">{item.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Accordion;
