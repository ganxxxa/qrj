"use client";
import { useScroll } from "framer-motion";

import { useRef } from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

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
        <h3 className=" translate-y-12 text-4xl font-bold uppercase">
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
      <a
        href="/work"
        className="bg-white px-4 py-2 rounded-lg uppercase -translate-y-12 mb-12 text-black font-bold"
      >
        veiw projects
      </a>
    </main>
  );
}
