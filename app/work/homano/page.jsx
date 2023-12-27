"use client";
import React from "react";
import Intro from "../../components/project/Intro";
import { VideoPlayer } from "../../components/project/VideoPlayer";
import Story from "../../components/project/Story";
import Pallete from "../../components/project/pallete/Pallete";
import Pattern from "../../components/project/pattern/Pattern";
import pers from "@/public/homano/personality.png";
import arch from "@/public/homano/arch.png";
import story1 from "@/public/homano/story1.jpg";
import pat1 from "@/public/homano/pattern/1.jpg";
import pat2 from "@/public/homano/pattern/2.jpg";
import pat3 from "@/public/homano/pattern/3.jpg";
import Images from "@/app/components/project/Images";
import Social from "@/app/components/project/Social";
import plt from "@/public/homano/pallete.jpg";
import icon1 from "@/public/homano/icon-1.jpg";
import icon2 from "@/public/homano/icon-2.jpg";
import ux from "@/public/homano/3.jpg";
import uids from "@/public/homano/uids.jpg";
import so1 from "@/public/homano/social/1.jpg";
import so2 from "@/public/homano/social/2.jpg";

import story5 from "@/public/homano/story5.png";
const page = () => {
  const customImageSources3 = [pat1, pat2, pat3];
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
        imageSrc={pers}
        p=" sm:py-10"
        titleColor="text-[#C1A020]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc={arch}
        p="mb-16 sm:py-10"
        titleColor="text-[#C1A020]"
        width="sm:w-3/4 lg:w-1/2  "
      />
      <Story
        title="Development of All Marketing Activities"
        challengeColor="text-[#C1A020]"
        text={`Following the establishment of the Homano Group as a subsidiary of Saman Bank in the field of homeland capital management, project management encompassed all marketing unit departments, including visual identity design, website design and implementation, social media content production and publication, as well as the design and execution of online and offline advertising campaigns in collaboration with active advertising agencies in this field (such as Agah Sazan Advertising Agency). The output of this project, within 15 months of executive activities, was the implementation of all targeted departments and the commencement of the organization's regular advertising activities under the direction of the board of directors.`}
        imageSrc={story1}
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
        imageSrc={story5}
        p="mb-16 py-8 sm:py-20"
        width="w-2/3"
        titleColor="text-[#C1A020]"
      />
      <Pallete src={plt} titleColor="text-[#009c47]" />
      <Images
        title="Icon"
        title2="Pack"
        titleColor="text-[#C1A020]"
        imageSrc={icon1}
        bg="bg-[#fff]"
        textColor="text-black"
        p=" sm:pt-16"
      />
      <Images
        imageSrc={icon2}
        bg="bg-[#fff]"
        textColor="text-black"
        p=" sm:pb-16 mb-8"
      />
      <Images
        title="UI/UX"
        title2="Design"
        titleColor="text-[#C1A020]"
        imageSrc={ux}
        bg="bg-[#fff] py-10"
        textColor="text-black"
      />
      <Images
        title="UI"
        title2="DESIGN SYSTEM"
        titleColor="text-[#C1A020]"
        imageSrc={uids}
        bg="bg-[#fff] pb-8 lg:py-12"
        textColor="text-black"
      />
      <Social
        link="Instagram.com"
        img1={so1}
        img2={so2}
        textColor="text-[#C1A020]"
      />
    </main>
  );
};

export default page;
