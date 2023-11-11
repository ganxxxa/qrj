"use client";

import React, { useLayoutEffect, useRef } from "react";
import SplitText from "../utils/split.min.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const What = () => {
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const blurRef = useRef(null);

  useLayoutEffect(() => {
    const childrenArray = gsap.utils.toArray(blurRef.current.children);

    const split = new SplitText(textRef.current, {
      type: "words",
      wordsClass: "word",
    });

    const splitTitle = new SplitText(titleRef.current, {
      type: "chars",
      charsClass: "char",
    });


    const textChange = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.4,

        pin: true,
      },
    });
    setTimeout(() => {
      // gsap.fromTo(
      //   split.words,
      //   { scaleY: 0.6, opacity: 0 },
      //   {
      //     opacity: 1,
      //     scaleY: 1,

      //     duration: 4,
      //     stagger: 1, // Adjust the stagger value to control the delay between words
      //     ease: "power4",
      //     scrollTrigger: {
      //       trigger: textRef.current, // Trigger the animation on the entire text
      //       start: "top center+=300",
      //       end: "bottom bottom-=300",
      //       scrub: 1.5,
      //     },
      //   }
      // );
      gsap.fromTo(
        splitTitle.chars,
        { opacity: 0, scaleX: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 4,
          stagger: 1, // Adjust the stagger value to control the delay between words
          ease: "power4",
          scrollTrigger: {
            trigger: containerRef.current, // Trigger the animation on the entire text
            start: "top top+=200",
            end: "+=100",
            scrub: 1.5,
          },
        }
      );
gsap.fromTo(
  blurRef.current,{
    opacity:0,
    x:700
  },{
    opacity:1,
    x:0,
    ease:"power1.out",
    scrollTrigger: {
      trigger: containerRef.current, // Trigger the animation on the entire text
      start: "top top+=100",
      end: "+=100",
      scrub: 1.5,
    },
  }
)
      textChange
        // .to("body", { duration: 1 })
        .to(textRef.current, { opacity: 1, duration: 0.1 }, 0.05)
        .to(textRef.current, { opacity: 0, duration: 0.1 }, 0.25)
        .to(childrenArray[0], { className: "blur-[12px]", duration: 0.1 }, 0.25)
        .set(
          textRef.current,
          {
            innerHTML:
              "Transform your brand's presence with our integrated marketing, digital marketing, and brand strategy services at our advertising studio. Our team combines cutting-edge digital strategies with proven brand-building expertise to enhance your online and offline visibility. From crafting compelling content to optimizing your online presence, we drive growth and engagement. Let us shape your brand's narrative, connect with your audience, and propel your business to new heights in the digital age.",
          },
          0.34
        )
        .to(textRef.current, { opacity: 1, duration: 0.1 }, 0.35)
        .to(childrenArray[1], { className: "", duration: 0.1 }, 0.35)
        .to(textRef.current, { opacity: 0, duration: 0.05 }, 0.6)
        .to(childrenArray[1], { className: "blur-[12px]", duration: 0.1 }, 0.6)
        .set(
          textRef.current,
          {
            innerHTML:
              "Experience a seamless blend of innovation and brand strategy with our web and application development services at our advertising studio. We create customized digital solutions that not only elevate your online presence but also align perfectly with your brand identity. Our experts ensure user-friendly designs and cutting-edge technology to engage your audience effectively. Let us harmonize your brand strategy with digital excellence, delivering a holistic approach to your online success.",
          },
          0.69
        )
        .to(textRef.current, { opacity: 1, duration: 0.1 }, 0.7)
        .to(childrenArray[2], { className: "", duration: 0.1 }, 0.7);
    });
  }, []);
  return (
    <main
      ref={containerRef}
      className="h-[300vh] px-4 w-screen sm:my-16  sm:py-20 sm:px-28 xl:my-[4vw]"
    >
      <div className="h-screen w-full flex flex-col justify-evenly  gap-[3vh] lg:gap-0 2xl:translate-y-12 relative">
        <span ref={titleRef}>
          <h3 className="text-[#FFBF00]   2xl:text-[4.5vw] lg:text-[5.6vw] sm:text-[6.7vw] text-[8vw]  font-semibold leading-6 tracking-wide">
            WHAT
          </h3>
          <h1 className="2xl:text-[7.5vw] lg:text-[8.6vw] pt-1 sm:text-[9.8vw] text-[11vw]  font-bold tracking-wide">
            WE DO
          </h1>
        </span>
        <div className="flex flex-col-reverse  lg:flex-row h-[70vh] lg:h-full translate-y-6 justify-between">
          <p
            ref={textRef}
            className="2xl:text-[30px] lg:text-[1.65vw] md:text-[2.5vw] sm:text-[2.8vw] text-[calc(2.3vw+1vh)] lg:w-2/3 h-3/4 opacity-0 font-normal text-justify tracking-wide pt-4 "
          >
            Elevate your brand with our comprehensive branding and brand
            strategy services at our advertising studio. We meticulously craft
            brand identities that resonate with your target audience, using a
            blend of creativity and strategic thinking. From logo design to
            messaging, we ensure every element aligns with your brand's essence.
            Our data-driven approach and industry expertise help you stand out
            in a competitive market, creating a lasting and meaningful
            connection with your customers. Let us shape your brand's success
            story.
          </p>
          <div
            ref={blurRef}
            className="text-2xl flex lg:flex-col md:gap-28 2xl:gap-40 sm:gap-20 gap-[5vw] text-[4.7vw] sm:text-[3.7vw] justify-around  lg:justify-normal  content-between translate-y-1/4 sm:-translate-y-20 2xl:-translate-y-40"
          >
            <h3 className="">Branding</h3>
            <h3 className="blur-[12px]">Marketing</h3>
            <h3 className="blur-[12px]">Developing</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default What;
