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
import Image from "next/image";
import Link from "next/link";

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
    <div className="w-full max-h-screen py-10 xl:px-36 md:px-12 px-4 sm:px-8 gap-12 flex flex-col">
      <div className="flex relative md:flex-row flex-col h-full lg:gap-16 md:gap-8 gap-20 justify-between ">
        <button className="md:absolute self-center md:top-0 md:translate-x-12 lg:translate-x-20 border border-white rounded-md h-10 w-1/2 md:w-52">
          contact us
        </button>
        {windowWidth < 768 && (
          <div className="brand basis-1/5 flex justify-center  gap-6 items-end ">
            <FaBehance size={22} />
            <FaInstagram size={22} />
            <FaLinkedinIn size={22} />
          </div>
        )}
        <div className="ftr-lnk basis-full lg:basis-5/6 md:translate-x-16 flex justify-between items-start">
          <div className="relative lg:h-32 translate-x-2 sm:translate-x-5 translate-y-10 md:translate-y-16 h-16 sm:h-24 lg:w-32 w-16 sm:w-24">
            <Image src="/logo.svg" fill className="object-fit" />
          </div>
          <ul className="flex text-justify  flex-col ">
            <h3>MAIN</h3>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/services">Services</Link>
            <Link href="contact">Contact Us</Link>
            <Link href="/work">
              <li>Work</li>
            </Link>
            <Link href="/about">
              <li>About Us</li>
            </Link>
          </ul>
          <ul className="flex flex-col ">
            <h3>SERVICES</h3>
            <Link href="/services/branding">Branding</Link>
            <li>Marketing</li>
            <li>Developing</li>
          </ul>
        </div>
        {windowWidth >= 768 && (
          <div className="brand basis-1/5 flex flex-col gap-6 items-end ">
            <FaBehance size={22} />
            <FaInstagram size={22} />
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
