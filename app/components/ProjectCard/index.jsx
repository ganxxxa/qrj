"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, useScroll, motion } from "framer-motion";

import { useRef } from "react";

const ProjectCard = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.65]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="sticky h-screen flex top-0 items-center justify-center "
    >
      <a href={url}>
        <motion.div
          className="flex flex-col relative max-w-[800px] w-[70vw] rounded-3xl  origin-top h-80 sm:h-96 inset-shadow"
          style={{
            backgroundColor: color,
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
          }}
        >
          <h2 className="text-center absolute uppercase first-letter:text-4xl top-[10%] left-1/2 -translate-x-1/2 m-0 text-2xl">
            {title}
          </h2>
          <div className="flex h-full mt-12 gap-12">
            {/* <div className="w-2/5 relative top-[10%]">
            <p>{description}</p>
            <span>
              <a href={url} target="_blank">
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div> */}

            <div className="relative w-full h-full overflow-hidden">
              <motion.div
                className="w-full h-full"
                style={{ scale: imageScale }}
              >
                <Image
                  className=" object-fit"
                  fill
                  src={`${src}`}
                  alt="image"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>{" "}
      </a>
    </div>
  );
};

export default ProjectCard;
