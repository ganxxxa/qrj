"use client";
import React, { useEffect, useRef } from "react";
import "./styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Vid() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ref.current.pause();
    ref.current.currentTime = 0;
    ScrollTrigger.create({
      trigger: ".box",
      start: "top top ",
      scrub: 4,
      pin: true,
      onUpdate: (self) => {
        ref.current.currentTime =
          ref.current.duration * self.progress.toFixed(100) * 0.1;
      },
    });
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="box">
        <video className="w-screen" id="v0" preload="preload" muted ref={ref}>
          <source
            src="https://svpvodps-vh.akamaized.net/special/spesial/2019/hercules-ulykken/start-1200.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
      </div>
    </div>
  );
}
