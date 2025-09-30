"use client";
import UpperNav from "./Components/UpperNav";
import LowerNav from "./Components/LowerNav";
import { data } from "../../public/assets";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

 import OurStory from "./Components/OurStory";
import Card from "./Components/Card";
import BestSeller from "./Components/BestSeller";
import Footer from "./Components/Footer";
import NewProduct from "./Components/NewProduct";
import DiscoverCollection from "./Components/DiscoverCollection";
import RefineCasual from "./Components/Refine";
import Testimonilas from "./Components/Testimonilas";
import Blogs from "./Components/Blogs";
import Services from "./Components/Services";
import Pictures from "./Components/Pictures";
export default function Home() {
  const imgRef = useRef(null);
  const [count, setCount] = useState<number>(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 200);
    return () => clearTimeout(timeout);
  }, [count]);

  useGSAP(() => {
    gsap.fromTo(
      imgRef.current,
      { 
        scale: 1.2, // Reduced initial scale for better effect
        opacity: 0,
        transformOrigin: "center center" // Ensure scaling from center
      },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power3.out" 
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".hh",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
    );
  }, [count]);

  useEffect(() => {
    gsap.fromTo(
      ".heading",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out", stagger: 1 }
    );
  }, []);

  const images = [data.homeIma2, data.homeIma1, data.homeIma3];

  return (
    <div className="relative">
      {/* ✅ Sticky Navbars */}
      <div className="fixed w-full z-50 space-y-7">
        <UpperNav />
        <LowerNav />
      </div>

      {/* ✅ Hero Section with proper spacing for sticky nav */}
      <section className="h-screen relative w-full pt-[height-of-navbars]">
        {/* Background Image - Always full screen */}
        <Image
          key={count}
          src={images[count]}
          alt={`Home${count + 1}`}
          ref={imgRef}
          fill // Use fill instead of absolute positioning
          className={`object-cover transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          sizes="100vw"
          priority // Ensure first image loads quickly
        />

        {/* Foreground Content */}
        <div className="absolute bottom-10 mx-10 gap-20 flex items-end z-10">
          <div>
            <h1 className="text-white text-7xl font-medium leading-tight">
              <span className="list-none heading">Bold Layers,</span> <br />
              <span className="list-none heading">Confident Looks.</span>
            </h1>

            <div className="flex items-end gap-10 mt-4">
              <span className="hh h-5 w-5 p-1 flex justify-center items-center">
                <span className="text-xl text-white font-bold">
                  0{count + 1}
                </span>
              </span>
              <div className="flex gap-5">
                {images.map((img, idx) => (
                  <Image
                    key={idx}
                    className="rounded-lg border-gray-400 border object-cover h-[80px] w-[120px] cursor-pointer transition-transform duration-300 hover:scale-105"
                    src={img}
                    alt={`thumb-${idx}`}
                    height={80}
                    width={120}
                    onMouseEnter={() => setCount(idx)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div>
            <h1 className="text-white pb-4 font-light text-lg">
              Upgrade your wardrobe with <br /> crisp, versatile T-shirts
            </h1>
            <button className="text-[#33383c] py-2 px-4 rounded-lg bg-[#e3e3e3] hover:bg-[#e3e3e399] transition-all duration-300 hover:scale-105">
              Browse Collection
            </button>
          </div>
        </div>
      </section>
       <OurStory />
       <BestSeller/>
       <NewProduct/>
       <DiscoverCollection/>
       <RefineCasual/>
       <Testimonilas/>
       <Blogs/>
       <Services/>
       <Pictures/>
       <Footer/>
    </div>
  );
}





