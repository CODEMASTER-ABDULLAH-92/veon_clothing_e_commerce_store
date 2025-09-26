"use client";
import React from "react";

const LowerNav = () => {
  return (
    <div className="sticky top-16 z-50">
      <div className="flex justify-center">
        <div className="w-full max-w-3xl gap-10 py-2 px-4 rounded-md bg-[#ebebeb94] backdrop-blur-md border border-white/30 shadow-lg flex justify-between items-center">
          <div className="text-[#33383c] font-bold tracking-wide text-lg">
            VÉON
          </div>
          <div>
            <ul className="flex text-[#33383c] justify-center items-center gap-6 font-medium">
              <li className="cursor-pointer hover:text-black transition-colors">
                Shop
              </li>
              <li className="cursor-pointer hover:text-black transition-colors">
                About
              </li>
              <li className="cursor-pointer hover:text-black transition-colors">
                Blogs
              </li>
              <li className="cursor-pointer hover:text-black transition-colors">
                Contact
              </li>
              <li className="cursor-pointer hover:text-black transition-colors">
                Search
              </li>
              <li className="cursor-pointer hover:text-black transition-colors">
                Bag
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerNav;
