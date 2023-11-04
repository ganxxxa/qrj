"use client";
import React, { useRef, useLayoutEffect } from "react";
// import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Morph = ({ beforeImageSrc, afterImageSrc, title }) => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    console.log(containerRef);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.4,
        pin: true,
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
    <main className="h-[130vh] bg-white">
      <div ref={containerRef} className="h-[130vh] w-screen overflow-hidden">
        <section ref={sectionRef} className="h-full relative">
          <div className="absolute top-0 max-h-screen flex items-center scale-90 justify-center ">
            <img
              className="w-screen h-fit max-h-screen"
              src={beforeImageSrc}
              alt="before"
            />
          </div>
          <div
            ref={imgRef}
            className="absolute translate-x-full h-screen flex items-center justify-center overflow-hidden top-0"
          >
            <img
              className="w-screen h-fit max-h-screen -translate-x-full"
              src={afterImageSrc}
              alt="after"
            />
          </div>
          <h1 className="aboslute lg:text-5xl 2xl:text-6xl text-black font-bold translate-y-40 lg:translate-x-32 2xl:translate-x-56 z-50">
            {title}
          </h1>
        </section>
      </div>
    </main>
  );
};

export default Morph;
