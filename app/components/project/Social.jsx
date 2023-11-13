import React from "react";

const Social = ({ link, img2, img1, bg, textColor }) => {
  return (
    <section
      className={`w-full  h-full text-[#212121] px-4 sm:px-12 md:px-18 lg:px-28 2xl:px-56 flex flex-col items-center  justify-around gap-12 bg-white`}
    >
      <h3
        className={`text-2xl lg:text-5xl tracking-wide pt-20 font-bold self-start uppercase leading-normal `}
      >
        Social Media <span className={`${textColor}`}>Design</span>
      </h3>

      <div className="py-8 mb-8 flex flex-col-reverse  sm:flex-row justify-center gap-10 h-full w-full sm:w-5/6">
        <div className="flex flex-col gap-12 items-center">
          <img src={img1} />
          <div className="h-full flex items-center text-white">
            <a
              href={link}
              className="bg-black cursor-pointer py-2 px-5 rounded-lg"
            >
              visit instagram page
            </a>
          </div>
        </div>
        <div>
          <img src={img2} />
        </div>
      </div>
    </section>
  );
};

export default Social;