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
    "/maple/packaging/1.jpg",
    "/maple/packaging/2.jpg",
    "/maple/packaging/3.jpg",
    "/maple/packaging/4.jpg",
    "/maple/packaging/5.jpg",
  ];

  const customHeading2 = "Interior Design";

  const customImageSources2 = [
    "/maple/interior/1.jpg",
    "/maple/interior/2.jpg",
    "/maple/interior/3.jpg",
  ];

  const customBackgroundColor = "bg-[#fff] text-black font-semibold";

  return (
    <main className="flex min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/maple/maple.svg"
        name="THE MAPLE MANIA "
        description="is inspired by old-fashioned America. The music, cinema, and other cultural and artistic pursuits during that time reflect the positivity, liveliness, and prosperity of era. They're your gateway to a world of maple goodness. Their passion for all things maple is deeply rooted in the rich heritage of Japan. From delectable maple treats to artisanal maple products, they bring the sweet charm of maple to your doorstep."
        color="text-[#EB8B33]"
        colorbg="bg-[#EB8B33]"
      />
      <Story
        title="Branding Development"
        challenge="Delivered Services"
        text="In 2019, with the creation of the brand 'Meeple Mania,' the management of this project focused on the areas of visual identity, website design and implementation, and the design and implementation of a biscuit packaging line. After 8 months of activity, the project's output included the development of a comprehensive brand identity document, the design and implementation of a biscuit packaging line featuring 12 characters, and the preparation of the brand's website."
        imageSrc="/maple/story1.jpg"
        bg="sm:py-16"
      />
      {/* <VideoPlayer /> */}
      <Packaging
        headingText={customHeading}
        imageSources={customImageSources}
        backgroundColor={customBackgroundColor}
      />
      <Images
        title="SOCIAL MEDIA DESIGN"
        imageSrc="/maple/story4.jpg"
        bg="sm:py-16 bg-[#fff]"
        textColor="text-black"
      />
      <Packaging
        headingText={customHeading2}
        imageSources={customImageSources2}
        backgroundColor={customBackgroundColor}
      />
    </main>
  );
};

export default page;
