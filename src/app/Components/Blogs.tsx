import React from "react";
import Blog1 from "../../../public/Blog1.png";
import Image from "next/image";
import { Clock, LucideCalendarDays } from "lucide-react";
import { blogData } from "../../../public/assets";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="w-full">
      {/* Upper Blog Section */}
      <div className="flex flex-col md:flex-row bg-[#f8f8f8] mx-4 sm:mx-6 md:mx-10 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
        {/* Left side Image */}
<div className="md:w-[60%] w-full"> <Image src={Blog1} alt="Blog 1 Image" className="w-full h-[250px] transition-transform duration-500 hover:scale-105 sm:h-[350px] md:h-[550px] m-3 object-cover rounded-2xl" /> </div>
        {/* Right side Text */}
        <div className="flex flex-col justify-between p-6 md:p-10 md:w-[40%]">
          <div className="transition-all duration-500 hover:-translate-y-2">
            <h1 className="text-base sm:text-lg text-gray-400">Fashion Tips</h1>
            <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-800 mt-2 leading-snug">
              Dressing for Your Body <br /> Type: Find the perfect <br /> Fit
              with VÉON
            </h1>
          </div>

          {/* Date + Read Time */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-2 flex items-center gap-2 bg-gray-400/35 font-medium text-sm md:text-base rounded-md">
              <LucideCalendarDays size={18} /> 3/6/2025
            </span>
            <span className="px-3 py-2 flex items-center gap-2 bg-gray-400/35 font-medium text-sm md:text-base rounded-md">
              <Clock size={18} /> 7min
            </span>
          </div>
        </div>
      </div>

      {/* Lower Blogs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-4 sm:mx-6 md:mx-10">
        {blogData.map((item, index) => (
          <Link
            href={`/Blogs/${item._id}`}
            key={index}
            className="group bg-[#f8f8f8] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Blog Image */}
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-[310px] object-cover  sm:object-top object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Blog Content */}
            <div className="p-4 md:p-6 flex flex-col justify-between flex-grow">
              <div className="transition-all duration-500 ease-in-out transform group-hover:-translate-y-2">
                <h1 className="text-gray-400 text-xs sm:text-sm md:text-base">
                  {item.category}
                </h1>
                <h1 className="text-gray-800 font-semibold text-lg sm:text-xl md:text-2xl mt-2 leading-snug line-clamp-3">
                  {item.title}
                </h1>
              </div>

              {/* Date + Read Time */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                <span className="px-3 py-1.5 flex items-center gap-2 bg-gray-400/35 font-medium text-xs sm:text-sm md:text-base rounded-md">
                  <LucideCalendarDays size={16} /> {item.date}
                </span>
                <span className="px-3 py-1.5 flex items-center gap-2 bg-gray-400/35 font-medium text-xs sm:text-sm md:text-base rounded-md">
                  <Clock size={16} /> {item.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
