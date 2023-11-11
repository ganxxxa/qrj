"use client";

import React, { useLayoutEffect, useRef } from "react";
import SplitText from "../utils/split.min.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Who = () => {
  const textRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const split = new SplitText(textRef.current, {
      type: "words",
      wordsClass: "word",
    });

    const splitTitle = new SplitText(titleRef.current, {
      type: "chars",
      charsClass: "char",
    });
    setTimeout(() => {
      gsap.fromTo(
        split.words,
        {  color:"#888",  opacity: 0.6,},
        {
          scaleY: 1,
          x: 0,
          opacity: 1,
          color:"#fff",
          stagger: 1, // Adjust the stagger value to control the delay between words
          ease: "power4",
          scrollTrigger: {
            trigger: textRef.current, // Trigger the animation on the entire text
            start: "top center+=250",
            end: "bottom bottom",
            scrub: 2,
          },
        }
      );
      gsap.fromTo(
        splitTitle.chars,
        {
          duration: 1,
          scaleX: 0,
          opacity: 0,
          y: 100,
        },
        {
          scaleX: 1,
          y: titleRef.current.innerHeight * 1,
          opacity: 1,
          // duration: 2,
          stagger: 0.4, // Adjust the stagger value to control the delay between words
          ease: "power4.In",
          scrollTrigger: {
            trigger: titleRef.current, // Trigger the animation on the entire text
            start: "top bottom",
            end: "+=300",
            scrub: 1,
          },
        }
      );
    });
  }, []);
  return (
    <div className="py-6 px-10  sm:p-12 h-full flex flex-col  ">
      <span ref={titleRef}>
        <h3 className="text-[#FFBF00] 2xl:text-[4.5vw] lg:text-[5.6vw] sm:text-[6.7vw] text-[7.8vw] font-semibold leading-4 tracking-wide">
          WHO
        </h3>
        <h1 className="2xl:text-[7.5vw]  pt-1 lg:text-[8.6vw] sm:text-[9.8vw] text-[10.6vw] font-bold tracking-wide">
          WE ARE
        </h1>
      </span>
      <p
        ref={textRef}
        className="2xl:text-[2.1vw] lg:text-[2.4vw] sm:text-[3.3vw] text-[3.8vw] font-semibold text-justify tracking-wide pt-4 leading-relaxed"
      >
        Before we go for this topic! It’s a better idea to discuss about what is
        a digital studio. In order to understand this kind of business better,
        we have to consider this topic that in present industry of marketing and
        branding, providing services deeply, integrated and agile is a
        challenge. and that is the reason of digital studios’ birth. Now that we
        recognize the philosophy of digital studios, we can understand garage
        digital studio more effective. Garage digital studio provides full
        services in digital branding and digital marketing in an agile,
        expert-oriented and integrated way.
      </p>
    </div>
  );
};

export default Who;
