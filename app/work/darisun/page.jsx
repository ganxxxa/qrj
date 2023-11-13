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
    "/darisun/package/1.jpg",
    "/darisun/package/2.jpg",
    "/darisun/package/3.jpg",
  ];
  const customBackgroundColor = "bg-[#242424]";
  const customHeading2 = "stationary";
  const customImageSources2 = [
    "/darisun/stationary/1.jpg",
    "/darisun/stationary/2.jpg",
    "/darisun/stationary/3.jpg",
  ];

  const customBackgroundColor2 = "bg-[#000]";

  return (
    <main className="flex min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/darisun/darisun.svg"
        title="kitchen baskets Production"
        name="darisun"
        description="is dedicated to crafting sustainable kitchenware that blends artistry with eco-consciousness. They create unique, handmade, and recyclable dishes, emphasizing craftsmanship and environmental responsibility. Using eco-friendly materials, they contribute to a greener future."
        color="text-[#E72C47]"
        colorbg="bg-[#E72C47]"
        bg="/darisun/darisun-logo.svg"
      />
      <Images
        title="Brand"
        title2="Personality"
        imageSrc="/darisun/personality.png"
        p=" sm:py-10"
        titleColor="text-[#46B8AF]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc="/darisun/arch.png"
        p="mb-16 sm:py-10"
        titleColor="text-[#46B8AF]"
        width="sm:w-3/4 lg:w-1/2  "
      />
      <Story
        title="Redesigning Brand Identity, Digital Infrastructure Development (Website)"
        text="With the entry of a new generation of managers into the Darisan family brand in the year 1401 (2022/2023), growth and market development strategies were put into action. Consequently, a redesign of the visual identity in line with the new brand identity, targeting new customer personas, and aligning with international markets was undertaken. This was followed by the development of the digital infrastructure for the Darisan brand (website).
        The outputs of this project, after 8 months of activity, included a complete redesign of the new brand's visual identity, the design and delivery of a brand book, and the design and implementation of a new Darisan website with features such as a sales representative panel and an order processing system."
        imageSrc="/darisun/story1.jpg"
        width="100%"
        bg="sm:py-16"
        challengeColor="text-[#E72C47]"
      />
      {/* <VideoPlayer /> */}
      <Morph
        beforeImageSrc="/darisun/morph/1.jpg"
        afterImageSrc="/darisun/morph/2.jpg"
        title="Logo "
        title2="Design"
        titleColor="text-[#46B8AF]"
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
        imageSrc="/darisun/story4.png"
        p="mb-16 py-8 sm:py-20"
        width="w-2/3"
        title2="Design"
        titleColor="text-[#46B8AF]"
      />
      <Images
        title="Logo"
        title2=" Ideas"
        textColor="text-black"
        bg="bg-[#fff]"
        p="mb-16 sm:py-10"
        imageSrc="/darisun/story5.png"
        width="sm:w-3/4"
        titleColor="text-[#46B8AF]"
      />
      <Pallete src="/darisun/pallete.jpg" titleColor="text-[#007E72]" />
      <Images
        title="UI/UX"
        title2="Design"
        titleColor="text-[#46B8AF]"
        imageSrc="/darisun/ui.jpg"
        bg="bg-[#fff]"
        textColor="text-black"
      />
      <Images imageSrc="/darisun/morph/3.jpg" width="sm:w-4/5" bg="bg-[#fff]" />
      <Images
        imageSrc="/darisun/morph/4.jpg"
        width="sm:w-4/5"
        bg="bg-[#fff] pb-16 "
      />
    </main>
  );
};

export default page;
