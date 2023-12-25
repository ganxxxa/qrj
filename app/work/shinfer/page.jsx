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
import pack1 from "@/public/shinfer/package/1.jpg";
import pack2 from "@/public/shinfer/package/2.jpg";
import pack3 from "@/public/shinfer/package/3.jpg";
import pack4 from "@/public/shinfer/package/4.jpg";
import pack5 from "@/public/shinfer/package/5.jpg";
import plt from "@/public/shinfer/pallete.jpg";
import pat1 from "@/public/shinfer/pattern/1.jpg";
import pat2 from "@/public/shinfer/pattern/2.jpg";
import pat3 from "@/public/shinfer/pattern/3.jpg";
import pat4 from "@/public/shinfer/pattern/4.jpg";
import pers from "@/public/shinfer/personality.png";
import arch from "@/public/shinfer/arch.png";
import story1 from "@/public/shinfer/story1.jpg";
import st1 from "@/public/shinfer/stationary/1.jpg";
import st2 from "@/public/shinfer/stationary/2.jpg";
import st3 from "@/public/shinfer/stationary/3.jpg";
import icon from "@/public/shinfer/icon.png";
import story4 from "@/public/shinfer/story4.png";
import story5 from "@/public/shinfer/story5.png";
import morph1 from "@/public/shinfer/morph/1.jpg";
import morph2 from "@/public/shinfer/morph/2.jpg";
const page = () => {
  const customHeading = "Packaging";
  const customImageSources = [pack1, pack2, pack3, pack4, pack5];
  const customBackgroundColor = "bg-[#242424]";
  const customHeading2 = "stationary";
  const customImageSources2 = [st1, st2, st3];
  const customImageSources3 = [pat1, pat2, pat3, pat4];

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
        imageSrc={pers}
        p=" sm:py-10"
        titleColor="text-[#007E72]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc={arch}
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
        imageSrc={story1}
        bg="sm:py-16"
      />{" "}
      <Morph
        beforeImageSrc={morph1}
        afterImageSrc={morph2}
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
        imageSrc={story4}
        p="mb-16 py-8 sm:py-20"
        width="w-2/4"
        title2="Design"
        titleColor="text-[#007E72]"
      />
      <Images
        title="Logo"
        title2=" Ideas"
        textColor="text-black"
        bg="bg-[#fff]"
        p="mb-16 sm:py-10"
        imageSrc={story5}
        width="w-3/4 sm:w-3/5"
        titleColor="text-[#007E72]"
      />
      <Pallete src={plt} titleColor="text-[#007E72]" />
      <Pattern title="PATTERNS" imageSources={customImageSources3} />
      <Images
        title="Icon"
        title2="Design"
        titleColor="text-[#007E72]"
        imageSrc={icon}
        bg="bg-[#fff] gap-10"
        textColor="text-black"
        width="w-4/6"
        p="sm:py-16 mb-10"
      />
    </main>
  );
};

export default page;
