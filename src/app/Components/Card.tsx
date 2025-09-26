"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Link from "next/link";

interface cardInfo {
  _id: string;
  imag1: (string | StaticImageData)[]; // Now it's an array
  heading: string;
  price: string;
}

const Card = (info: cardInfo) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`shop/${info._id}`}
      className=" cursor-pointer  flex justify-center items-center"
    >
      <div className="flex flex-col items-start m-2 overflow-clip">
        {/* Image Container */}
        <div
          className="relative mb-2"
          onMouseLeave={() => setHovered(false)}
          onMouseEnter={() => setHovered(true)}
        >
          {/* Front Image */}
          <Image
            alt="product-front"
            src={info.imag1[0]} // First image in array
            className={`object-cover h-full w-full bg-[#f8f8f8] rounded-md transition-opacity duration-500 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Back Image (only render if provided) */}
          {info.imag1[1] && (
            <Image
              alt="product-back"
              src={info.imag1[1]} // Second image in array
              fill
              className={`object-cover bg-[#f8f8f8] rounded-md transition-opacity duration-500 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>

        {/* Product Info */}
        <h1 className="text-lg font-medium">{info.heading}</h1>
        <h1 className="text-gray-700">{info.price}</h1>
      </div>
    </Link>
  );
};

export default Card;
