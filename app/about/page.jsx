"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Who from "./Who";
import What from "./What";
import How from "./How";
import Members from "./Members";
import Contact from "../components/Contact";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const mainRef = useRef(null);
  // const imgRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const main = mainRef.current;
    // const img = imgRef.current;
    const text = textRef.current;

    const tl2 = gsap.timeline();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top top",
        // end: "+=300",
        scrub: true,
        pin: true,
        ease: "power4.Out",
      },
    });

    // gsap.fromTo(
    //   img,
    //   {
    //     scale: 1,
    //   },
    //   {
    //     scale: 30,
    //     scrollTrigger: {
    //       trigger: img,
    //       start: "top top", // Start fading in when the main section is at the center of the viewport
    //       end: "+=600vh", // Finish fading in when the main section is at the center of the viewport
    //       scrub: 2,
    //       pin: true,
    //       ease: "circ.In",
    //     },
    //   }
    // );
    // gsap.to(main, {
    //   backgroundColor: "black", // Change the background color to black
    //   scrollTrigger: {
    //     trigger: img, // Use the image section as the trigger
    //     start: "center center-=100", // Start changing the background color when the bottom of the image reaches the top of the viewport
    //     end: "center center", // End changing the background color when the main section is at the center of the viewport
    //     scrub: 1.5,
    //     ease: "power4.Out",
    //   },
    // });
    tl.fromTo(
      text,
      {
        // opacity: 0,
        scaleY: 1,
      },
      {
        // opacity: 1,
        scaleY: 0.7,
        opacity: 0,
      }
    );
    // .to(
    //   [text],
    //   {
    //     opacity: 0,
    //   },
    //   0.6
    // );
  }, []);

  return (
    <main
      className="flex sm:px-10 md:px-16 min-h-screen flex-col items-center justify-between py-24 overflow-x-hidden bg-black"
      ref={mainRef}
    >
      <div ref={textRef} className="relative w-screen h-[150vh]">
        <h1 className="absolute top-1/3 left-1/2 -translate-y-full -translate-x-1/2 uppercase whitespace-nowrap text-[7vw] sm:text-5xl lg:text-6xl  2xl:text-[3.8vw] text-slate-100 font-bold ">
          About garage
        </h1>
      </div>
      <div className="w-screen h-[50vh]"></div>
      <Who />
      <What />
      <How />
      <Members />
      <Contact />
    </main>
  );
};

export default Page;
