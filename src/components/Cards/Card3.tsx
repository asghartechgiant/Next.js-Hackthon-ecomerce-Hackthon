import Image from "next/image";
import { BsGridFill } from "react-icons/bs";
import { IoFilterOutline } from "react-icons/io5";
import Card2 from "./Card2";

export default function Card3() {
  return (
    <div className="relative my-20">
      {/* Background Image Section */}
      <Image
        src="/Rectangle2.png"
        width={300}
        height={400}
        alt="Background"
        sizes="100"
        className="w-full h-auto object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute top-10 left bg-white bg-opacity-80 p-4 rounded-md shadow-md">
        {/* Logo Section */}
        <div className="flex  items-center space-x-2">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="Logo"
            sizes="100"
            className="object-cover"
          />
        </div>

        {/* Breadcrumb Section */}
        <div className="mt-4 text-sm text-gray-600">
          <ul className="flex space-x-2">
            <li>
              <span className="hover:underline cursor-pointer">Home</span>
            </li>
            <li>
              <span className="text-gray-500">›</span>
            </li>
            <li>
              <span className="font-medium">Cart</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 1234455566 */}
      {/* Filter Section */}
      <div className="bg-[#F9F1E7] p-10 flex justify-between items-center">
        {/* Left Section: Filters */}
        <ul className="flex items-center gap-5">
          {/* Filter Icon */}
          <li className="flex items-center gap-1">
            <IoFilterOutline />
            <span>Filters</span>
          </li>
          {/* Grid View Icon */}
          <li>
            <BsGridFill />
          </li>
          {/* Custom Icon */}
          <li>
            <Image src="/icon.png" width={20} height={20} alt="icon" />
          </li>
          {/* Divider */}
          <li className="border-r-2 border-gray-500 mx-5"></li>
          {/* Result Count */}
          <li>Showing 1–16 of 32 results</li>
        </ul>

        {/* Right Section: Sorting */}
        <div className="flex items-center gap-4">
          <span>Show</span>
          <button className="px-3 py-1 bg-white rounded hover:bg-gray-300">
            16
          </button>
          <span>Sort by</span>
          <button className="px-3 py-1 bg-white rounded hover:bg-gray-300">
            Default
          </button>
        </div>
      </div>
      <div className="flex mx-6">
        <Card2
          title="Syltherine"
          imageSrc="/img.png"
          altText="work"
          paragraph="Stylish cafe chair"
          price={"Rp 25.00.000"}
        ></Card2>
        <Card2
          title="Respira"
          imageSrc="/img2.png"
          altText="work"
          paragraph="Outdoor bar table and stool"
          price={"Rp 500.000"}
        ></Card2>
        <Card2
          title="Lolito"
          imageSrc="/image 3.png"
          altText="work"
          paragraph="Luxury big sofa"
          price={"Rp 7.000.000"}
        ></Card2>
        <Card2
          title="Respira"
          imageSrc="/img2.png"
          altText="work"
          paragraph="Outdoor bar table and stool"
          price={"Rp 500.000"}
        ></Card2>
      </div>
      <div className="flex mx-6">
        <Card2
          title="Syltherine"
          imageSrc="/img.png"
          altText="work"
          paragraph="Stylish cafe chair"
          price={"Rp 25.00.000"}
        ></Card2>
        <Card2
          title="Respira"
          imageSrc="/img2.png"
          altText="work"
          paragraph="Outdoor bar table and stool"
          price={"Rp 500.000"}
        ></Card2>
        <Card2
          title="Lolito"
          imageSrc="/image 3.png"
          altText="work"
          paragraph="Luxury big sofa"
          price={"Rp 7.000.000"}
        ></Card2>
        <Card2
          title="Respira"
          imageSrc="/img2.png"
          altText="work"
          paragraph="Outdoor bar table and stool"
          price={"Rp 500.000"}
        ></Card2>
      </div>
      <div className="flex mx-6">
        <Card2
          title="Syltherine"
          imageSrc="/img.png"
          altText="work"
          paragraph="Stylish cafe chair"
          price={"Rp 25.00.000"}
        ></Card2>
        <Card2
          title="Respira"
          imageSrc="/img2.png"
          altText="work"
          paragraph="Outdoor bar table and stool"
          price={"Rp 500.000"}
        ></Card2>
        <Card2
          title="Lolito"
          imageSrc="/image 3.png"
          altText="work"
          paragraph="Luxury big sofa"
          price={"Rp 7.000.000"}
        ></Card2>
        <Card2
          title="Respira"
          imageSrc="/img2.png"
          altText="work"
          paragraph="Outdoor bar table and stool"
          price={"Rp 500.000"}
        ></Card2>
      </div>
      <div className="flex mx-6">
        <Card2
          title="Syltherine"
          imageSrc="/img.png"
          altText="work"
          paragraph="Stylish cafe chair"
          price={"Rp 25.00.000"}
        ></Card2>
        <Card2
          title="Respira"
          imageSrc="/img2.png"
          altText="work"
          paragraph="Outdoor bar table and stool"
          price={"Rp 500.000"}
        ></Card2>
        <Card2
          title="Lolito"
          imageSrc="/image 3.png"
          altText="work"
          paragraph="Luxury big sofa"
          price={"Rp 7.000.000"}
        ></Card2>
        <Card2
          title="Respira"
          imageSrc="/img2.png"
          altText="work"
          paragraph="Outdoor bar table and stool"
          price={"Rp 500.000"}
        ></Card2>
      </div>
      <div className="flex items-center justify-center space-x-4 my-16 ">
        {/* Page 1 */}
        <button className="w-10 h-10 bg-[#B08540] text-white font-medium rounded-lg flex items-center justify-center hover:bg-[#B08540]">
          1
        </button>

        {/* Page 2 */}
        <button className="w-10 h-10 bg-[#F9F1E7] text-gray-500 font-medium rounded-lg flex items-center justify-center hover:bg-[#B08540]">
          2
        </button>

        {/* Page 3 */}
        <button className="w-10 h-10 bg-[#F9F1E7] text-gray-500 font-medium rounded-lg flex items-center justify-center hover:bg-[#B08540]">
          3
        </button>

        {/* Next Button */}
        <button className="px-4 h-10 bg-[#F9F1E7] text-gray-500 font-medium rounded-lg flex items-center justify-center hover:bg-[#B08540]">
          Next
        </button>
      </div>
    </div>
  );
}
