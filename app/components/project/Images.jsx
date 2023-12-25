import Image from "next/image";
import React from "react";

const Images = ({
  width,
  title,
  titleColor,
  title2,
  imageSrc,
  bg,
  textColor,
  p,
}) => {
  return (
    <section className={`${bg}`}>
      <div
        className={`w-screen h-full px-10 sm:px-28 2xl:px-56 flex flex-col items-center ${p}`}
      >
        {title && (
          <h3
            className={`text-xl sm:text-4xl lg:text-5xl tracking-wide py-12 font-bold self-start leading-normal ${textColor}`}
          >
            {title} <span className={`${titleColor}`}>{title2}</span>
          </h3>
        )}
        <div className="flex justify-center items-center h-full w-full">
          <Image
            className={`object-contain ${width}`}
            src={imageSrc}
            alt="Story"
          />
        </div>
      </div>
    </section>
  );
};

export default Images;
