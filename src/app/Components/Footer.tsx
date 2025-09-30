import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    // bg-[#1a1a1a]
    <div className=" bg-[#800000] text-white pt-14 px-6 md:px-12 lg:px-20">
      {/* Upper side */}
      <div className="grid pt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-20">
        {/* Logo + description */}
        <div>
          <Link href={"/"} className="text-2xl font-medium text-gray-500">VÉON</Link>
          <p className="pt-2 text-gray-400">
            Sign-up to receive the latest <br /> news from Véon.
          </p>

          {/* Subscribe Section */}
          <div className="mt-4 flex flex-col  gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[66%] px-4 py-2 rounded-lg bg-[#2a2a2a] text-gray-300 border border-gray-600 focus:outline-none focus:border-gray-400 "
            />
            <button className="px-5 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition w-[66%]">
              Subscribe
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-gray-300 transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-300 transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Clothing Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Clothing</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/category/all" className="hover:text-gray-300 transition">
                All
              </Link>
            </li>
            <li>
              <Link href="/category/shirts" className="hover:text-gray-300 transition">
                Shirts
              </Link>
            </li>
            <li>
              <Link href="/category/tshirts" className="hover:text-gray-300 transition">
                T-Shirts
              </Link>
            </li>
            <li>
              <Link href="/category/bottoms" className="hover:text-gray-300 transition">
                Bottoms
              </Link>
            </li>
            <li>
              <Link href="/category/pants" className="hover:text-gray-300 transition">
                Coats & Jackets
              </Link>
            </li>
            <li>
              <Link href="/category/shoes" className="hover:text-gray-300 transition">
                Knitwear
              </Link>
            </li>
            <li>
              <Link href="/category/accessories" className="hover:text-gray-300 transition">
                Dresses & Jumpsuits
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Support</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="hover:text-gray-300 transition">
                Payment Methods
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-gray-300 transition">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-gray-300 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-300 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-gray-300 transition">
                Shipping Details
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Lower Side */}
      <div className="border-t border-gray-700 pt-8 pb-6 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <ul className="flex gap-6 text-lg list-none">
            <li className="hover:text-gray-300 cursor-pointer transition">
              Instagram
            </li>
            <li className="hover:text-gray-300 cursor-pointer transition">
              Tiktok
            </li>
            <li className="hover:text-gray-300 cursor-pointer transition">
              Twitter (X)
            </li>
          </ul>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Véon. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
