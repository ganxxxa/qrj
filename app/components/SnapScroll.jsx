"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SnapScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const sections = Array.from(sectionRef.current.children);
    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { backgroundPosition: "-500px -100px", backgroundSize: "270%" },
        {
          backgroundPosition: "-500px 100px",
          backgroundSize: "299%", // Adjust the percentage based on your preference
          ease: "none",
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      const timeline2 = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });

      timeline2.from(section.children, {
        opacity: 0,
        yPercent: 20,
        // add other animation properties as needed
      });
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="my-0 mx-0 p-0 h-full w-screen overflow-x-hidden sm:px-24 lg:px-64"
    >
      <section
        className="panel flex flex-col justify-center h-screen shd items-center gap-12 text-center bg-cover bg-center bg-[url('/bra.jpg')]"
        data-scroll
      >
        <h1 className="uppercase text-5xl sm:text-6xl font-bold">Branding</h1>
        <p
          style={{ textAlignLast: "center" }}
          className="text-justify px-8 sm:px-14 lg:px-20 text-lg"
        >
          We turn ideas into reality with creative solutions that help you stand
          out. Our team brings together innovative thinking and cutting-edge
          technology to develop customized branding, marketing, and web
          solutions that exceed your expectations
        </p>
        <a className="uppercase bg-white px-4 py-2 text-black rounded-lg">
          view service
        </a>
      </section>
      <section
        className="panel flex flex-col justify-center h-screen shd items-center gap-12 text-center bg-cover bg-center bg-[url('/mark.jpg')]"
        data-scroll
      >
        <h1 className="uppercase text-5xl sm:text-6xl font-bold">Marketing</h1>
        <p
          style={{ textAlignLast: "center" }}
          className="text-justify px-8 text-lg"
        >
          We turn ideas into reality with creative solutions that help you stand
          out. Our team brings together innovative thinking and cutting-edge
          technology to develop customized branding, marketing, and web
          solutions that exceed your expectations{" "}
        </p>
        <a className="uppercase bg-white px-4 py-2 text-black rounded-lg">
          view service
        </a>
      </section>
      <section
        className="panel flex flex-col justify-center h-screen shd items-center gap-12 text-center bg-cover bg-center bg-[url('/dev.jpg')]"
        data-scroll
      >
        <h1 className="uppercase text-5xl sm:text-6xl font-bold">
          Development
        </h1>
        <p
          style={{ textAlignLast: "center" }}
          className="text-justify px-8 text-lg"
        >
          We turn ideas into reality with creative solutions that help you stand
          out. Our team brings together innovative thinking and cutting-edge
          technology to develop customized branding, marketing, and web
          solutions that exceed your expectations
        </p>
        <a className="uppercase bg-white px-4 py-2 text-black rounded-lg">
          view service
        </a>
      </section>
    </div>
  );
};

export default SnapScroll;
