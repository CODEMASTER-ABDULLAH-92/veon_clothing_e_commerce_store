import React from "react";
import Image from "next/image";
import discover from "../../../public/discover.png";

const DiscoverCollection = () => {
  return (
    <section className="w-full sm:grid flex flex-col-reverse sm:grid-cols-2 rounded-2xl p-4 md:p-8 gap-4">
      {/* Left Section */}
      <div className="flex flex-col bg-[#f8f8f8] rounded-2xl justify-center items-center text-center p-6 md:p-10 space-y-3 md:space-y-5 shadow-md">
        <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-gray-400">
          New in Dresses
        </p>
        <h1 className="text-2xl sm:text-4xl font-semibold text-gray-900 leading-tight">
          Elevate Your Style
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm md:text-lg leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
          Discover sophisticated silhouettes and luxurious fabrics,{" "}
          <br className="hidden md:block" />
          designed for timeless style.
        </p>
        <button className="mt-4 px-6 sm:px-8 py-2 sm:py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-all shadow-md hover:scale-105 text-sm sm:text-base">
          Shop Now
        </button>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center w-full">
        <div className="relative w-full h-full">
          <Image
            src={discover}
            alt="Discover Collection"
            className="rounded-2xl object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default DiscoverCollection;
