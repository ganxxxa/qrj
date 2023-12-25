"use client";
import React from "react";
import Intro from "../../components/project/Intro";
import Packaging from "../../components/project/Packaging";
import { VideoPlayer } from "../../components/project/VideoPlayer";
import Story from "../../components/project/Story";
import pers from "@/public/opo/personality.png";
import arch from "@/public/opo/arch.png";
import story1 from "@/public/opo/story1.jpg";
import so1 from "@/public/opo/social/1.jpg";
import so2 from "@/public/opo/social/2.jpg";
import m3 from "@/public/opo/morph/3.jpg";
import m4 from "@/public/opo/morph/4.jpg";
import ed1 from "@/public/opo/ed/1.jpg";
import ed2 from "@/public/opo/ed/2.jpg";
import ed3 from "@/public/opo/ed/3.jpg";
import ed4 from "@/public/opo/ed/4.jpg";
import r1 from "@/public/opo/r/1.jpg";
import r2 from "@/public/opo/r/2.jpg";
import r3 from "@/public/opo/r/3.jpg";
import r4 from "@/public/opo/r/4.jpg";
import q1 from "@/public/opo/q/1.jpg";
import q2 from "@/public/opo/q/2.jpg";
import q3 from "@/public/opo/q/3.jpg";
import Images from "@/app/components/project/Images";
import Social from "@/app/components/project/Social";

const page = () => {
  const customHeading = "Educational Posts";
  const customImageSources = [ed1, ed2, ed3, ed4];

  const customHeading2 = "Quote Posts";
  const customHeading3 = "Reels";
  const customImageSources2 = [q1, q2, q3];
  const customImageSources3 = [r1, r2, r3, r4];

  const customBackgroundColor = "bg-[#fff] text-black font-semibold";

  return (
    <main className="flex min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/opo/opo.svg"
        title="Finance broker"
        name="OPO FINANCE "
        description="stands at the forefront of the forex industry, renowned for its excellence in technology and AI integration. As a leader in both finance and cutting-edge technology, we provide traders with innovative solutions, leveraging artificial intelligence for unparalleled insights and success. With a commitment to excellence and a focus on the future, OPO FINANCE is your trusted partner in the dynamic world of forex trading."
        color="text-[#29A9E1]"
        colorbg="bg-[#194E8C]"
        bg="/opo/opo-logo.svg"
      />
      <Images
        title="Brand"
        title2="Personality"
        imageSrc={pers}
        p=" sm:py-10"
        titleColor="text-[#29A9E1]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc={arch}
        p="mb-16 sm:py-10"
        titleColor="text-[#29A9E1]"
        width="sm:w-3/4 lg:w-1/2  "
      />
      <Story
        title="Digital Infrastructure Development (Instagram),
        Digital Campaigns Design & Implementation"
        challengeColor="text-[#29A9E1]"
        text="In the year 2023, with Brokery's investment in developing their digital identity in Persian, the project focused on the development of the brand's digital infrastructure on Instagram and the design and execution of digital campaigns. To achieve this, a 6-month project was initiated, which included the creation of a content calendar for Opoo in Persian, aligned with international benchmarks and brand guidelines. Content was produced for the Opoo Persian page in various content types.
        Simultaneously, the design and execution of digital campaigns for this brand on Instagram were also part of the project's scope, aimed at reaching the initial target audience for the page."
        imageSrc={story1}
        bg="sm:py-16"
      />
      {/* <VideoPlayer /> */}
      <Social img1={so1} img2={so2} textColor="text-[#29A9E1]" />
      <Packaging
        width="sm:w-2/5"
        headingText={customHeading}
        imageSources={customImageSources}
        backgroundColor={customBackgroundColor}
      />
      <Packaging
        width="sm:w-2/5"
        headingText={customHeading2}
        imageSources={customImageSources2}
        backgroundColor={customBackgroundColor}
      />
      <Packaging
        width="sm:w-2/5"
        headingText={customHeading3}
        imageSources={customImageSources3}
        backgroundColor={customBackgroundColor}
      />
      <Images
        title="Icon"
        title2="Design"
        titleColor="text-[#29A9E1]"
        textColor="text-black"
        imageSrc={m3}
        width="sm:w-4/5"
        bg="bg-[#fff]"
      />
      <Images imageSrc={m4} width="sm:w-4/5" bg="bg-[#fff] pb-16 " />
    </main>
  );
};

export default page;
