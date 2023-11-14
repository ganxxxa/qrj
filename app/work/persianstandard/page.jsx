"use client";
import React from "react";
import Intro from "../../components/project/Intro";
import Packaging from "../../components/project/Packaging";
import { VideoPlayer } from "../../components/project/VideoPlayer";
import Story from "../../components/project/Story";
import Pallete from "../../components/project/pallete/Pallete";
import Pattern from "../../components/project/pattern/Pattern";

import Morph from "../../components/project/Morph";
import Images from "@/app/components/project/Images";

const page = () => {
  const customHeading2 = "stationary";
  const customImageSources2 = [
    "/ps/stationary/1.jpg",
    "/ps/stationary/2.jpg",
    "/ps/stationary/3.jpg",
    "/ps/stationary/4.jpg",
  ];
  const customImageSources3 = [
    "/ps/pattern/1.jpg",
    "/ps/pattern/2.jpg",
    "/ps/pattern/3.jpg",
  ];

  const customBackgroundColor2 = "bg-[#000]";

  return (
    <main className="flex gap-0 min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/ps/ps.svg"
        title="Manufacturing Industry"
        name="Persian Standard "
        description={`is a leading manufacturer in Iran, specializing in vanities, Jacuzzis, saunas, and more. They distinguish themselves with superior quality, diverse designs, a robust distribution network, and excellent after-sales support. Persian Standard's success is attributed to their expert team, global partnerships, European-quality technology, and strong commitments, making them the industry leader in Iran.`}
        color="text-[#D29E5D]"
        colorbg="bg-[#003942]"
        bg="/ps/ps-logo.svg"
      />
      {/* <VideoPlayer /> */}
      <Images
        title="Brand"
        title2="Personality"
        imageSrc="/ps/personality.png"
        p=" sm:py-10"
        titleColor="text-[#D29E5D]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc="/ps/arch.png"
        p="mb-16 sm:py-10"
        titleColor="text-[#D29E5D]"
        width="sm:w-3/4 lg:w-1/2  "
      />
      <Story
        title="Development of All Marketing Activities"
        challengeColor="text-[#D29E5D]"
        text={`After the redesign of the organizational structure of Parsian Standard Company in the year 2021 and the reformation of the marketing department, the management of this project focused on the redesign of the visual identity, the production and dissemination of social media content, the redesign and implementation of a new website in line with the visual identity, the design and execution of offline events, the development of B2B marketing, and the expansion of sales channels.
        After 15 months of active work, the project achieved significant milestones, including the establishment of a structured visual identity, digital presence expansion on social networks and marketplaces, offline presence expansion through the design and implementation of 3 exclusive events, a 270% growth rate in digital sales, a 37% growth rate in regional sales within Tehran, and a 50% growth rate in other provinces. These are considered the accomplishments of this project.`}
        imageSrc="/ps/story1.jpg"
        width="100%"
        bg="sm:py-16"
      />{" "}
      <Morph
        beforeImageSrc="/ps/morph/1.jpg"
        afterImageSrc="/ps/morph/2.jpg"
        title="Logo "
        title2="Design"
        titleColor="text-[#D29E5D]"
      />
      <Packaging
        headingText={customHeading2}
        imageSources={customImageSources2}
        backgroundColor={customBackgroundColor2}
      />
      <Images
        title="Sign"
        title2="Design"
        imageSrc="/ps/story4.svg"
        p="mb-16 py-8 sm:py-20"
        width="w-2/3"
        titleColor="text-[#D29E5D]"
      />
      <Pallete src="/ps/pallete.jpg" titleColor="text-[#007E72]" />
      <Pattern title="PATTERNS" imageSources={customImageSources3} />
    </main>
  );
};

export default page;
