"use client";
import React from "react";
import Intro from "../../components/project/Intro";
import { VideoPlayer } from "../../components/project/VideoPlayer";
import Story from "../../components/project/Story";
import Images from "@/app/components/project/Images";
import pers from "@/public/mcd/personality.png";
import arch from "@/public/mcd/arch.png";
import story1 from "@/public/mcd/story1.jpg";
import ux from "@/public/mcd/3.jpg";
import ux1 from "@/public/mcd/4.jpg";
import uids from "@/public/mcd/uids.jpg";

const page = () => {
  return (
    <main className="flex gap-0 min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/mcd/mcd.svg"
        title="Educational Firm"
        name="MCD ACADEMY"
        description=", based in Turkey, specializes in facilitating your journey to Turkish universities. They offer comprehensive services to international students, simplifying the application process and guiding you toward your academic dreams in Turkey. With their expertise and dedication, they ensure a seamless transition to top Turkish universities."
        color="text-[#67B8E5]"
        colorbg="bg-[#223E83]"
        bg="/mcd/mcd-logo.svg"
      />
      {/* <VideoPlayer /> */}
      <Images
        title="Brand"
        title2="Personality"
        imageSrc={pers}
        p=" sm:py-10"
        titleColor="text-[#67B8E5]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc={arch}
        p="mb-16 sm:py-10"
        titleColor="text-[#67B8E5]"
        width="sm:w-3/4 lg:w-1/2  "
      />
      <Story
        title="Digital Infrastructure Development (Instagram),
        Digital Campaigns Design & Implementation"
        challengeColor="text-[#67B8E5]"
        text={`In the year 2022, with the development of a business strategy by Majidico Academy for a serious presence in the Iranian market, Garage Digital Studio partnered as the execution arm alongside the brand to develop the digital infrastructure of this brand on Instagram and its website. Additionally, digital campaigns were designed and executed to generate leads for the brand.
        As a result of this 6-month collaboration in two phases of digital infrastructure development and campaign design and execution, the outputs included the creation of Majidico Academy's Instagram channel, a website for the brand with a dedicated panel for each student, and 3 digital campaigns that generated over 2000 leads for the brand.`}
        imageSrc={story1}
        width="100%"
        bg="sm:py-16"
      />{" "}
      <Images
        title="UI/UX"
        title2="Design"
        titleColor="text-[#223E83]"
        imageSrc={ux}
        bg="bg-[#f6f6f6]"
        textColor="text-black"
      />
      <Images imageSrc={ux1} bg="bg-[#f6f6f6]" />
      <Images
        title="UI"
        title2="DESIGN SYSTEM"
        titleColor="text-[#223E83]"
        imageSrc={uids}
        bg="bg-[#f6f6f6] pb-8"
        textColor="text-black"
      />
    </main>
  );
};

export default page;
