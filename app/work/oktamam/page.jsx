"use client";
import React from "react";
import Intro from "../../components/project/Intro";
import Packaging from "../../components/project/Packaging";
import { VideoPlayer } from "../../components/project/VideoPlayer";
import Story from "../../components/project/Story";
import Images from "@/app/components/project/Images";
import Social from "@/app/components/project/Social";
import pers from "@/public/ok/personality.png";
import arch from "@/public/ok/arch.png";
import story1 from "@/public/ok/story1.jpg";
import so1 from "@/public/ok/social/1.jpg";
import so2 from "@/public/ok/social/2.jpg";
import post1 from "@/public/ok/posts/1.jpg";
import post2 from "@/public/ok/posts/2.jpg";
import post3 from "@/public/ok/posts/3.jpg";
import post4 from "@/public/ok/posts/4.jpg";
import stry1 from "@/public/ok/stories/1.jpg";
import stry2 from "@/public/ok/stories/2.jpg";
import stry3 from "@/public/ok/stories/3.jpg";
import stry4 from "@/public/ok/stories/4.jpg";
import event1 from "@/public/ok/event/1.jpg";
import event2 from "@/public/ok/event/2.jpg";
import event3 from "@/public/ok/event/3.jpg";
import event4 from "@/public/ok/event/4.jpg";
import reel1 from "@/public/ok/reels/1.jpg";
import reel2 from "@/public/ok/reels/2.jpg";
import reel3 from "@/public/ok/reels/3.jpg";

const page = () => {
  const customHeading = "Instagram Posts";
  const customImageSources = [post1, post2, post3, post4];

  const customHeading2 = "Instagram Stories";
  const customHeading3 = "Instagram Reels";
  const customImageSources2 = [stry1, stry2, stry3, stry4];
  const customImageSources4 = [event1, event2, event3, event4];
  const customImageSources3 = [reel1, reel2, reel3];

  const customBackgroundColor = "bg-[#fff] text-black font-semibold";

  return (
    <main className="flex min-w-screen  flex-col items-center bg-[#151515] ">
      <Intro
        src="/ok/ok.svg"
        title="Educational Consultancy Firm"
        name="OKTAMAM"
        description=" is a comprehensive service provider across the Middle East and Europe. Specializing in educational services, business consultation, real estate investment, tourism, and more, they cater to your multifaceted needs. With a commitment to excellence, they offer expert guidance and solutions to individuals and businesses, ensuring success in diverse sectors."
        color="text-[#2695B3]"
        colorbg="bg-[#2695B3]"
        bg="/ok/ok-logo.svg"
      />
      <Images
        title="Brand"
        title2="Personality"
        imageSrc={pers}
        p=" sm:py-10"
        titleColor="text-[#2695B3]"
      />
      <Images
        title="Brand"
        title2="Archetype"
        imageSrc={arch}
        p="mb-16 sm:py-10"
        titleColor="text-[#2695B3]"
        width="sm:w-3/4 lg:w-1/2"
      />
      <Story
        title="Development of All Marketing Activities"
        challengeColor="text-[#2695B3]"
        text="In the year 2022, with the development of the brand strategy for Garage in line with expanding its international portfolio, the project to develop all marketing channels in Iran for the brand 'OK TAMAM' was initiated. 'OK TAMAM' is a market leader in the Middle East in the field of student admissions to universities in first-world countries and providing facilities to active students. This move was aimed at expanding its regional markets.
        In this project, all online channels of this organization were activated in the first phase, followed by the activation of offline channels in the second phase. A marketing and sales team was established in Tehran for this brand. The output of this project, after 12 months of activity, included the establishment of a permanent sales and marketing team, the creation of all online infrastructure including social networks, websites, etc., the development of automated online and offline advertising processes, and achieving sales in the Iranian market."
        imageSrc={story1}
        bg="sm:py-16"
      />
      {/* <VideoPlayer /> */}
      <Social
        img1={so1}
        img2={so2}
        link="Instagram.com"
        textColor="text-[#29A9E1]"
      />
      <Packaging
        width="sm:w-2/5"
        headingText={customHeading}
        imageSources={customImageSources}
        backgroundColor={customBackgroundColor}
      />
      <Packaging
        width="sm:w-2/6"
        headingText={customHeading2}
        imageSources={customImageSources2}
        backgroundColor={customBackgroundColor}
      />
      <Packaging
        width="sm:w-2/6"
        headingText={customHeading3}
        imageSources={customImageSources3}
        backgroundColor={customBackgroundColor}
      />
      <Packaging
        headingText="Interior"
        headingText2="Design"
        headingTextColor="text-[#29A9E1]"
        imageSources={customImageSources4}
        backgroundColor="bg-black text-[#fff] font-semibold"
      />
    </main>
  );
};

export default page;
