"use client";
// import Lenis from "@studio-freight/lenis";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../utils/split.min.js";
gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollAnimation() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const textRef2 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    const oddChildren = Array.from(textRef.current.children).filter(
      (_, index) => index % 2 == 0
    );
    const text = textRef.current;
    const stroke = text.children[1];
    const split = new SplitText(textRef.current, {
      type: "chars",
      wordsClass: "char",
    });
    const split2 = new SplitText(textRef2.current, {
      type: "chars",
      wordsClass: "char",
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5,
      pin: videoRef.current,
      onUpdate: (self) => {
        if (videoRef.current && videoRef.current.duration) {
          videoRef.current.currentTime =
            videoRef.current.duration * self.progress.toFixed(100);
        }
      },
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: text,
      scrub: 2,
    });

    setTimeout(() => {
      timeline

        .from(split.chars, { opacity: 0, duration: 0.01, stagger: 0.002 }, 0.03)
        .to(
          split2.chars,
          { color: "#FFF", duration: 0.03, stagger: 0.0004 },
          0.1
        )
        .to(
          split2.chars,
          { color: "#FFBF00", duration: 0.03, stagger: 0.001 },
          0.1001
        )
        .to(
          oddChildren,
          { color: "#000", duration: 0.03, stagger: 0.0001 },
          0.11
        );

      console.log(stroke);
    });
  }, []);

  return (
    <div ref={sectionRef} className="h-[1000vh] relative m-0 p-0 w-screen">
      <div>
        <video
          ref={videoRef}
          className="h-screen w-full object-cover top-0 left-0"
          preload="auto"
          muted
          playsInline
        >
          <source src="bg1.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>

        {/* <div ref={scrollSectionRef} className="block"></div> */}
        <div className="absolute w-screen h-screen top-0 left-0 flex items-center">
          <div
            ref={textRef}
            className="flex flex-col items-center lg:items-start justify-center w-full text-5xl sm:text-8xl  uppercase font-black lg:px-36 text-white"
          >
            <span>here</span>
            <span ref={textRef2} className="age  flex gap-6">
              <h1>we</h1>
              <h1>shine</h1>
            </span>
            <span>your brand</span>
          </div>
        </div>
      </div>
    </div>
  );
}
