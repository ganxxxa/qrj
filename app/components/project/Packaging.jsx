"use client";

import React, { useState, useLayoutEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion components
import Image from "next/image";

const Packaging = ({
  headingText,
  imageSources,
  backgroundColor,
  headingText2,
  headingTextColor,
  width,
}) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollContainerRef = useRef(null);

  useLayoutEffect(() => {
    // Function to enable/disable scrolling

    const toggleScrolling = (disable) => {
      if (disable) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    // Disable scrolling when an image is in fullscreen mode
    if (fullscreenImage) {
      toggleScrolling(true);
    } else {
      toggleScrolling(false);
    }

    // Cleanup function to enable scrolling when the component unmounts
    return () => {
      toggleScrolling(false);
    };
  }, [fullscreenImage]);

  const toggleFullscreen = (src, index) => {
    if (fullscreenImage === src) {
      // If the same image is clicked again, close fullscreen
      setFullscreenImage(null);
    } else {
      // Open the clicked image in fullscreen
      setFullscreenImage(src);
      setCurrentImageIndex(index);
    }
  };

  const handleScroll = () => {
    // Calculate the index of the currently visible image based on scroll position
    const container = scrollContainerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const imageWidth = container.firstChild.clientWidth;
      const index = Math.round(scrollLeft / imageWidth);
      setCurrentImageIndex(index);
    }
  };

  return (
    <section className={`scroll-section-outer  ${backgroundColor}`}>
      <div
        className={`flex flex-col items-start justify-around py-10 sm:py-16 w-screen`}
      >
        <h3 className="px-10 sm:px-16 lg:px-28 py-8 text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl">
          {headingText}
          <span className={`${headingTextColor}`}> {headingText2}</span>
        </h3>
        <div
          ref={scrollContainerRef}
          className="relative px-10 sm:px-16 lg:px-24 md:pt-10 flex lg:gap-12 md:gap-8 gap-6 2xl:gap-24 overflow-x-scroll"
          onScroll={handleScroll}
        >
          {imageSources.map((src, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden flex-shrink-0 ${width}`}
            >
              <div className=" translate-y-1 absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black to-100% opacity-70"></div>
              <Image
                className="rounded-lg  scale-110  blur-[0.5px] transition duration-1000 sc hover:scale-105  hover:blur-0 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[500px] 2xl:w-[580px]"
                src={src}
                alt={`Image ${index}`}
              />

              <Image
                width={64}
                height={64}
                className="absolute left-0 bottom-0 sm:left-4 sm:bottom-4 cursor-pointer sm:px-2 sm:py-1 scale-50 sm:scale-75 rounded"
                onClick={() => toggleFullscreen(src, index)}
                src="/arrows-expand.svg"
              />
              <AnimatePresence initial={false} mode="wait">
                {fullscreenImage === src && (
                  <motion.div className="z-40 fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
                    <motion.div
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -100 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <Image
                        src={src}
                        alt={`Fullscreen Image`}
                        className="max-h-screen rounded-lg  max-w-screen mx-auto"
                      />
                    </motion.div>
                    <button
                      className="absolute  bottom-8 text-white px-8 py-8 rounded"
                      onClick={() => toggleFullscreen(src, index)}
                    >
                      <FaTimes className="w-8 h-8 " />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-12 flex justify-center">
        {imageSources.map((_, index) => (
          <span
            key={index}
            onClick={() => {
              scrollContainerRef.current.scrollTo({
                left: index * scrollContainerRef.current.firstChild.clientWidth,
                behavior: "smooth",
              });
              setCurrentImageIndex(index);
            }}
            className={`w-3 h-3 rounded-full mx-2 ${
              currentImageIndex === index
                ? "bg-gray-500 "
                : "bg-gray-500 opacity-90"
            } cursor-pointer`}
          />
        ))}
      </div>
    </section>
  );
};

export default Packaging;
