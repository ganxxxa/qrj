import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

const FadeInOutScroll = ({ sections }) => {
  const sectionRefs = useRef([]);
  const imgRefs = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    sectionRefs.current.forEach((sectionRef, index) => {
      const imgRef = imgRefs.current[index];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef,
          pin: true,
          anticipatePin: 1,
          scrub: 1.6,
          start: "top top",
          end: "+=1500",
        },
      });

      if (index > 0) {
        tl.from(imgRef, { opacity: 0, y: 0 }).from(sectionRef, {
          opacity: 0,
          ease: "power1.out",
          duration: 5,
        });
      }

      if (index < sectionRefs.current.length - 1) {
        tl.to(imgRef, { opacity: 0, duration: 5, y: 0, ease: "power1.out" }).to(
          sectionRef,
          { opacity: 0, ease: "power1.out", duration: 5 }
        );
      }
    });
  }, []);

  return (
    <div className="relative">
      {sections.map((section, index) => (
        <section
          className="w-screen h-screen"
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
        >
          <Image
            src={section.imgSrc}
            alt={`Section ${index + 1}`}
            className="w-full h-full"
            ref={(el) => (imgRefs.current[index] = el)}
          />
        </section>
      ))}
    </div>
  );
};

export default FadeInOutScroll;
