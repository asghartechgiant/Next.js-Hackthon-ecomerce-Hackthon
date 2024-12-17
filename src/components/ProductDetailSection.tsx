"use client";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ProductDetailSection = () => {
  const [quantity, setQuantity] = useState(1);

  // Handlers for Quantity Increment and Decrement
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);
  return (
    <section className="font-poppins flex flex-col lg:flex-row gap-8 px-10 py-8 border-b my-10">
      {/* Left Section: Product Images */}
      <div className="flex gap-4 h-max">
        <div className="flex flex-col gap-4">
          {[
            "/cards/p1.png",
            "/cards/p2.png",
            "/cards/p3.png",
            "/cards/p4.png",
          ].map((src, index) => (
            <div
              key={index}
              className="w-16 h-16 rounded-lg cursor-pointer overflow-hidden  bg-[#f9f1e7]"
            >
              <Image
                src={src}
                alt={`Thumbnail-${index}`}
                width={64}
                height={64}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center bg-[#f9f1e7] rounded-lg overflow-hidden py-10">
          <Image src="/cards/main.png" alt="Product" width={450} height={450} />
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="flex-1 font-poppins">
        <h1 className="text-40px text-black font-normal">Asgaard sofa</h1>
        <p className="text-2xl text-gray-500">Rs. 250,000.00</p>

        {/* Customer Review */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-sm text-gray-600">| 5 Customer Review</p>
        </div>

        {/* Product Description */}
        <p className="text-gray-500 text-sm mt-4 leading-relaxed">
          Setting the bar as one of the loudest speakers in its class, the album
          is a compact, stout-hearted hero with a well-balanced audio which
          boasts a clear midrange and extended highs for a sound!
        </p>

        {/* Size Selector */}
        <div className="mt-4">
          <h4 className="text-lg font-medium">Size</h4>
          <div className="flex gap-3 mt-2">
            {["L", "XL", "XS"].map((size, index) => (
              <div
                key={index}
                className="border px-4 py-2 rounded-md cursor-pointer hover:bg-primary hover:text-white transition duration-300"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div className="mt-4">
          <h4 className="text-lg font-medium">Color</h4>
          <div className="flex gap-3 mt-2">
            {["#5e3bee", "#000000", "#e7aa47"].map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        {/* Quantity and Buttons */}
        <div className="mt-6 flex items-center gap-4 border-b pb-10">
          <div className="flex border rounded-md overflow-hidden">
            <button
              className="bg-gray-200 px-3 py-1 hover:bg-gray-300"
              onClick={decrement}
            >
              <Minus size={16} />
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              className="bg-gray-200 px-3 py-1 hover:bg-gray-300"
              onClick={increment}
            >
              <Plus size={16} />
            </button>
          </div>
          <button className="border px-6 py-2 rounded-md hover:bg-gray-200 transition">
            Add To Cart
          </button>
          <button className="border px-6 py-2 rounded-md hover:bg-gray-200 transition">
            + Compare
          </button>
        </div>

        {/* SKU, Category, Tags */}
        <div className="mt-8 text-[#9F9F9F] text-sm space-y-2">
          <div className="flex">
            <span className="w-20 font-medium">SKU</span>
            <span className="mr-2">:</span>
            <span>SS001</span>
          </div>
          <div className="flex">
            <span className="w-20 font-medium">Category</span>
            <span className="mr-2">:</span>
            <span>Sofas</span>
          </div>
          <div className="flex">
            <span className="w-20 font-medium">Tags</span>
            <span className="mr-2">:</span>
            <span>Sofa, Chair, Home, Shop</span>
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex">
            <span className="w-20 text-[#9F9F9F] text-sm font-medium">
              Share
            </span>
            <span className="mr-2">:</span>
          </div>
          <div className="flex gap-4">
            {/* Replace these paths with actual social media icons */}
            <Image
              src="/f.png"
              alt="Facebook"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/i.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/t.png"
              alt="Twitter"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
