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
  const customHeading = "Products Posts";
  const customImageSources = [
    "/palermo/package/1.jpg",
    "/palermo/package/2.jpg",
    "/palermo/package/3.jpg",
  ];

  const customHeading2 = "Quote Posts";
  const customImageSources2 = [
    "/palermo/stationary/1.jpg",
    "/palermo/stationary/2.jpg",
    "/palermo/stationary/3.jpg",
  ];

  const customBackgroundColor2 = "bg-[#fff] text-black font-semibold";

  return (
    <main className="flex min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/palermo/palermo.svg"
        title="Food Industry"
        name="Palermo Business"
        description=" , a leading force in Iran's slab and ceramic industry, excels internationally. Renowned for top-tier craftsmanship and innovation, it delivers premium quality products. With a global footprint, it sets industry standards through superior materials, technology, and global collaborations. Palermo Business offers discerning client’s world-class solutions in surface design, making it a trusted partner for luxury and sophistication."
        color="text-[#19B6BB]"
        colorbg="bg-[#3C3C3B]"
        bg="/palermo/palermo-logo.svg"
      />
      <Story
        title="Digital Infrastructure Development (Website & Instagram)"
        challenge="Delivered Services"
        text="n the year 1401 (2022/2023), with the entry of a business development consulting team into the &quot;Palermo&quot; brand, one of the market leaders in the construction industry (stone and ceramics), the brand's strategies were focused on integrating its presence in the digital space. After delivering high-level strategies from the consulting team and the board of directors to the Garage Studio, the development of digital infrastructure (a website) and the brand's social media presence (Instagram) were initiated.
        The outputs of this project, after 12 months of activity, included the delivery of a completely new Palermo website with features such as a representative panel, specialized product categorization, and a pre-order registration process. Additionally, a new visual identity design and brand strategy were implemented seamlessly on the brand's social media network (Instagram)."
        imageSrc="/palermo/story1.jpg"
        bg="sm:py-16"
      />
      {/* <VideoPlayer /> */}
      <Images
        title="SOCIAL MEDIA DESIGN"
        imageSrc="/palermo/story4.png"
        bg="sm:py-16 bg-[#fff]"
        textColor="text-black"
      />
      <Packaging
        headingText={customHeading}
        imageSources={customImageSources}
        backgroundColor={customBackgroundColor2}
      />
      <Packaging
        headingText={customHeading2}
        imageSources={customImageSources2}
        backgroundColor={customBackgroundColor2}
      />

      <Images
        title="UI/UX Design"
        imageSrc="/palermo/ui.jpg"
        bg="bg-[#f6f6f6]"
        textColor="text-black"
      />
 
      <Images
        title="UI DESIGN SYSTEM"
        imageSrc="/palermo/uids.jpg"
        bg="bg-[#f6f6f6] sm:pb-8 "
        textColor="text-black"
      />
    </main>
  );
};

export default page;
