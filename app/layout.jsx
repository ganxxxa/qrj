"use client";
import Lenis from "@studio-freight/lenis";
import ScrollAnimation from "./components/FadeInOutScroll";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useLayoutEffect ,useEffect} from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout({ children }) {
  useEffect(() => {
    const handleResize = () => {
      // Refresh the page on resize
      window.location.reload();
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  useLayoutEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothTouch: true,
      easing: "easeOutCirc",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    requestAnimationFrame(raf);
  }, []);

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
