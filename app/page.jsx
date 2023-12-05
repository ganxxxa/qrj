"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/app/components/Hero";
import VideoScrollAnimation from "./components/VideoScrollAnimation";
import CardSection from "./components/CardSection";
import SnapScroll from "./components/SnapScroll";
import Contact from "./components/Contact";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-24">
      <Hero />

      <VideoScrollAnimation />
      <CardSection />
      <SnapScroll />
      <Contact />
    </main>
  );
}
