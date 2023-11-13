"use client";
import React, { useRef, useLayoutEffect } from "react";
// import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Morph = ({
  beforeImageSrc,
  afterImageSrc,
  title,
  titleColor,
  title2,
}) => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center+=100",
        end: "+=100",
        scrub: 1.4,
        // pin: true,
      },
    });

    tl.fromTo(imgRef.current, { xPercent: 100, x: 0 }, { xPercent: 0 });
    tl.fromTo(
      imgRef.current.querySelector("img"),
      { xPercent: -100, x: 0 },
      { xPercent: 0 },
      0
    );
  }, []);

  return (
    <main className=" bg-white">
      <div ref={containerRef} className=" w-screen overflow-hidden">
        <section
          ref={sectionRef}
          className="relative  h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
        >
          <h1 className="text-xl sm:text-4xl mt-12 sm:mt-16 lg:mt-20 px-10 sm:px-24 lg:text-5xl 2xl:text-6xl text-black font-bold w-screen sm:absolute z-40">
            {title}
            <span className={`${titleColor}`}>{title2}</span>
          </h1>
          <div className="absolute top-0  h-full flex items-center   justify-center ">
            <img className="w-screen  " src={beforeImageSrc} alt="before" />
          </div>
          <div
            ref={imgRef}
            className="absolute translate-x-full h-full flex items-center justify-center overflow-hidden top-0"
          >
            <img
              className="w-screen   -translate-x-full"
              src={afterImageSrc}
              alt="after"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Morph;
