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
  const customImageSources3 = [
    "/homano/pattern/1.jpg",
    "/homano/pattern/2.jpg",
    "/homano/pattern/3.jpg",
  ];
  return (
    <main className="flex gap-0 min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/homano/homano.svg"
        title="Real Estate Crowd-Funding Platform"
        name="HOMANO"
        description="is a pioneering crowdfunding platform in Iran, revolutionizing shared homeownership. They empower individuals to invest collectively in shared houses, making homeownership more accessible and affordable. Their innovative approach promotes financial inclusion and community building while ensuring transparent and secure investments. They are committed to reshaping the real estate landscape in Iran, enabling more people to realize their dreams of homeownership through the power of crowdfunding."
        color="text-[#C1A020]"
        colorbg="bg-[#C1A020]"
        bg="/homano/homano-logo.svg"
      />
      {/* <VideoPlayer /> */}
      <Images
        title="Brand"
        title2="Personality"
        imageSrc="/homano/personality.png"
        p=" sm:py-10"
        titleColor="text-[#C1A020]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc="/homano/arch.png"
        p="mb-16 sm:py-10"
        titleColor="text-[#C1A020]"
        width="sm:w-3/4 lg:w-1/2  "
      />
      <Story
        title="Development of All Marketing Activities"
        challengeColor="text-[#C1A020]"
        text={`Following the establishment of the Homano Group as a subsidiary of Saman Bank in the field of homeland capital management, project management encompassed all marketing unit departments, including visual identity design, website design and implementation, social media content production and publication, as well as the design and execution of online and offline advertising campaigns in collaboration with active advertising agencies in this field (such as Agah Sazan Advertising Agency). The output of this project, within 15 months of executive activities, was the implementation of all targeted departments and the commencement of the organization's regular advertising activities under the direction of the board of directors.`}
        imageSrc="/homano/story1.jpg"
        width="100%"
        bg="sm:py-16"
      />
      <Pattern
        title1="Logo"
        title=" Design"
        absolute="absolute text-[#C1A020]"
        bg=" bg-[#1F1F42]"
        imageSources={customImageSources3}
      />

      <Images
        title="Sign"
        title2="Design"
        imageSrc="/homano/story5.svg"
        p="mb-16 py-8 sm:py-20"
        width="w-2/3"
        titleColor="text-[#C1A020]"
      />
      <Pallete src="/homano/pallete.jpg" titleColor="text-[#009c47]" />
      <Images
        title="Icon"
        title2="Pack"
        titleColor="text-[#C1A020]"
        imageSrc="/homano/icon-1.jpg"
        bg="bg-[#fff]"
        textColor="text-black"
        p=" sm:pt-16"
      />
      <Images
        imageSrc="/homano/icon-2.jpg"
        bg="bg-[#fff]"
        textColor="text-black"
        p=" sm:pb-16 mb-8"
      />
      <Images
        title="UI/UX"
        title2="Design"
        titleColor="text-[#C1A020]"
        imageSrc="/homano/3.jpg"
        bg="bg-[#fff] py-10"
        textColor="text-black"
      />
      <Images
        title="UI"
        title2="DESIGN SYSTEM"
        titleColor="text-[#C1A020]"
        imageSrc="/homano/uids.jpg"
        bg="bg-[#fff] pb-8 lg:py-12"
        textColor="text-black"
      />
      <Social
        img1="/homano/social/1.jpg"
        img2="/homano/social/2.jpg"
        textColor="text-[#C1A020]"
      />
    </main>
  );
};

export default page;
