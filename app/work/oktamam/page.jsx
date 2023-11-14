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
    "/ok/posts/1.jpg",
    "/ok/posts/2.jpg",
    "/ok/posts/3.jpg",
    "/ok/posts/4.jpg",
  ];

  const customHeading2 = "Instagram Stories";
  const customHeading3 = "Instagram Reels";
  const customImageSources2 = [
    "/ok/stories/1.jpg",
    "/ok/stories/2.jpg",
    "/ok/stories/3.jpg",
    "/ok/stories/4.jpg",
  ];
  const customImageSources4 = [
    "/ok/event/1.jpg",
    "/ok/event/2.jpg",
    "/ok/event/3.jpg",
    "/ok/event/4.jpg",
  ];
  const customImageSources3 = [
    "/ok/reels/1.jpg",
    "/ok/reels/2.jpg",
    "/ok/reels/3.jpg",
  ];

  const customBackgroundColor = "bg-[#fff] text-black font-semibold";

  return (
    <main className="flex min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/ok/ok.svg"
        title="Consultancy and Services"
        name="OKTAMAM"
        description=" is a comprehensive service provider across the Middle East and Europe. Specializing in educational services, business consultation, real estate investment, tourism, and more, they cater to your multifaceted needs. With a commitment to excellence, they offer expert guidance and solutions to individuals and businesses, ensuring success in diverse sectors."
        color="text-[#2695B3]"
        colorbg="bg-[#2695B3]"
        bg="/ok/ok-logo.svg"
      />
      <Images
        title="Brand"
        title2="Personality"
        imageSrc="/ok/personality.png"
        p=" sm:py-10"
        titleColor="text-[#2695B3]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc="/ok/arch.png"
        p="mb-16 sm:py-10"
        titleColor="text-[#2695B3]"
        width="sm:w-3/4 lg:w-1/2  "
      />
      <Story
        title="Development of All Marketing Activities"
        challengeColor="text-[#2695B3]"
        text="In the year 2022, with the development of the brand strategy for Garage in line with expanding its international portfolio, the project to develop all marketing channels in Iran for the brand 'OK TAMAM' was initiated. 'OK TAMAM' is a market leader in the Middle East in the field of student admissions to universities in first-world countries and providing facilities to active students. This move was aimed at expanding its regional markets.
        In this project, all online channels of this organization were activated in the first phase, followed by the activation of offline channels in the second phase. A marketing and sales team was established in Tehran for this brand. The output of this project, after 12 months of activity, included the establishment of a permanent sales and marketing team, the creation of all online infrastructure including social networks, websites, etc., the development of automated online and offline advertising processes, and achieving sales in the Iranian market."
        imageSrc="/ok/story1.jpg"
        bg="sm:py-16"
      />
      {/* <VideoPlayer /> */}
      <Social
        img1="/ok/social/1.jpg"
        img2="/ok/social/2.jpg"
        textColor="text-[#29A9E1]"
      />
      <Packaging
        width="sm:w-2/5"
        headingText={customHeading}
        imageSources={customImageSources}
        backgroundColor={customBackgroundColor}
      />
      <Packaging
        width="sm:w-2/6"
        headingText={customHeading2}
        imageSources={customImageSources2}
        backgroundColor={customBackgroundColor}
      />
      <Packaging
        width="sm:w-2/6"
        headingText={customHeading3}
        imageSources={customImageSources3}
        backgroundColor={customBackgroundColor}
      />
      <Images
        title="Icon"
        title2="Design"
        titleColor="text-[#29A9E1]"
        textColor="text-black"
        imageSrc="/ok/morph/3.jpg"
        width="sm:w-4/5"
        bg="bg-[#fff]"
      />
      <Packaging
        headingText="Interior"
        headingText2="Design"
        headingTextColor="text-[#29A9E1]"
        imageSources={customImageSources4}
        backgroundColor="bg-black text-[#fff] font-semibold"
      />
    </main>
  );
};

export default page;
