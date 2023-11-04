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
    "/shinfer/package/6.jpg",
  ];
  const customBackgroundColor = "bg-[#242424]";
  const customHeading2 = "stationary";
  const customImageSources2 = [
    "/shinfer/stationary/1.jpg",
    "/shinfer/stationary/2.jpg",
    "/shinfer/stationary/3.jpg",
    "/shinfer/stationary/4.jpg",
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
        color="text-[#96171A]"
        colorbg="bg-[#96171A]"
        bg="/shinfer/shinfer-logo.svg"
      />
      <Story
        title="Brand Identity (Brand Book),
        Pictogram and Packaging Design,
        Digital Infrastructure Development (Website)"
        challenge="Delivered Services"
        text="In the year 2022, with the entry of a business development consulting team into the 'Shinfer' brand, which had previously been engaged in industrial manufacturing for major Iranian oven and gas brands, the brand decided to introduce itself as a creative and innovative brand in the Iranian oven and gas industry, utilizing its internal and technological capabilities. After delivering high-level strategies from the consulting team and the board of directors to the Garage Digital Studio, the project encompassed the design and development of visual identity, pictograms, and product packaging in the first phase. In the second phase, the focus was on the development of Shinfer's digital infrastructure (website).
        The outputs of this project, after 6 months of operation in two operational phases, included the complete delivery of Shinfer's visual identity document, in accordance with the chosen brand archetypes, as well as pictograms and product packaging. Additionally, the brand's website, serving as the main pillar of its digital infrastructure, was delivered in the second phase."
        imageSrc="/shinfer/story1.jpg"
        bg="sm:py-16"
      />
      {/* <VideoPlayer /> */}

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
        beforeImageSrc="/shinfer/morph/1.jpg"
        afterImageSrc="/shinfer/morph/2.jpg"
        title="LOGO DESIGN"
      />

      <Images
        title="SIGN DESIGN"
        width="900"
        imageSrc="/shinfer/story4.png"
        bg="sm:py-16"
      />
      <Images
        title="LOGO IDEAS"
        textColor="text-black"
        bg="bg-[#f6f6f6] sm:py-16 "
        imageSrc="/shinfer/story5.png"
      />
      <Pallete />
      <Pattern title="PATTERNS" imageSources={customImageSources3} />
      <Images
        title="ICON DESIGN"
        imageSrc="/shinfer/icon.png"
        bg="bg-[#f6f6f6] sm:py-16 "
        textColor="text-black"
        width="900"
      />
    </main>
  );
};

export default page;
