"use client";
import React from "react";
import Intro from "../../components/project/Intro";
import Packaging from "../../components/project/Packaging";
import { VideoPlayer } from "../../components/project/VideoPlayer";
import Story from "../../components/project/Story";
import Pallete from "../../components/project/pallete/Pallete";
import pack1 from "@/public/darisun/package/1.jpg";
import pack2 from "@/public/darisun/package/2.jpg";
import pack3 from "@/public/darisun/package/3.jpg";
import pack4 from "@/public/darisun/stationary/1.jpg";
import pack5 from "@/public/darisun/stationary/2.jpg";
import pack6 from "@/public/darisun/stationary/3.jpg";
import morph1 from "@/public/darisun/morph/1.jpg";
import morph2 from "@/public/darisun/morph/2.jpg";
import morph3 from "@/public/darisun/morph/3.jpg";
import morph4 from "@/public/darisun/morph/4.jpg";
import story1 from "@/public/darisun/story1.jpg";
import story4 from "@/public/darisun/story4.png";
import story5 from "@/public/darisun/story5.png";
import ui from "@/public/darisun/ui.jpg";
import plt from "@/public/darisun/pallete.jpg";
import pers from "@/public/darisun/personality.png";
import arch from "@/public/darisun/arch.png";
import Morph from "../../components/project/Morph";
import Images from "@/app/components/project/Images";

const page = () => {
  const customHeading = "Packaging";
  const customImageSources = [pack1, pack2, pack3];
  const customBackgroundColor = "bg-[#242424]";
  const customHeading2 = "stationary";
  const customImageSources2 = [pack4, pack5, pack6];

  const customBackgroundColor2 = "bg-[#000]";

  return (
    <main className="flex min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/darisun/darisun.svg"
        title="Home Suppliance"
        name="darisun"
        description="is dedicated to crafting sustainable kitchenware that blends artistry with eco-consciousness. They create unique, handmade, and recyclable dishes, emphasizing craftsmanship and environmental responsibility. Using eco-friendly materials, they contribute to a greener future."
        color="text-[#E72C47]"
        colorbg="bg-[#E72C47]"
        bg="/darisun/darisun-logo.svg"
      />
      <Images
        title="Brand"
        title2="Personality"
        imageSrc={pers}
        p=" sm:py-10"
        titleColor="text-[#46B8AF]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc={arch}
        p="mb-16 sm:py-10"
        titleColor="text-[#46B8AF]"
        width="w-3/4 lg:w-3/5"
      />
      <Story
        title="Redesigning Brand Identity, Digital Infrastructure Development (Website)"
        text="With the entry of a new generation of managers into the Darisan family brand in the year 1401 (2022/2023), growth and market development strategies were put into action. Consequently, a redesign of the visual identity in line with the new brand identity, targeting new customer personas, and aligning with international markets was undertaken. This was followed by the development of the digital infrastructure for the Darisan brand (website).
        The outputs of this project, after 8 months of activity, included a complete redesign of the new brand's visual identity, the design and delivery of a brand book, and the design and implementation of a new Darisan website with features such as a sales representative panel and an order processing system."
        imageSrc={story1}
        width="100%"
        bg="sm:py-16"
        challengeColor="text-[#E72C47]"
      />
      {/* <VideoPlayer /> */}
      <Morph
        beforeImageSrc={morph1}
        afterImageSrc={morph2}
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
        title="Sign"
        imageSrc={story4}
        p="mb-16 py-8 sm:py-12"
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
        imageSrc={story5}
        width="w-2/3"
        titleColor="text-[#46B8AF]"
      />
      <Pallete src={plt} titleColor="text-[#007E72]" />
      <Images
        title="UI/UX"
        title2="Design"
        titleColor="text-[#46B8AF]"
        imageSrc={ui}
        width="sm:w-3/4"
        bg="bg-[#fff] pt-16"
        textColor="text-black"
      />
      <Images imageSrc={morph3} width="sm:w-2/3" bg="bg-[#fff]" />
      <Images imageSrc={morph4} width="sm:w-2/3" bg="bg-[#fff] pb-16 " />
    </main>
  );
};

export default page;
