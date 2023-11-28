"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollAnimation() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  // const scrollSectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    // const scrollSection = scrollSectionRef.current;

    // Pin video at the start of the timeline
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: video,
      scrub: 1.2,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", // Animation starts when the top of sectionRef hits the top of the viewport
        end: "bottom bottom", // Animation ends when the bottom of sectionRef hits the bottom of the viewport
        scrub: 1.2, // Smooth scrubbing effect
        markers: true,
      },
    });

    // Add animations to the timeline
    timeline.to(video, { currentTime: video.duration, ease: "power4.In" });
    // .to(scrollSection, { height: "100%", ease: "none" }, 0);
    const { duration } = video;
    console.log(videoRef);
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
      // Output: video duration in seconds
    });

    return () => {
      video.removeEventListener("loadedmetadata", () => {});
    };
  }, []);
  return (
    <div ref={sectionRef} className="h-[800vh] m-0 p-0 w-screen">
      <div>
        <video
          ref={videoRef}
          className="h-screen w-full object-cover top-0 left-0"
          preload="auto"
          src="Home_BG.mp4"
        >
          <source></source>
        </video>
        {/* <div ref={scrollSectionRef} className="block"></div> */}
      </div>
    </div>
  );
}
