"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, useScroll, motion } from "framer-motion";

import { useRef } from "react";
import Link from "next/link";

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
      <Link href={url}>
        <motion.div
          className="flex flex-col relative max-w-[800px] max-h-[400px] w-[85vw] lg:w-[65vw] rounded-3xl  origin-top h-[55vw] xl::h-[60vh] inset-shadow"
          style={{
            backgroundColor: color,
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
          }}
        >
          <h2 className="text-center absolute uppercase first-letter:text-4xl top-[10%] left-1/2 -translate-x-1/2 m-0 text-xl sm:text-2xl">
            {title}
          </h2>
          <div className="flex h-full mt-12 gap-12">
            <div className="relative w-full h-full overflow-hidden">
              <motion.div
                className="w-full h-full"
                style={{ scale: imageScale }}
              >
                <Image className="object-fit" fill src={`${src}`} alt="image" />
              </motion.div>
            </div>
          </div>
        </motion.div>{" "}
      </Link>
    </div>
  );
};

export default ProjectCard;
