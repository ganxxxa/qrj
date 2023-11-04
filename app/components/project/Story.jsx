import React from "react";

const Story = ({ width, title, challenge, text, imageSrc, bg, textColor }) => {
  return (
    <section
      className={`w-full   h-full px-4 sm:px-12 md:px-18 lg:px-28 2xl:px-56 flex flex-col gap-6 ${bg}`}
    >
      <h6 className="text-lg lg:text-2xl text-[#009c47] tracking-wide pt-12">
        {challenge}
      </h6>
      <h3
        className={`text-2xl lg:text-5xl tracking-wide font-semibold  leading-normal ${textColor}`}
      >
        {title}
      </h3>
      <p className="py-10 text-md sm:text-xl lg:text-3xl text-justify leading-relaxed ">
        {text}
      </p>
      <div className="py-8 mb-8 flex justify-center w-fit self-center max-h-screen md:max-h-[80vh]">
        <img width={width} src={imageSrc} alt="Story" />
      </div>
    </section>
  );
};

export default Story;
