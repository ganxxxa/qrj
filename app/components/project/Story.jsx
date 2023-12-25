import Image from "next/image";
import React from "react";

const Story = ({
  width,
  title,

  challengeColor,
  text,
  imageSrc,
  bg,
  textColor,
}) => {
  return (
    <section
      className={`w-full   h-full px-10 sm:px-24 lg:px-44  flex flex-col gap-6 ${bg}`}
    >
      <h6 className="text-lg lg:text-2xl text-[#009c47] tracking-wide ">
        <span className={`${challengeColor}`}> Delivered Services</span>
      </h6>
      <h3
        className={`text-xl sm:text-2xl lg:text-4xl tracking-wide font-semibold  leading-normal ${textColor}`}
      >
        {title}
      </h3>
      <p className="py-10 text-sm sm:text-md lg:text-lg text-justify leading-relaxed ">
        {text}
      </p>
      <div className="py-8 mb-8 flex justify-center w-fit self-center max-h-screen md:max-h-[80vh]">
        <div className="relative">
          <Image
            className="object-fit"
            width={width}
            src={imageSrc}
            alt="Story"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
