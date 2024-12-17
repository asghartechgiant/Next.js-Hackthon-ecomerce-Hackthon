import { ArrowRightLeft, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface IProductData {
  title: string;
  desc: string;
  price?: string;
  curPrice: string;
  discount?: string;
  isNew?: boolean;
  image: string;
}

const Card = ({
  title,
  desc,
  price,
  curPrice,
  discount,
  isNew,
  image,
}: IProductData) => {
  return (
    <div className="font-poppins relative group overflow-hidden">
      {/* Product Image */}
      <Link href={"/shop"}>
        <Image
          src={image}
          alt={image}
          width={300}
          height={250}
          className="w-full"
        />
      </Link>

      {/* Discount or New Badge */}
      <div
        className={`absolute top-4 right-4 ${discount && "bg-red-400"} ${
          isNew && "bg-[#2EC1AC]"
        } text-white h-[48px] w-[48px] cursor-pointer rounded-full flex justify-center items-center`}
      >
        {discount && discount}
        {isNew && "New"}
      </div>

      {/* Overlay on hover */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col gap-4 items-center justify-center cursor-pointer">
        <button className="bg-white text-primary px-12 font-semibold py-4">
          <Link href={"/cart"}>Add To Cart</Link>
        </button>
        <button className="bg-white text-primary px-12 font-semibold py-4">
          <Link href={`/shop/${title}`}>View Details</Link>
        </button>
        <div className="flex gap-2 font-poppins text-white text-base font-semibold items-center justify-center">
          <span className="flex  items-center justify-center gap-2 cursor-pointer">
            <Share2 />
            Share
          </span>
          <span className="flex  items-center justify-center gap-2 cursor-pointer">
            <ArrowRightLeft />
            Compare
          </span>
          <span className="flex  items-center justify-center gap-2 cursor-pointer">
            <Heart />
            Like
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 bg-[#f4f5f7]">
        <h2 className="text-xl font-semibold text-headColor">{title}</h2>
        <p className="text-base text-paraColor">{desc}</p>
        {price && curPrice ? (
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-black">
              Rp: {curPrice}
            </span>
            <span className="line-through text-lightColor text-base">
              Rp: {price}
            </span>
          </div>
        ) : (
          <span className="text-xl font-semibold text-black">
            Rp: {curPrice}
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
