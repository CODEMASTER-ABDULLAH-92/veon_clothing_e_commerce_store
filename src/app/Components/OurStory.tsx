import React from "react";
import Image from "next/image";
import story from "../../../public/story.avif";

const OurStory = () => {
  return (
    <div className="relative w-screen min-h-screen">
      {/* Background Image */}
      <Image
        src={story}
        alt="Home Image"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 bg-black/40">
        <h1 className="text-4xl md:text-6xl font-medium text-white drop-shadow-lg">
          Our Story, Your Style
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-[#e0e0e0]">
          Crafting timeless fashion with quality, innovation, and sophistication at the core.
        </p>

        {/* Beautiful Button */}
        <button
          className="mt-6 px-6 py-3 rounded-lg bg-white/80 text-[#33383c] font-semibold  
          backdrop-blur-md hover:bg-white/50 transition cursor-pointer"
        >
          Explore About Us
        </button>
      </div>
    </div>
  );
};

export default OurStory;
