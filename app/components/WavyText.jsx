"use client";
import { motion } from "framer-motion";

const WavyText = ({ text, delay = 0, duration = 0.01, replay, ...props }) => {
  let width;

  if (typeof window !== "undefined") {
    width = window.innerWidth;
  } else {
    // Handle the case when window is undefined
    width = 0;
  }

  const letters = Array.from(text);

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      style={{
        display: "flex",
        overflow: "hidden",
        maxWidth: "80vw",
      }}
      className="h-auto "
      variants={width > 800 && container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span
          className="font-black text-lg sm:text-2xl lg:text-4xl  whitespace-pre-wrap  "
          key={index}
          variants={width > 800 && child}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default WavyText;
