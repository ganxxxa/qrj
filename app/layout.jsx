"use client";

import ScrollAnimation from "./components/FadeInOutScroll";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import "./style/index.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout({ children }) {
  let width;

  if (typeof window !== "undefined") {
    width = window.innerWidth;
  } else {
    // Handle the case when window is undefined
    width = 0; // or any default value you prefer
  }
  const [windowWidth, setWindowWidth] = useState(width);
  const refreshPage = () => {
    window.location.reload(true);
  };

  // Check window width on resize
  const checkWindowWidth = () => {
    // Update the state with the current window width
    setWindowWidth(window.innerWidth);

    // Check if the window width is less than the threshold and not equal to the state
    if (window.innerWidth != windowWidth) {
      refreshPage();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, [windowWidth]); // Include windowWidth in the dependency array to ensure the effect runs on windowWidth change

  return (
    <html>
      {/* <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div> */}
      {/* page  */}
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
