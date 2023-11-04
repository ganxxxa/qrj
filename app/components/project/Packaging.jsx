"use client";

import React, { useState, useLayoutEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion components

const Packaging = ({ headingText, imageSources, backgroundColor }) => {
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
        className={`flex flex-col items-start justify-around py-16 w-screen`}
      >
        <h3 className="px-10 sm:px-16 lg:px-28 lg:text-5lx py-8 text-xl sm:text-2xl md:text-4xl lg:text-5lx xl:text-6xl">
          {headingText}
        </h3>
        <div
          ref={scrollContainerRef}
          className="relative px-10 sm:px-16 lg:px-28 md:pt-16 flex lg:gap-12 md:gap-8 gap-6 2xl:gap-24 overflow-x-scroll"
          onScroll={handleScroll}
        >
          {imageSources.map((src, index) => (
            <div
              key={index}
              className="relative h-fit rounded-lg overflow-hidden flex-shrink-0"
            >
              <div className=" translate-y-1 absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black to-100% opacity-70"></div>
              <img
                className="rounded-lg  w-[180px] sm:w-[240px] md:w-[320px] lg:w-[400px] 2xl:w-[480px]"
                src={src}
                alt={`Image ${index}`}
              />

              <img
                className="absolute left-4 bottom-4 cursor-pointer px-2 py-1 rounded"
                onClick={() => toggleFullscreen(src, index)}
                src="/arrows-expand.svg"
              />
              <AnimatePresence initial={false} mode="wait">
                {fullscreenImage === src && (
                  <motion.div className="z-40 fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
                    <motion.img
                      src={src}
                      alt={`Fullscreen Image`}
                      className="max-h-screen rounded-lg  max-w-screen mx-auto"
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -100 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    />
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
              currentImageIndex === index ? "bg-blue-500" : "bg-gray-300"
            } cursor-pointer`}
          />
        ))}
      </div>
    </section>
  );
};

export default Packaging;
