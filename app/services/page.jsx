import React from "react";
import SnapScroll from "../components/SnapScroll";
import Contact from "../components/Contact";
import Accordion from "../components/accordion";
import { branding } from "../data";

const page = () => {
  return (
    <main>
      <section>
        <div className="w-screen flex flex-col justify-center items-center px-4 sm:px-10 lg:px-32 xl:px-40 h-screen gap-16">
          <h1 className="font-bold pt-12 text-center lg:text-left uppercase text-6xl sm:text-8xl">
            our services
          </h1>
          <p className="text-xl font-light text-justify">
            We turn ideas into reality with creative solutions that help you
            stand out. Our team brings together innovative thinking and
            cutting-edge technology to develop customized branding, Marketing
            and web solutions that exceed your expectations.
          </p>
        </div>
      </section>
      {/* <Accordion data={branding} /> */}
      <SnapScroll />
      <Contact />
    </main>
  );
};

export default page;
