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
      <Story
        title="Development of All Marketing Activities"
        challenge="Delivered Services"
        text="Following the establishment of the Omid Analyst Group as a subsidiary of Saman Bank in the field of capital management, project management encompassed all marketing unit departments, including visual identity design, website design and implementation, social media content production and publication, as well as the design and execution of online and offline advertising campaigns in collaboration with active advertising agencies in this field (such as Agah Sazan Advertising Agency). The output of this project, within 15 months of executive activities, was the implementation of all targeted departments and the commencement of the organization's regular advertising activities under the direction of the board of directors."
        imageSrc="/omid/story1.jpg"
        // width="100%"
        bg="sm:py-16"
      />

      <Packaging
        headingText={customHeading2}
        imageSources={customImageSources2}
        backgroundColor={customBackgroundColor2}
      />
      <Morph
        beforeImageSrc="/omid/morph/1.jpg"
        afterImageSrc="/omid/morph/2.jpg"
        title="LOGO DESIGN"
      />

      <Images
        title="SIGN DESIGN"
        width="900"
        imageSrc="/omid/story5.svg"
        bg="sm:py-16"
      />
      <Pattern
        title="ICON PACK"
        bg=" bg-[#1F1F42]"
        imageSources={customImageSources3}
      />
      <Images
        title="Social Media Design"
        width="900"
        imageSrc="/omid/story4.jpg"
        bg="sm:py-16 bg-white"
      />
    </main>
  );
};

export default page;
