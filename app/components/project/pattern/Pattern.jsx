import React, { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./style.css";

const Pattern = ({ imageSources, title, title1, absolute }) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: "0%",
      },
      {
        translateX: () => {
          // Retrieve the width of the sectionRef element
          const sectionWidth =
            sectionRef.current.firstChild.clientWidth *
              sectionRef.current.childElementCount -
            sectionRef.current.clientWidth;

          // console.log(sectionRef);
          return `-${sectionWidth}px`;
        },
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          pin: true,
          end: "100%",
          scrub: 3,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className={`scroll-section-outer overflow-hidden`}>
      <div ref={triggerRef} className="w-screen  max-h-screen">
        <h1
          style={{ textShadow: "-3px 3px 8px rgba(92, 92, 92, 0.2);" }}
          className={`py-8 sm:py-10 ${absolute} z-10 px-10 sm:px-24 text-2xl sm:text-4xl lg:text-5xl font-bold`}
        >
          <span className="text-black"> {title1} </span>
          {title}
        </h1>
        <div ref={sectionRef} className="flex flex-grow">
          {imageSources.map((src, index) => (
            <div key={index} className="h-screen  flex-shrink-0">
              <img className={`rounded-none h-full  object-cover `} src={src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pattern;
