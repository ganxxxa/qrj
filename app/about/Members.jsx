import React, { useRef, useLayoutEffect } from "react";
import SplitText from "../utils/split.min.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const Members = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  const imageSources = [
    {
      src: "/members/1.jpg",
      name: "Mohsen Dehghanpour",
      job: "CO-Founder",
    },
    { src: "/members/2.jpg", name: "Melika Abyazi", job: "CO-Founder" },
    { src: "/members/3.jpg", name: "Ali Shetabi", job: "Art Director" },
    {
      src: "/members/4.jpg",
      name: "Ehsan Forouzan Kia",
      job: "Graphic Designer",
    },
    {
      src: "/members/5.jpg",
      name: "Mahdi Ahmadi",
      job: "Graphic / Motion Designer",
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
      job: "SEO Master",
    },
  ];
  useLayoutEffect(() => {
    const splitTitle = new SplitText(headerRef.current, {
      type: "chars",
      charsClass: "char",
    });

    gsap.fromTo(
      splitTitle.chars,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top bottom-=100",
          end: "+=100",
          scrub: 1,
        },
      }
    );

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: "0%",
      },
      {
        translateX: () => {
          // Retrieve the width of the sectionRef element
          const sectionWidth =
            (sectionRef.current.lastChild.clientWidth + 46) *
              sectionRef.current.childElementCount -
            sectionRef.current.clientWidth -
            12;

          return `-${sectionWidth}px`;
        },
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          pin: true,
          end: "100%",
          scrub: 2,
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
    <section className=" font-gilroy overflow-hidden">
      <div ref={triggerRef} className="w-screen h-screen">
        <h1
          ref={headerRef}
          style={{ textShadow: "-3px 3px 8px rgba(92, 92, 92, 0.2)" }}
          className="py-[12vh] sm:py-10  text-center sm:text-start sm:px-28 w-full 2xl:text-5xl text-4xl font-bold uppercase bg-black"
        >
          garage members
        </h1>
        <div
          ref={sectionRef}
          className="ml-10 sm:ml-16   flex flex-grow justify-start  w-screen gap-10"
        >
          {imageSources.map((item, index) => (
            <div
              key={index}
              className="max-w-[600px] min-w-[280px] sm:h-[60vh] h-[50vh] flex-shrink-0"
            >
              <div className="h-full  w-full relative">
                <Image
                  fill
                  className="img-ptrn rounded-none grayscale object-cover"
                  src={item.src}
                />
              </div>
              <h3 className="font-bold text-[#FFBF00]  text-xl lg:text-2xl  py-2">
                {item.name}
              </h3>
              <h6 className="font-bold  text-lg lg:text-xl">{item.job}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
