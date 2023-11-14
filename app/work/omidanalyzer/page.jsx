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
  const customHeading2 = "stationary";
  const customImageSources2 = [
    "/omid/stationary/1.jpg",
    "/omid/stationary/2.jpg",
    "/omid/stationary/3.jpg",
    "/omid/stationary/4.jpg",
    "/omid/stationary/5.jpg",
  ];
  const customImageSources3 = [
    "/omid/icon/1.jpg",
    "/omid/icon/2.jpg",
    "/omid/icon/3.jpg",
  ];
  const customBackgroundColor2 = "bg-[#000]";

  return (
    <main className="flex min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/omid/omid.svg"
        title="Financial Company"
        name="OMIDANALYZER"
        description=" leads the way in Iran's stock market with a focus on algorithmic trading and financial services. They bring innovation and precision to trading strategies, ensuring optimal results for our clients. Their seasoned experts and cutting-edge technology enable us to navigate the dynamic financial landscape with accuracy and agility."
        color="text-[#579AFF]"
        colorbg="bg-[#1F1F42]"
        bg="/omid/omid-logo.svg"
      />
      <Images
        title="Brand"
        title2="Personality"
        imageSrc="/omid/personality.png"
        p=" sm:py-10"
        titleColor="text-[#579AFF]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc="/omid/arch.png"
        p="mb-16 sm:py-10"
        titleColor="text-[#579AFF]"
        width="sm:w-3/4 lg:w-1/2  "
      />
      <Story
        title="Development of All Marketing Activities"
        challengeColor="text-[#579AFF]"
        text="Following the establishment of the Omid Analyst Group as a subsidiary of Saman Bank in the field of capital management, project management encompassed all marketing unit departments, including visual identity design, website design and implementation, social media content production and publication, as well as the design and execution of online and offline advertising campaigns in collaboration with active advertising agencies in this field (such as Agah Sazan Advertising Agency). The output of this project, within 15 months of executive activities, was the implementation of all targeted departments and the commencement of the organization's regular advertising activities under the direction of the board of directors."
        imageSrc="/omid/story1.jpg"
        bg="sm:py-16"
      />
      <Morph
        beforeImageSrc="/omid/morph/1.jpg"
        afterImageSrc="/omid/morph/2.jpg"
        title="Logo "
        title2="Design"
        titleColor="text-[#579AFF]"
      />

      <Packaging
        headingText={customHeading2}
        imageSources={customImageSources2}
        backgroundColor={customBackgroundColor2}
      />
      <Images
        title="Sign"
        title2="Design"
        imageSrc="/omid/story5.svg"
        p="mb-16 py-8 sm:py-20"
        width="w-2/3"
        titleColor="text-[#579AFF]"
      />
      <Pallete src="/omid/pallete.jpg" titleColor="text-[#E62D77]" />
      <Pattern
        title="Icon Pack"
        absolute="absolute text-[#E62D77]"
        bg=" bg-[#1F1F42]"
        imageSources={customImageSources3}
      />
      <Social
        img1="/omid/social/1.jpg"
        img2="/omid/social/2.jpg"
        textColor="text-[#579AFF]"
      />
    </main>
  );
};

export default page;
