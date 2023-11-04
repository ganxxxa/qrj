import React from "react";

const Images = ({ width, title, challenge, text, imageSrc, bg, textColor }) => {
  return (
    <section
      className={`w-full h-full px-4 sm:px-12 md:px-18 lg:px-28 2xl:px-56 flex flex-col items-center gap-32 ${bg}`}
    >
      <h3
        className={`text-2xl lg:text-5xl tracking-wide pt-10 font-bold self-start uppercase leading-normal ${textColor}`}
      >
        {title}
      </h3>

      <div className="py-8 mb-8 flex justify-center  items-center h-full w-fit">
        <img className="w-full sm:w-3/4 md:w-1/2"src={imageSrc} alt="Story" />
      </div>
    </section>
  );
};

export default Images;
