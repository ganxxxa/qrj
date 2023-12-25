"use client";
import React from "react";
import Intro from "../../components/project/Intro";
import Packaging from "../../components/project/Packaging";
import { VideoPlayer } from "../../components/project/VideoPlayer";
import Story from "../../components/project/Story";
import pack1 from "@/public/palermo/package/1.jpg";
import pack2 from "@/public/palermo/package/2.jpg";
import pack3 from "@/public/palermo/package/3.jpg";
import pack4 from "@/public/palermo/stationary/1.jpg";
import pack5 from "@/public/palermo/stationary/2.jpg";
import pack6 from "@/public/palermo/stationary/3.jpg";
import Images from "@/app/components/project/Images";
import Social from "@/app/components/project/Social";
import pers from "@/public/palermo/personality.png";
import arch from "@/public/palermo/arch.png";
import story1 from "@/public/palermo/story1.jpg";
import ui from "@/public/palermo/ui.jpg";
import uids from "@/public/palermo/uids.jpg";
import so1 from "@/public/palermo/social/1.jpg";
import so2 from "@/public/palermo/social/2.jpg";
import morph1 from "@/public/palermo/morph/3.jpg";
import morph2 from "@/public/palermo/morph/4.jpg";
const page = () => {
  const customHeading = "Products Posts";
  const customImageSources = [pack1, pack2, pack3];

  const customHeading2 = "Quote Posts";
  const customImageSources2 = [pack4, pack5, pack6];

  const customBackgroundColor2 = "bg-[#fff] text-black font-semibold";

  return (
    <main className="flex min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/palermo/palermo.svg"
        title="stone and ceramic products"
        name="Palermo Business"
        description=" , a leading force in Iran's slab and ceramic industry, excels internationally. Renowned for top-tier craftsmanship and innovation, it delivers premium quality products. With a global footprint, it sets industry standards through superior materials, technology, and global collaborations. Palermo Business offers discerning client’s world-class solutions in surface design, making it a trusted partner for luxury and sophistication."
        color="text-[#19B6BB]"
        colorbg="bg-[#3C3C3B]"
        bg="/palermo/palermo-logo.svg"
      />
      {/* <VideoPlayer /> */}
      <Images
        title="Brand"
        title2="Personality"
        imageSrc={pers}
        p=" sm:py-10"
        titleColor="text-[#19B6BB]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc={arch}
        p="mb-16 sm:py-10"
        titleColor="text-[#19B6BB]"
        width="sm:w-3/4 lg:w-1/2  "
      />{" "}
      <Story
        title="Digital Infrastructure Development (Website & Instagram)"
        challengeColor="text-[#19B6BB]"
        text="in the year 1401 (2022/2023), with the entry of a business development consulting team into the &quot;Palermo&quot; brand, one of the market leaders in the construction industry (stone and ceramics), the brand's strategies were focused on integrating its presence in the digital space. After delivering high-level strategies from the consulting team and the board of directors to the Garage Studio, the development of digital infrastructure (a website) and the brand's social media presence (Instagram) were initiated.
      The outputs of this project, after 12 months of activity, included the delivery of a completely new Palermo website with features such as a representative panel, specialized product categorization, and a pre-order registration process. Additionally, a new visual identity design and brand strategy were implemented seamlessly on the brand's social media network (Instagram)."
        imageSrc={story1}
        bg="sm:py-16"
      />
      <Social img1={so1} img2={so2} textColor="text-[#46B8AF]" />
      <Packaging
        width="sm:w-2/5"
        headingText={customHeading}
        imageSources={customImageSources}
        backgroundColor={customBackgroundColor2}
      />
      <Packaging
        width="sm:w-2/5"
        headingText={customHeading2}
        imageSources={customImageSources2}
        backgroundColor={customBackgroundColor2}
      />
      <Images
        title="UI/UX "
        title2="Design "
        imageSrc={ui}
        bg="bg-[#fff]"
        textColor="text-black"
        titleColor="text-[#19B6BB]"
        width="sm:w-4/5"
      />
      <Images imageSrc={morph1} width="sm:w-3/4" bg="bg-[#fff]" />
      <Images imageSrc={morph2} width="sm:w-3/4" bg="bg-[#fff] py-10" />
      <Images
        title="UI"
        title2="Design System"
        titleColor="text-[#19B6BB]"
        imageSrc={uids}
        bg="bg-[#fff] pt-8 pb-16"
        textColor="text-black"
        width="px-10 sm:w-2/3"
      />
    </main>
  );
};

export default page;
