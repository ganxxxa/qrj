"use client";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./globals.css";
import { useLayoutEffect, useState, useEffect, Suspense } from "react";
import localFont from "next/font/local";
import "./style/index.scss";
import Preloader from "./components/preloder";
import Loading from "./loading";
import { motion } from "framer-motion";

const customFont = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-UltraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--custom",
});

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
  const headerAnime = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: { duration: 0.35, delay: 2 },
    },
  };
  useEffect(() => {
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, [windowWidth]);
  const [preloader, setPreloader] = useState(true);

  // useEffect(() => {
  //   // Check if the flag indicating preloader display exists in localStorage
  //   const preloaderShown = localStorage.getItem("preloaderShown");

  //   if (!preloaderShown) {
  //     // If the flag does not exist (preloader hasn't been shown), set preloader to true
  //     setPreloader(true);

  //     // Set the flag in localStorage to indicate that the preloader has been shown
  //     localStorage.setItem("preloaderShown", "true");
  //   }
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 2000);
  }, []);

  return (
    <html lang="en" className={`${customFont.variable} font-sans`}>
      <body>
        <main>
          {preloader && <Preloader />}
          <Header />
          <Suspense fallback={<Loading />}>
            <motion.main
              variants={headerAnime}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true }}
            >
              {children}
            </motion.main>
          </Suspense>
          <Footer />
        </main>
      </body>
    </html>
  );
}
