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
        className={`w-screen h-full px-10 sm:px-28 2xl:px-56 flex flex-col items-center gap-12 lg:gap-16 2xl:gap-24 ${p}`}
      >
        <h3
          className={`text-xl sm:text-4xl lg:text-5xl tracking-wide pt-10 font-bold self-start leading-normal ${textColor}`}
        >
          {title} <span className={`${titleColor}`}>{title2}</span>
        </h3>

        <div className="flex justify-center  items-center h-full w-fit">
          <img className={`${width}`} src={imageSrc} alt="Story" />
        </div>
      </div>
    </section>
  );
};

export default Images;
