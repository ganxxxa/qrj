import React from "react";

const Hero = () => {
  return (
    <section className="relative px-10 py-36 h-screen">
      <div className="flex">
        <div className="flex flex-col gap-10">
          <h1 className="text-6xl font-bold">GARAGE</h1>
          <h1 className="text-2xl w-2/3">digital branding & marketing studio</h1>
        </div>
        <div>
          <img src="" />
        </div>
      </div>
      <span className="absolute bottom-0 left-10 -translate-y-36">
        <p>scroll down</p>
      </span>
    </section>
  );
};

export default Hero;
