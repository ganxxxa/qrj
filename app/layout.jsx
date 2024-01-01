"use client";

import ScrollAnimation from "./components/FadeInOutScroll";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useLayoutEffect, useState, useEffect, Suspense } from "react";
import gsap from "gsap";
import "./style/index.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./components/preloder";
import Loading from "./loading";

export default function RootLayout({ children }) {
  let width;

  if (typeof window !== "undefined") {
    width = window.innerWidth;
  } else {
    // Handle the case when window is undefined
    width = 0;
  }
  const [windowWidth, setWindowWidth] = useState(width);

  const refreshPage = () => {
    window.location.reload(true);
  };

  // Check window width on resize
  const checkWindowWidth = () => {
    setWindowWidth(window.innerWidth);

    if (window.innerWidth != windowWidth) {
      refreshPage();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, [windowWidth]);
  const [preloader, setPreload] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreload(false);
    }, 10000);
  }, []);
  return (
    <html>
      <body></body>

      <body>
        {/* {preloader && <Preloader />} */}
        <Header />
        <Suspense fallback={<Loading />}>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
