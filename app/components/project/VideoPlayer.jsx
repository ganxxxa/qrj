"use client";

import React from "react";

import { FaPlay, FaPause } from "react-icons/fa";
import { useState } from "react";

export const VideoPlayer = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  //   const [volume, setVolume] = useState(1.0);

  //   const handleVolumeChange = (event) => {
  //     const newVolume = parseFloat(event.target.value);
  //     setVolume(newVolume);
  //   };

  return (
    <div className="h-screen w-screen flex items-center justify-center px-28 py-32 bg-[#009C47] ">
      <div
        className="relative w-full h-full flex items-center justify-center bg-[#151515] rounded-lg "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video
          className="w-full h-full object-cover"
          src={videoSrc}
          controls={false}
          autoPlay={isPlaying}
          // volume={volume}
        />
        {isHovered && (
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        )}

        {/* <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
    /> */}
      </div>
    </div>
  );
};
