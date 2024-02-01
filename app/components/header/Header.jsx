"use client";
import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import { motion } from "framer-motion";
const Header = ({ yy }) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(true);
  const navRef = useRef();
  const burgerRef = useRef();
  const headerAnime = {
    offscreen: { y: -50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, delay: 1 },
    },
  };
  useLayoutEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set the initial window width
    setWindowWidth(window.innerWidth);

    // Add event listener to update the window width on resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const yPos = yy;
    const isScrollingUp = yPos < lastYPos;

    setShouldShowActions(isScrollingUp);
    setLastYPos(yPos);
  }, [yy]);

  return (
    <motion.nav
      variants={headerAnime}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true }}
      className="z-40  fixed top-0 left-0 w-full "
    >
      <motion.div
        animate={{
          opacity: yy < 100 ? 1 : shouldShowActions ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.4 } }}
        className="bg-opacity-70 flex flex-col justify-between py-8 px-4 md:px-28 items-center   bg-black w-full h-full"
      >
        <div className="flex justify-between items-center w-full ">
          <Image
            width={78}
            height={72}
            src="/logo.svg"
            className="z-50"
            alt=""
          />
          <div className="flex justify-between gap-32">
            <div
              ref={navRef}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className={`menu  ${isOpen && "responsive_nav"}`}
            >
              <ul className="flex flex-col lg:flex-row gap-12 uppercase items-center lg:justify-end text-lg">
                <Link href="/">home</Link>
                <Link href="/services">services</Link>
                <Link href="/contact">contact us</Link>
                <Link href="/work">work</Link>
                <Link href="/about">about us</Link>
              </ul>
            </div>
            <div className="flex gap-6 items-center">
              <button className="w-14 h-8 rounded-lg  bg-white text-black">
                EN
              </button>
              {windowWidth && windowWidth < 1024 && (
                <span
                  ref={burgerRef}
                  className={`block burger-icon cursor-pointer z-50 ${
                    isOpen && "open"
                  }`}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Header;
