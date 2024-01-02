"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import "./styles.scss";

const Preloader = () => {
  const ref = React.useRef();
  const percentRef = React.useRef();
  const barRef = React.useRef();
  const innerRef = React.useRef();
  const textRef = React.useRef();
  const headingRef = React.useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl
      // .fromTo(
      //   percentRef.current,
      //   { opacity: 1, zIndex: 1, duration: 2 },
      //   { delay: 2, opacity: 0, zIndex: -1, duration: 2 }
      // )
      // .to(barRef.current, {
      //   opacity: 0,
      //   zIndex: -1,
      // })
      .set(innerRef.current, {
        translateY: "-100%",
      })
      .set(
        textRef.current,
        {
          opacity: 1,
          boxShadow: "12px 20px rgba(255, 255, 255, 0.23)",
          y: "10%",
          stagger: {
            amount: 0.4,
          },
        },
        "-=0.5"
      )
      .set(
        headingRef.current,
        {
          opacity: 0,
        },
        "+=0.5"
      )
      .to(
        innerRef.current,

        {
          translateY: "100%",
        }
      );

    // a setInterval function that will run the frame function every 10 milliseconds
    // const interval = setInterval(frame, 22);
    // function frame() {
    //   if (percentRef.current.innerHTML === "100%") {
    //     clearInterval(interval);
    //   } else {
    //     percentRef.current.innerHTML =
    //       parseInt(percentRef.current.innerHTML) + 1 + "%";
    //     ref.current.style.width = parseInt(percentRef.current.innerHTML) + "%";
    //   }
    // }

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  return (
    <div className="preloader">
      <div ref={innerRef} className="preloader__inner">
        {/* <div ref={percentRef} className="percent">
          1%
        </div>
        <div ref={barRef} className="bar">
          <div ref={ref} className="bar__confirm"></div>
        </div> */}
      </div>
      <div ref={headingRef} className="heading font-bold">
        <h1 ref={textRef}>GARAGE Studio</h1>
      </div>
    </div>
  );
};

export default Preloader;
