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
  const customHeading = "Packaging";
  const customImageSources = [
    "/shinfer/package/1.jpg",
    "/shinfer/package/2.jpg",
    "/shinfer/package/3.jpg",
    "/shinfer/package/4.jpg",
    "/shinfer/package/5.jpg",
  ];
  const customBackgroundColor = "bg-[#242424]";
  const customHeading2 = "stationary";
  const customImageSources2 = [
    "/shinfer/stationary/1.jpg",
    "/shinfer/stationary/2.jpg",
    "/shinfer/stationary/3.jpg",
  ];
  const customImageSources3 = [
    "/shinfer/pattern/1.jpg",
    "/shinfer/pattern/2.jpg",
    "/shinfer/pattern/3.jpg",
    "/shinfer/pattern/4.jpg",
  ];

  const customBackgroundColor2 = "bg-[#000]";

  return (
    <main className="flex min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/shinfer/shinfer.svg"
        title="Home Appliances"
        name="SHINFER"
        description="SHINFER is a distinguished name in Iran's home equipment industry, specializing in crafting premium ovens and appliances. With a relentless commitment to quality and innovation, they have earned a reputation for excellence. Their state-of-the-art factory employs advanced technology to deliver reliable, efficient, and stylish home solutions."
        color="text-[#DC2B2F]"
        colorbg="bg-[#96171A]"
        bg="/shinfer/shinfer-logo.svg"
      />
      {/* <VideoPlayer /> */}
      <Images
        title="Brand"
        title2="Personality"
        imageSrc="/shinfer/personality.png"
        p=" sm:py-10"
        titleColor="text-[#007E72]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc="/shinfer/arch.png"
        p="mb-16 sm:py-10"
        titleColor="text-[#007E72]"
        width="sm:w-3/4 lg:w-1/2  "
      />{" "}
      <Story
        challengeColor="text-[#DC2B2F]"
        title="Brand Identity (Brand Book),
      Pictogram and Packaging Design,
      Digital Infrastructure Development (Website)"
        text="In the year 2022, with the entry of a business development consulting team into the 'Shinfer' brand, which had previously been engaged in industrial manufacturing for major Iranian oven and gas brands, the brand decided to introduce itself as a creative and innovative brand in the Iranian oven and gas industry, utilizing its internal and technological capabilities. After delivering high-level strategies from the consulting team and the board of directors to the Garage Digital Studio, the project encompassed the design and development of visual identity, pictograms, and product packaging in the first phase. In the second phase, the focus was on the development of Shinfer's digital infrastructure (website).
      The outputs of this project, after 6 months of operation in two operational phases, included the complete delivery of Shinfer's visual identity document, in accordance with the chosen brand archetypes, as well as pictograms and product packaging. Additionally, the brand's website, serving as the main pillar of its digital infrastructure, was delivered in the second phase."
        imageSrc="/shinfer/story1.jpg"
        bg="sm:py-16"
      />{" "}
      <Morph
        beforeImageSrc="/shinfer/morph/1.jpg"
        afterImageSrc="/shinfer/morph/2.jpg"
        title="Logo "
        title2="Design"
        titleColor="text-[#007E72]"
      />
      <Packaging
        headingText={customHeading}
        imageSources={customImageSources}
        backgroundColor={customBackgroundColor}
      />
      <Packaging
        headingText={customHeading2}
        imageSources={customImageSources2}
        backgroundColor={customBackgroundColor2}
      />
      <Images
        title="Sign "
        imageSrc="/shinfer/story4.png"
        p="mb-16 py-8 sm:py-20"
        width="w-2/3"
        title2="Design"
        titleColor="text-[#007E72]"
      />
      <Images
        title="Logo"
        title2=" Ideas"
        textColor="text-black"
        bg="bg-[#fff]"
        p="mb-16 sm:py-10"
        imageSrc="/shinfer/story5.png"
        width="sm:w-3/4"
        titleColor="text-[#007E72]"
      />
      <Pallete src="/shinfer/pallete.jpg" titleColor="text-[#007E72]" />
      <Pattern title="PATTERNS" imageSources={customImageSources3} />
      <Images
        title="Icon"
        title2="Design"
        titleColor="text-[#007E72]"
        imageSrc="/shinfer/icon.png"
        bg="bg-[#fff]"
        textColor="text-black"
        width="w-4/5"
        p=" sm:py-16 mb-10"
      />
    </main>
  );
};

export default page;
