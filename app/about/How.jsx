"use client";

import React, { useLayoutEffect, useRef } from "react";
import SplitText from "../utils/split.min.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const How = () => {
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
        { scaleY: 0.6, opacity: 0 },
        {
          scaleY: 1,

          opacity: 1,
          duration: 4,
          stagger: 1, // Adjust the stagger value to control the delay between words
          ease: "power4",
          scrollTrigger: {
            trigger: textRef.current, // Trigger the animation on the entire text
            start: "top bottom-=200",
            end: "bottom bottom-=400",
            scrub: 2,
          },
        }
      );
      gsap.fromTo(
        splitTitle.chars,
        {
          duration: 4,
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,

          opacity: 1,
          duration: 4,
          stagger: 1, // Adjust the stagger value to control the delay between words
          ease: "power4",
          scrollTrigger: {
            trigger: titleRef.current, // Trigger the animation on the entire text
            start: "top bottom",
            end: "bottom center-=300",
            scrub: 2,
          },
        }
      );
    });
  }, []);
  return (
    <div className="p-6 my-24 sm:p-12 h-full flex flex-col  ">
      <span ref={titleRef}>
        <h3 className="text-[#FFBF00]  2xl:text-[5vw] lg:text-[6vw] sm:text-[7vw] text-[8vw] font-semibold leading-4 tracking-wide">
          HOW
        </h3>
        <h1 className="2xl:text-[7.8vw] lg:text-[8.6vw] sm:text-[9.8vw] text-[10.6vw] font-bold tracking-wide">
          WE DO IT
        </h1>
      </span>
      <img src="/how.svg" className="w-full lg:px-36 2xl:px-[15vw]" />
      <p
        ref={textRef}
        className="2xl:text-[32px]  lg:text-[2.3vw] md:text-[2.9vw] sm:text-[3.3vw] text-[3.7vw] font-semibold tracking-wide text-justify pt-4"
      >
        We mentioned that we provide our services agile, expert-oriented and
        integrated. Those are Garage digital studio SCAs.
        <br /> By agility we mean that we consider time-optimized implementation
        in operational part of our services’ funnel, which causes most effective
        results for our customers in the shortest possible time threshold.
        <br />
        By being expert-oriented we mean that for providing our services we hire
        best experts to deliver the highest quality for our dear customers,
        which can be seen easily via our projects page. And last but not least,
        when we talk about integrity, every other normal player in the market
        backs off, and that’s why we have a claim on this matter, we integrate
        all the available segments in a business, like business development
        dept, sale dept, PR dept and so on to reach the best possible outputs
        and bring a unique, integrated and a flawless result.
      </p>
    </div>
  );
};

export default How;
