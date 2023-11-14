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
import Social from "@/app/components/project/Social";

const page = () => {
  const customHeading = "Instagram Posts";
  const customImageSources = [
    "/bahar/posts/1.jpg",
    "/bahar/posts/2.jpg",
    "/bahar/posts/3.jpg",
    "/bahar/posts/4.jpg",
  ];

  const customHeading3 = "Instagram Reels";

  const customImageSources3 = [
    "/bahar/reels/1.jpg",
    "/bahar/reels/1.jpg",
    "/bahar/reels/1.jpg",
  ];

  const customBackgroundColor = "bg-[#fff] text-black font-semibold";

  return (
    <main className="flex min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/bahar/bahar.svg"
        name="BAHAR GROUP "
        description="is a prominent player in the educational sector, dedicated to providing essential services and knowledge to international students aspiring to pursue higher education in Turkey's prestigious colleges. They facilitate your academic journey with expert guidance, ensuring a smooth transition to top Turkish institutions."
        color="text-[#FFBA3A]"
        colorbg="bg-[#37185B]"
        bg="/bahar/bahar-logo.svg"
      />
      <Images
        title="Brand"
        title2="Personality"
        imageSrc="/bahar/personality.png"
        p=" sm:py-10"
        titleColor="text-[#FFBA3A]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc="/bahar/arch.png"
        p="mb-16 sm:py-10"
        titleColor="text-[#FFBA3A]"
        width="sm:w-3/4 lg:w-1/2  "
      />
      <Story
        title="Digital Infrastructure Development (Instagram),
        Digital Campaigns Design & Implementation"
        challengeColor="text-[#FFBA3A]"
        text="In the year 2022, with the development of the brand strategy for Garage in line with expanding its international portfolio, the project to develop all marketing channels in Iran for the brand 'bahar TAMAM' was initiated. 'bahar TAMAM' is a market leader in the Middle East in the field of student admissions to universities in first-world countries and providing facilities to active students. This move was aimed at expanding its regional markets.
        In this project, all online channels of this organization were activated in the first phase, followed by the activation of offline channels in the second phase. A marketing and sales team was established in Tehran for this brand. The output of this project, after 12 months of activity, included the establishment of a permanent sales and marketing team, the creation of all online infrastructure including social networks, websites, etc., the development of automated online and offline advertising processes, and achieving sales in the Iranian market."
        imageSrc="/bahar/story1.jpg"
      />
      {/* <VideoPlayer /> */}
      <Social
        img1="/bahar/social/1.jpg"
        img2="/bahar/social/2.jpg"
        textColor="text-[#FFBA3A]"
      />
      <Packaging
        width="w-2/5"
        headingText={customHeading}
        imageSources={customImageSources}
        backgroundColor={customBackgroundColor}
      />

      <Packaging
        width="w-1/3"
        headingText={customHeading3}
        imageSources={customImageSources3}
        backgroundColor={customBackgroundColor}
      />
    </main>
  );
};

export default page;
