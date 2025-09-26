"use client";
import React from "react";

const NewProductNav = () => {
  return (
    <div className="sticky top-16 z-50">
      <div className="flex justify-center">
        <div className="w-full max-w-3xl gap-10 py-2 px-4 rounded-md bg-[#ebebeb94] backdrop-blur-md border border-white/30 shadow-lg flex justify-between items-center">
          <div className="text-[#33383c] font-medium tracking-wide text-sm">
            New in
          </div>
          <div>
            <ul className="flex hover:text-[#33383c] justify-center items-center gap-6 font-medium">
              <li className="cursor-pointer text-gray-400 hover:text-[#33383c] transition-colors">
                View All
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductNav;
