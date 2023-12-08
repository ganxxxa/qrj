"use client";
// import Lenis from "@studio-freight/lenis";
import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../utils/split.min.js";
gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollAnimation() {
  const [videoDuration, setVideoDuration] = useState(null);

  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  // const scrollSectionRef = useRef(null);
  // useLayoutEffect(() => {
  //   const lenis = new Lenis({
  //     lerp: 0.05,
  //     smoothTouch: true,
  //     easing: "easeInCubic",
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   lenis.on("scroll", ScrollTrigger.update);

  //   gsap.ticker.add((time) => {
  //     lenis.raf(time * 1000);
  //   });

  //   gsap.ticker.lagSmoothing(0);
  //   requestAnimationFrame(raf);
  // }, []);

  useLayoutEffect(() => {
    const oddChildren = Array.from(textRef.current.children).filter(
      (_, index) => index % 2 == 0
    );

    const video = videoRef.current;
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

    // Pin video at the start of the timeline
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: video,
      scrub: 3,
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
    // Add animations to the timeline
    setTimeout(() => {
      timeline
        .to(video, { currentTime: video.duration, ease: "power4.In" })
        .from(split.chars, { opacity: 0, duration: 0.01, stagger: 0.002 }, 0.03)

        .to(
          oddChildren,
          { color: "#000", duration: 0.03, stagger: 0.0001 },
          0.155
        )
        .to(
          sectionRef.current,
          { backgroundColor: "#fff", duration: 0.03 },
          0.158
        )
        .to(
          split2.chars,
          { color: "#FFF", duration: 0.03, stagger: 0.001 },
          0.16
        )
        .to(
          split2.chars,
          { color: "#FFBF00", duration: 0.03, stagger: 0.005 },
          0.165
        );
    });
    return () => {
      // Kill the ScrollTrigger instances to prevent memory leaks
      timeline.scrollTrigger.kill();
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  useEffect(() => {
    const video = videoRef.current;

    video.addEventListener("loadedmetadata", () => {
      const playbackConst = 500;
      const scrollSection = sectionRef.current;
      console.log("scrollSection", videoRef.current.duration);
      // if (videoRef?.current) {
      //   scrollSection.style.height =
      //     Math.floor(duration) * playbackConst + "px";
      // }
      setVideoDuration(duration);
    });

    return () => {
      video.removeEventListener("loadedmetadata", () => {});
    };
  }, []);
  return (
    <div ref={sectionRef} className="h-[1000vh] relative m-0 p-0 w-screen">
      <div>
        <video
          ref={videoRef}
          className="h-screen w-full object-cover top-0 left-0"
          preload="preload"
          onLoadedData={() => {
            setVideoDuration(duration);
          }}
        >
          <source src="Home.mp4" type="video/mp4"></source>
        </video>
        {/* <div ref={scrollSectionRef} className="block"></div> */}
        <div className="absolute w-screen h-screen top-0 left-0 flex items-center">
          <div
            ref={textRef}
            className="flex flex-col items-center lg:items-start justify-center w-full text-6xl sm:text-8xl  uppercase font-black lg:px-36 text-white"
          >
            <span>here</span>
            <span ref={textRef2} className="age flex gap-6">
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
