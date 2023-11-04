"use client";
import React, { useLayoutEffect, useState } from "react";
import {
  FaDribbble,
  FaBehance,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import "./style.scss";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(null);

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
  return (
    <div className="w-full py-36 xl:px-36 md:px-12 px-2 sm:px-8 gap-12 flex flex-col">
      <div className="flex relative md:flex-row flex-col h-full lg:gap-16 md:gap-8 gap-20 justify-between ">
        <button className="md:absolute self-center md:top-0 md:translate-x-12  lg:translate-x-20 border border-white rounded-md h-10 w-1/2 md:w-52">
          contact us
        </button>
        {windowWidth < 768 && (
          <div className="brand basis-1/5 flex justify-center  gap-6 items-end ">
            <FaDribbble size={22} />
            <FaBehance size={22} />
            <FaInstagram size={22} />
            <FaTwitter size={22} />
            <FaFacebookF size={22} />
            <FaLinkedinIn size={22} />
          </div>
        )}
        <div className="ftr-lnk basis-full lg:basis-5/6 md:translate-x-16 flex justify-between items-start md:mt-52">
          <img src="/logo.svg" className="lg:h-32 h-16 sm:h-24" />
          <ul className="flex flex-col ">
            <h3>MAIN</h3>
            <a href="/home">
              <li>Home</li>
            </a>
            <li>Services</li>
            <li>Blog</li>
            <a href="/work">
              <li>Work</li>
            </a>
            <a href="/about">
              <li>About Us</li>
            </a>
          </ul>
          <ul className="flex flex-col ">
            <h3>SERVICES</h3>
            <li>Branding</li>
            <li>Marketing</li>
            <li>Developing</li>
          </ul>
          <ul className="flex flex-col ">
            <h3>SERVICES</h3>
            <li>Branding</li>
            <li>Marketing</li>
            <li>Developing</li>
          </ul>
        </div>
        {windowWidth >= 768 && (
          <div className="brand basis-1/5 flex flex-col gap-6 items-end ">
            <FaDribbble size={22} />
            <FaBehance size={22} />
            <FaInstagram size={22} />
            <FaTwitter size={22} />
            <FaFacebookF size={22} />
            <FaLinkedinIn size={22} />
          </div>
        )}
      </div>
      <span className="h-px w-full bg-white"></span>
      <div className="ftr-sub flex-col gap-4 sm:gap-0 sm:flex-row  flex justify-between  items-center">
        <div className="flex lg:gap-8 md:gap-6 gap-4 items-center">
          <button className="border border-white rounded-md px-5 py-0.5">
            EN
          </button>
          <p>Terms & Conditions</p>
          <p>Privacy</p>
          <p>Cookies Policy</p>
        </div>
        <p>2021 - 2023 - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;