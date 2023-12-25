"use client";
import React from "react";
import Intro from "../../components/project/Intro";
import Packaging from "../../components/project/Packaging";
import { VideoPlayer } from "../../components/project/VideoPlayer";
import Story from "../../components/project/Story";
import Pallete from "../../components/project/pallete/Pallete";
import Pattern from "../../components/project/pattern/Pattern";
import pers from "@/public/rashak/personality.png";
import arch from "@/public/rashak/arch.png";
import story1 from "@/public/rashak/story1.jpg";
import story4 from "@/public/rashak/story4.png";
import story5 from "@/public/rashak/story5.png";
import Morph from "../../components/project/Morph";
import Images from "@/app/components/project/Images";
import uids from "@/public/rashak/uids.jpg";
import ui from "@/public/rashak/ui.jpg";
import morph1 from "@/public/rashak/morph/1.jpg";
import morph2 from "@/public/rashak/morph/2.jpg";
import morph3 from "@/public/rashak/morph/3.jpg";
import morph4 from "@/public/rashak/morph/4.jpg";
import icon from "@/public/rashak/icon.png";
import pack1 from "@/public/rashak/package/1.jpg";
import pack2 from "@/public/rashak/package/2.jpg";
import pack3 from "@/public/rashak/package/3.jpg";
import pack4 from "@/public/rashak/package/4.jpg";
import pack5 from "@/public/rashak/package/5.jpg";
import pack6 from "@/public/rashak/package/6.jpg";
import st1 from "@/public/rashak/stationary/1.jpg";
import st2 from "@/public/rashak/stationary/2.jpg";
import st3 from "@/public/rashak/stationary/3.jpg";
import st4 from "@/public/rashak/stationary/4.jpg";
import plt from "@/public/rashak/pallete.jpg";
import pat1 from "@/public/rashak/pattern/1.jpg";
import pat2 from "@/public/rashak/pattern/2.jpg";
import pat3 from "@/public/rashak/pattern/3.jpg";
const page = () => {
  const customHeading = "Packaging";
  const customImageSources = [pack1, pack2, pack3, pack4, pack5, pack6];
  const customBackgroundColor = "bg-[#242424]";
  const customHeading2 = "stationary";
  const customImageSources2 = [st1, st2, st3, st4];
  const customImageSources3 = [pat1, pat2, pat3];
  const dummyImage = {
    src: "/rashak/pattern/1.jpg", // Replace with the actual image URL
    alt: "Dummy Image",
  };

  const customBackgroundColor2 = "bg-[#000]";

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
        imageSrc={pers}
        p=" sm:py-10"
        titleColor="text-[#009c47]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc={arch}
        p="mb-16 sm:py-10"
        titleColor="text-[#009c47]"
        width="sm:w-3/4 lg:w-1/2  "
      />
      <Story
        title="Redesigning Brand Identity, Digital Infrastructure Development (Website)"
        challengeColor="text-[#009c47]"
        text='The food brand "Rashak" which has emerged from within a large and renowned “Seity” brand, is engaged in the procurement of raw materials and spices for major players in the food industry. In the year 1401 (2022/2023), with the development of its management structure and the entry of the third generation of managers into this organization, a redesign of the visual identity was undertaken as part of a new brand development document. Additionally, digital infrastructure (a website) was created, and the first phase of SEO was initiated. The outputs of this project, after 13 months of activity, included a redesign of the visual identity, the design and delivery of complete stationery items, the design and implementation of a new website with the capability for pre-order registration, and the initiation of the brand&apos;s initial SEO phase.'
        imageSrc={story1}
        width="100%"
        bg="sm:py-16"
      />{" "}
      <Morph
        beforeImageSrc={morph1}
        afterImageSrc={morph2}
        title="Logo "
        title2="Design"
        titleColor="text-[#009c47]"
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
        title="Sign"
        title2="Design"
        imageSrc={story4}
        p="mb-16 py-8 gap-10 sm:py-20"
        width="w-2/4"
        titleColor="text-[#009c47]"
      />
      <Images
        title="Logo"
        title2=" Ideas"
        textColor="text-black"
        bg="bg-[#fff]"
        p="mb-16 sm:py-10"
        imageSrc={story5}
        width="sm:w-3/5"
        titleColor="text-[#009c47]"
      />
      <Pallete src={plt} titleColor="text-[#009c47]" />
      <Pattern title="PATTERNS" imageSources={customImageSources3} />
      <Images
        title="Icon"
        title2="Design"
        titleColor="text-[#009c47]"
        imageSrc={icon}
        bg="bg-[#fff]"
        textColor="text-black"
        width="w-4/5"
        p=" sm:py-16 mb-8"
      />
      <Images
        title="UI/UX"
        title2="Design"
        titleColor="text-[#009c47]"
        imageSrc={ui}
        bg="bg-[#fff]"
        textColor="text-black"
      />
      <Images imageSrc={morph3} width="sm:w-4/5" bg="bg-[#fff]" />
      <Images imageSrc={morph4} width="sm:w-4/5" bg="bg-[#fff] pb-16" />
      <Images
        title="UI"
        title2="DESIGN SYSTEM"
        titleColor="text-[#009c47]"
        imageSrc={uids}
        bg="bg-[#fff] pb-8 lg:py-12"
        textColor="text-black"
      />
    </main>
  );
};

export default page;
