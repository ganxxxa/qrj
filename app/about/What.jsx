"use client";

import React, { useLayoutEffect, useRef } from "react";
import SplitText from "../utils/split.min.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const What = () => {
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const blurRef = useRef(null);

  useLayoutEffect(() => {
    const childrenArray = gsap.utils.toArray(blurRef.current.children);

    const split = new SplitText(textRef.current, {
      type: "words",
      wordsClass: "word",
    });

    const splitTitle = new SplitText(titleRef.current, {
      type: "chars",
      charsClass: "char",
    });

    const textChange = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.4,

        pin: true,
      },
    });
    setTimeout(() => {
      // gsap.fromTo(
      //   split.words,
      //   { scaleY: 0.6, opacity: 0 },
      //   {
      //     opacity: 1,
      //     scaleY: 1,

      //     duration: 4,
      //     stagger: 1, // Adjust the stagger value to control the delay between words
      //     ease: "power4",
      //     scrollTrigger: {
      //       trigger: textRef.current, // Trigger the animation on the entire text
      //       start: "top center+=300",
      //       end: "bottom bottom-=300",
      //       scrub: 1.5,
      //     },
      //   }
      // );
      gsap.fromTo(
        splitTitle.chars,
        { opacity: 0, scaleX: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 4,
          stagger: 1, // Adjust the stagger value to control the delay between words
          ease: "power4",
          scrollTrigger: {
            trigger: titleRef.current, // Trigger the animation on the entire text
            start: "top top+=200",
            end: "bottom bottom-=300",
            scrub: 1.5,
          },
        }
      );

      textChange
        // .to("body", { duration: 1 })
        .to(textRef.current, { opacity: 1, duration: 0.1 }, 0.05)
        .to(textRef.current, { opacity: 0, duration: 0.1 }, 0.25)
        .to(childrenArray[0], { className: "blur-[12px]", duration: 0.1 }, 0.25)
        .set(
          textRef.current,
          {
            innerHTML:
              "Transform your brand's presence with our integrated marketing, digital marketing, and brand strategy services at our advertising studio. Our team combines cutting-edge digital strategies with proven brand-building expertise to enhance your online and offline visibility. From crafting compelling content to optimizing your online presence, we drive growth and engagement. Let us shape your brand's narrative, connect with your audience, and propel your business to new heights in the digital age.",
          },
          0.34
        )
        .to(textRef.current, { opacity: 1, duration: 0.1 }, 0.35)
        .to(childrenArray[1], { className: "", duration: 0.1 }, 0.35)
        .to(textRef.current, { opacity: 0, duration: 0.05 }, 0.6)
        .to(childrenArray[1], { className: "blur-[12px]", duration: 0.1 }, 0.6)
        .set(
          textRef.current,
          {
            innerHTML:
              "Experience a seamless blend of innovation and brand strategy with our web and application development services at our advertising studio. We create customized digital solutions that not only elevate your online presence but also align perfectly with your brand identity. Our experts ensure user-friendly designs and cutting-edge technology to engage your audience effectively. Let us harmonize your brand strategy with digital excellence, delivering a holistic approach to your online success.",
          },
          0.69
        )
        .to(textRef.current, { opacity: 1, duration: 0.1 }, 0.7)
        .to(childrenArray[2], { className: "", duration: 0.1 }, 0.7);
    });
  }, []);
  return (
    <main
      ref={containerRef}
      className="h-[300vh] w-screen my-16 py-20 p-6 sm:p-12 md:p-16 xl:my-[4vw]"
    >
      <div className="h-screen w-full flex flex-col gap-6 2xl:translate-y-12 relative">
        <span ref={titleRef}>
          <h3 className="text-[#FFBF00]  2xl:text-[5vw] lg:text-[6vw] sm:text-[7vw] text-[8vw] font-semibold leading-6 tracking-wide">
            WHAT
          </h3>
          <h1 className="2xl:text-[7.8vw] lg:text-[8.6vw] sm:text-[9.8vw] text-[10.6vw] font-bold tracking-wide">
            WE DO
          </h1>
        </span>
        <div className="flex translate-y-6 justify-between">
          <p
            ref={textRef}
            className="2xl:text-[30px] lg:text-[1.85vw] md:text-[2.6vw] sm:text-[2.9vw] text-[3.3vw] w-2/3 h-3/4 opacity-0 font-semibold tracking-wide pt-4 "
          >
            Elevate your brand with our comprehensive branding and brand
            strategy services at our advertising studio. We meticulously craft
            brand identities that resonate with your target audience, using a
            blend of creativity and strategic thinking. From logo design to
            messaging, we ensure every element aligns with your brand's essence.
            Our data-driven approach and industry expertise help you stand out
            in a competitive market, creating a lasting and meaningful
            connection with your customers. Let us shape your brand's success
            story.
          </p>
          <div
            ref={blurRef}
            className="text-2xl flex flex-col md:gap-28 2xl:gap-40 sm:gap-20 gap-16 text-[5.4vw] lg:text-[4vw] content-between -translate-y-20 2xl:-translate-y-40"
          >
            <h3 className="">Branding</h3>
            <h3 className="blur-[12px]">marketing</h3>
            <h3 className="blur-[12px]">developing</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default What;
