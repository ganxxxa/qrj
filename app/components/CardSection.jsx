"use client";
import { useScroll } from "framer-motion";

import { useRef } from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function CardSection() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });
  return (
    <main
      ref={container}
      className="my-[50vh} flex flex-col items-center justify-center"
    >
      <div className="sticky h-screen flex top-0 items-start  ">
        <h3 className="translate-y-8 xlj:translate-y-12 text-2xl sm:text-3xl xl:text-4xl font-bold uppercase">
          Projects
        </h3>
      </div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;

        return (
          <ProjectCard
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
      <Link
        href="/work"
        className="bg-white px-4 py-2 rounded-lg uppercase -translate-y-4 xl:-translate-y-8 mb-12 text-black font-bold"
      >
        veiw projects
      </Link>
    </main>
  );
}
