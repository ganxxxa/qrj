import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="flex flex-col justify-between items-center sm:items-start relative overflow-x-hidden w-screen px-10 sm:px-32 py-20 sm:py-36 h-screen">
      <div className="flex flex-col sm:flex-row h-2/3 gap-24  sm:gap-10 justify-evenly sm:items-center">
        <div className="flex flex-col w-screen text-center sm:text-left items-center sm:items-start gap-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">GARAGE</h1>
          <h1 className="text-xl sm:text-2xl lg:text-3xl sm:w-1/2">
            Digital Branding & Marketing Studio
          </h1>
        </div>
        <div className="w-full flex justify-center  sm:justify-start">
          <span className="scale-50">
            <Image
              width={160}
              height={160}
              className="rotatee"
              src="/home.svg"
            />
          </span>
        </div>
      </div>
      <motion.span className="sm:absolute sm:bottom-0 sm:left-32 sm:-translate-y-36 -translate-y-24">
        <p>scroll down</p>
      </motion.span>
    </section>
  );
};

export default Hero;
