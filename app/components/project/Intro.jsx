import React from "react";

const Intro = ({ src, title, description, name, color, bg, colorbg }) => {
  return (
    <>
      <section
        className={`${colorbg} flex flex-col md:flex-row w-full h-screen items-center md:justify-center font-mono text-sm justify-around pt-24 md:pt-0 `}
      >
        <div className="z-20 flex w-1/2 flex-col gap-12 items-center translate-y-12 ">
          <img src={src} />
          <p className="text-2xl md:text-xl">{title}</p>
        </div>
        <span>
          <img
            className="md:absolute h-56 sm:h-64 lg:h-80 xl:h-96 md:right-16 lg:right-20 lg:-translate-y-24 md:-translate-y-16 "
            src={bg}
          />
        </span>
      </section>

      <section className="py-24 md:py-32 px-4 sm:px-12 md:px-18 lg:px-28 2xl:px-56  ">
        <p className="text-md sm:text-xl md:text-3xl leading-normal sm:leading-loose text-justify">
          <span className={`${color}`}>{name} </span>
          {description}
        </p>
      </section>
    </>
  );
};

export default Intro;
