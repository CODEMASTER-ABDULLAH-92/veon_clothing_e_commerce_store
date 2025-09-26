"use client";
import React, { useEffect, useState } from "react";
import { dataApi } from "../../../../public/assets";
import { useParams } from "next/navigation";
import UpperNav from "@/app/Components/UpperNav";
import LowerNav from "@/app/Components/LowerNav";
import Image from "next/image";
import { Check, Minus, Plus } from "lucide-react";
import Footer from "@/app/Components/Footer";

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = () => {
      const filteredData = dataApi.find((item) => item._id === id);
      setData(filteredData || null);
    };
    fetchData();
  }, [id]);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    // Add to cart logic here
    const productData = {
      id: data._id,
      name: data.heading,
      price: data.price,
      color: data.colors[selectedColor],
      size: data.sizes[selectedSize],
      quantity: quantity,
      image: data.imag1[0],
    };
    console.log("Added to cart:", productData);
    // Implement your cart logic here
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <h1 className="text-red-500 text-xl">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-white relative">
      <UpperNav />
      <LowerNav />

      {/* Product Container */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 p-6 max-w-7xl mx-auto relative">
        {/* Left Side - Thumbnails and Main Images */}
        <div className="w-full md:w-1/2 flex flex-row min-h-full relative gap-4">
          <div className="fixed bottom-8 left-[25%] -translate-x-1/2 flex flex-row gap-3 z-30">
            {data.imag1.map((imgSrc, index) => (
              <div
                key={index}
                className="relative w-20 h-20 bg-[#f8f8f8] rounded-lg border border-gray-300 cursor-pointer"
              >
                <Image
                  src={imgSrc}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Main Images Column (Right Side of thumbnails) */}
          <div className="flex-1 flex flex-col gap-4 min-h-full  pr-2">
            {data.imag1.map((imgSrc, index) => (
              <div key={index} className="relative aspect-square w-full">
                <Image
                  src={imgSrc}
                  alt={`${data.heading} - View ${index + 1}`}
                  fill
                  className="object-contain bg-[#f8f8f8] rounded-lg shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Div - Product Details */}
        <div className="w-full md:w-1/2 self-start sticky top-32 bg-[#f8f8f8] p-6 rounded-xl shadow-md space-y-5">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <p className="text-sm text-gray-600 flex gap-1">
              <span className="font-medium cursor-pointer hover:text-gray-500 transition-colors">
                Shop
              </span>
              /
              <span className="font-medium cursor-pointer hover:text-gray-500 transition-colors">
                {data.category}
              </span>
            </p>
          </nav>

          {/* Heading & Price */}
          <h1 className="text-3xl font-semibold">{data.heading}</h1>
          <p className="text-2xl font-bold text-gray-800">{data.price}</p>

          <hr className="border-gray-300 my-4" />

          {/* Colors */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Colors</h2>
            <div className="flex gap-2 flex-wrap">
              {data.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`px-4 py-1.5 border rounded-md text-sm transition-all ${
                    selectedColor === index
                      ? "bg-gray-800 text-white border-gray-800"
                      : "bg-white border-gray-300 hover:border-gray-800"
                  }`}
                  aria-pressed={selectedColor === index}
                >
                  {color}
                </button>
              ))}
            </div>
          </section>

          {/* Sizes */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Sizes</h2>
            <div className="flex gap-2 flex-wrap">
              {data.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(index)}
                  className={`px-4 py-1.5 border rounded-md text-sm transition-all ${
                    selectedSize === index
                      ? "bg-gray-800 text-white border-gray-800"
                      : "bg-white border-gray-300 hover:border-gray-800"
                  }`}
                  aria-pressed={selectedSize === index}
                >
                  {size}
                </button>
              ))}
            </div>
          </section>

          <hr className="border-gray-300 my-4" />

          {/* Section Tabs */}
          <div role="tablist" className="flex justify-start gap-6">
            {["Description", "Materials & Care", "Size & Fit"].map(
              (label, index) => (
                <button
                  key={index}
                  role="tab"
                  onClick={() => setActiveSection(index)}
                  className={`text-lg font-medium cursor-pointer border-b-2 pb-1 transition ${
                    activeSection === index
                      ? "text-gray-900 border-gray-900"
                      : "text-gray-500 border-transparent hover:border-gray-300"
                  }`}
                  aria-selected={activeSection === index}
                >
                  {label}
                </button>
              )
            )}
          </div>

          {/* Section Content */}
          <div role="tabpanel">
            {activeSection === 0 ? (
              <p className="text-gray-700 text-base leading-relaxed">
                {data.discription}
              </p>
            ) : activeSection === 1 ? (
              <ul className="space-y-2 mt-2">
                {typeof data.materialCare === "string"
                  ? data.materialCare.split("\n").map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))
                  : data.materialCare.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-sm">
                Size and fit information coming soon...
              </p>
            )}
          </div>

          <hr className="border-gray-300 my-4" />

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Quantity Selector */}
            <div className="bg-gray-200 p-2 flex w-[130px] rounded-lg justify-between items-center">
              <button
                onClick={decrementQuantity}
                className="bg-white p-1 flex justify-center items-center rounded-md cursor-pointer hover:bg-gray-100 transition"
                aria-label="Decrease quantity"
              >
                <Minus size={20} />
              </button>
              <span className="font-medium" aria-live="polite">
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                className="bg-white p-1 flex justify-center items-center rounded-md cursor-pointer hover:bg-gray-100 transition"
                aria-label="Increase quantity"
              >
                <Plus size={20} />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-gray-700 text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors flex-1 sm:flex-none"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
