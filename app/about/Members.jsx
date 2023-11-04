import React, { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Members = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  const imageSources = [
    {
      src: "/members/1.jpg",
      name: "Mohsen Dehghanpour",
      job: "Founder",
    },
    { src: "/members/2.jpg", name: "Melika Abyazi", job: "Founder" },
    { src: "/members/3.jpg", name: "Ali Shetabi", job: "Art Director" },
    {
      src: "/members/4.jpg",
      name: "Ehsan Forouzan Kia",
      job: "Graphic Designer",
    },
    {
      src: "/members/5.jpg",
      name: "Mahdi Ahmadi",
      job: "Graphic Designer / Motion Designer",
    },
    { src: "/members/0.jpg", name: "Saman Atabaki", job: "Tech-Lead" },
    {
      src: "/members/0.jpg",
      name: "Ramin Alizadeh",
      job: "Full-Stack Developer",
    },
    {
      src: "/members/6.jpg",
      name: "Amirreza Safarali Zadeh",
      job: "Front-End Developer",
    },
    {
      src: "/members/7.jpg",
      name: "Maziar Vatani",
      job: "Maziar Vatani",
    },
  ];
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
            (sectionRef.current.lastChild.clientWidth + 48) *
              sectionRef.current.childElementCount -
            sectionRef.current.clientWidth;

          return `-${sectionWidth}px`;
        },
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          pin: true,
          end: "100%",
          scrub: 1,
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
    <section className="overflow-hidden">
      <div ref={triggerRef} className="w-screen   h-screen">
        <h1
          style={{ textShadow: "-3px 3px 8px rgba(92, 92, 92, 0.2);" }}
          className="p-16 w-full text-5xl font-bold uppercase bg-black"
        >
          garage members
        </h1>
        <div
          ref={sectionRef}
          className="ml-16 mt-[1vh] flex flex-grow justify-start  w-screen gap-10"
        >
          {imageSources.map((item, index) => (
            <div className="max-w-[600px] min-w-[260px] sm:h-[60vh] h-[45vh] flex-shrink-0">
              <img
                className="img-ptrn rounded-none h-full object-cover"
                src={item.src}
                key={index}
              />
              <h3 className="font-bold text-[#FFBF00] sm:text-2xl lg:text-3xl text-xl py-2">
                {item.name}
              </h3>
              <h6 className="font-bold text-lg sm:text-xl lg:text-2xl">{item.job}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;