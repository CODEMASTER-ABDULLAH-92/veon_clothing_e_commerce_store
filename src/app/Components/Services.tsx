import React from "react";
import { Truck, HelpCircle, RotateCcw, Wallet } from "lucide-react";

const Services = () => {
  const details = [
    {
      icon: <Truck className="w-12 h-12 " />,
      heading: "Free Shipping",
      content: "Get your sunglasses in 4-7 business days.",
    },
    {
      icon: <HelpCircle className="w-12 h-12 " />,
      heading: "24/7 Customer Support",
      content: "We're here to answer all your questions anytime.",
    },
    {
      icon: <RotateCcw className="w-12 h-12 " />,
      heading: "Easy Returns",
      content: "Hassle-free 7-day return policy for all orders.",
    },
    {
      icon: <Wallet className="w-12 h-12 " />,
      heading: "Cash on Delivery",
      content: "Pay when you receive your order securely.",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center sm:h-[370px] md:h-[450px] lg:min-h-[700px] px-6 md:px-10 py-12">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          We offer the best shopping experience for our customers.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {details.map((item, index) => (
          <div
            key={index}
            className="group bg-[#f8f8f8] rounded-xl p-6 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="mb-4">{item.icon}</div>

            {/* Heading & Content */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              {item.heading}
            </h3>
            <p className="text-gray-500 text-sm md:text-base">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
