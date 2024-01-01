"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const contactRef = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const contact = contactRef.current;
    gsap.from(contactRef.current.children, {
      scaleY: 0.7,
      opacity: 0,
      y: -50,
      stagger: 0.3,

      scrollTrigger: {
        trigger: contactRef.current,
        start: "top center",
        end: "top center-=200",

        ease: "power4.In",
      },
    });
  }, []);

  return (
    <div>
      {" "}
      <div
        className="max-h-screen w-screen px-4 flex flex-col justify-center gap-10 py-24 items-center text-center bg-gray-50 text-black "
        ref={contactRef}
      >
        <h1 className="text-[calc(24px+2vw)]">
          Let's ignite your brand's potential together!
        </h1>
        <h3 className="max-w-5xl text-[calc(24px+1vw)]">
          Contact us now to spark the flame and make your brand shine like never
          before.
        </h3>
        <div className="flex gap-10 ">
          <a className="bg-black hover:bg-gray-900 cursor-pointer text-white font-bold text-sm sm:text-base  py-3 px-8  rounded-xl">
            CONTACT US
          </a>
          <a className="bg-black hover:bg-gray-900 cursor-pointer text-white font-bold  text-sm sm:text-base py-3 px-8 rounded-xl ">
            VIEW WORKS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
