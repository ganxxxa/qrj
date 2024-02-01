import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  const imageAnimate = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,

      transition: { duration: 0.35 },
    },
  };
  return (
    <section className="flex flex-col justify-between items-center sm:items-start relative overflow-x-hidden w-screen px-10 sm:px-32 py-20 sm:py-36 h-screen">
      <motion.div
        variants={imageAnimate}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3, delayChildren: 0.5 }}
        className="flex flex-col sm:flex-row h-2/3 gap-24  sm:gap-10 justify-evenly sm:items-center"
      >
        <motion.div
          variants={imageAnimate}
          className="flex flex-col w-screen text-center sm:text-left items-center sm:items-start gap-10"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">GARAGE</h1>
          <h1 className="text-xl sm:text-2xl lg:text-3xl sm:w-1/2">
            Digital Branding & Marketing Studio
          </h1>
        </motion.div>
        <motion.div
          variants={imageAnimate}
          className="w-full flex justify-center  sm:justify-start"
        >
          <span className="scale-50">
            <Image
              width={160}
              height={160}
              className="rotatee"
              src="/home.svg"
              alt=""
            />
          </span>
        </motion.div>
      </motion.div>
      <motion.span
        variants={imageAnimate}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true }}
        className="sm:absolute sm:bottom-0 sm:left-32 sm:-translate-y-36 -translate-y-24"
      >
        <p>scroll down</p>
      </motion.span>
    </section>
  );
};

export default Hero;
