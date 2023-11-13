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
    "/rashak/package/1.jpg",
    "/rashak/package/2.jpg",
    "/rashak/package/3.jpg",
    "/rashak/package/4.jpg",
    "/rashak/package/5.jpg",
    "/rashak/package/6.jpg",
  ];
  const customBackgroundColor = "bg-[#242424]";
  const customHeading2 = "stationary";
  const customImageSources2 = [
    "/rashak/stationary/1.jpg",
    "/rashak/stationary/2.jpg",
    "/rashak/stationary/3.jpg",
    "/rashak/stationary/4.jpg",
  ];
  const customImageSources3 = [
    "/rashak/pattern/1.jpg",
    "/rashak/pattern/2.jpg",
    "/rashak/pattern/3.jpg",
  ];
  const dummyImage = {
    src: "/rashak/pattern/1.jpg", // Replace with the actual image URL
    alt: "Dummy Image",
  };

  const customBackgroundColor2 = "bg-[#000]";

  const sections = [
    {
      imgSrc:
        "https://dummyimage.com/800x600/ff5733/ffffff.png&text=Section+1+Image",
      bgColor: "lightblue", // Background color for Section 1
    },
    {
      imgSrc:
        "https://dummyimage.com/800x600/33ff57/ffffff.png&text=Section+2+Image",
      bgColor: "lightgreen", // Background color for Section 2
    },
    {
      imgSrc:
        "https://dummyimage.com/800x600/5733ff/ffffff.png&text=Section+3+Image",
      bgColor: "lightcoral", // Background color for Section 3
    },
    // Add more sections as needed
  ];

  return (
    <main className="flex gap-0 min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/rashak/rashak.svg"
        title="Food Industry"
        name="rashak"
        description="is a factory that specializes in the production and supply of
          high-quality spices and food products. Using the finest ingredients
          and traditional techniques, the company produces a wide range of
          spices, herbs, and seasoning blends that add flavor and aroma to a
          variety of dishes."
        color="text-[#e12729]"
        colorbg="bg-[#e12729]"
        bg="/rashak/rashak-logo.svg"
      />
      {/* <VideoPlayer /> */}
      <Images
        title="Brand"
        title2="Personality"
        imageSrc="/rashak/personality.png"
        p=" sm:py-10"
        titleColor="text-[#009c47]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc="/rashak/arch.png"
        p="mb-16 sm:py-10"
        titleColor="text-[#009c47]"
        width="sm:w-3/4 lg:w-1/2  "
      />{" "}
      <Story
        title="Redesigning Brand Identity, Digital Infrastructure Development (Website)"
        challengeColor="text-[#009c47]"
        text='The food brand "Rashak" which has emerged from within a large and renowned “Seity” brand, is engaged in the procurement of raw materials and spices for major players in the food industry. In the year 1401 (2022/2023), with the development of its management structure and the entry of the third generation of managers into this organization, a redesign of the visual identity was undertaken as part of a new brand development document. Additionally, digital infrastructure (a website) was created, and the first phase of SEO was initiated. The outputs of this project, after 13 months of activity, included a redesign of the visual identity, the design and delivery of complete stationery items, the design and implementation of a new website with the capability for pre-order registration, and the initiation of the brand&apos;s initial SEO phase.'
        imageSrc="/rashak/story1.jpg"
        width="100%"
        bg="sm:py-16"
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
      <Morph
        beforeImageSrc="/rashak/morph/1.jpg"
        afterImageSrc="/rashak/morph/2.jpg"
        title="Logo "
        title2="Design"
        titleColor="text-[#009c47]"
      />
      <Images
        title="Sign"
        title2="Design"
        imageSrc="/rashak/story4.png"
        p="mb-16 py-8 sm:py-20"
        width="w-2/3"
        titleColor="text-[#009c47]"
      />
      <Images
        title="Logo"
        title2=" Ideas"
        textColor="text-black"
        bg="bg-[#fff]"
        p="mb-16 sm:py-10"
        imageSrc="/rashak/story5.png"
        width="sm:w-3/4"
        titleColor="text-[#009c47]"
      />
      <Pallete src="/rashak/pallete.jpg" titleColor="text-[#009c47]" />
      <Pattern title="PATTERNS" imageSources={customImageSources3} />
      <Images
        title="Icon"
        title2="Design"
        titleColor="text-[#009c47]"
        imageSrc="/rashak/icon.png"
        bg="bg-[#fff]"
        textColor="text-black"
        width="w-4/5"
        p=" sm:py-16 mb-8"
      />
      <Images
        title="UI/UX"
        title2="Design"
        titleColor="text-[#009c47]"
        imageSrc="/rashak/ui.jpg"
        bg="bg-[#fff]"
        textColor="text-black"
      />
      <Images imageSrc="/rashak/morph/3.jpg" width="sm:w-4/5" bg="bg-[#fff]" />
      <Images
        imageSrc="/rashak/morph/4.jpg"
        width="sm:w-4/5"
        bg="bg-[#fff] pb-16"
      />
      <Images
        title="UI"
        title2="DESIGN SYSTEM"
        titleColor="text-[#009c47]"
        imageSrc="/rashak/uids.jpg"
        bg="bg-[#fff] pb-8 lg:py-12"
        textColor="text-black"
      />
    </main>
  );
};

export default page;
