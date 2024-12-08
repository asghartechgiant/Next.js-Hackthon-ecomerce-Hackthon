"use client";

import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { usePathname } from "next/navigation"; // Import the usePathname hook

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname

  // Function to check if the current path is active
  const isActive = (link: string) => pathname === link;

  return (
    <div className="navbar flex justify-between items-center px-10 py-6 mx-5">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image
          src={"/logo.png"}
          width={50}
          height={41}
          alt="Picture of the author"
        />
        <h1 className="font-bold text-lg">Furniro</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex justify-center">
        <ul className="flex space-x-8 text-gray-800 font-medium">
          <Link href={"/"}>
            <li
              className={`cursor-pointer ${
                isActive("/") ? "text-yellow-500" : "hover:text-yellow-500"
              }`}
            >
              Home
            </li>
          </Link>
          <Link href={"/shop"}>
            <li
              className={`cursor-pointer ${
                isActive("/shop") ? "text-yellow-500" : "hover:text-yellow-500"
              }`}
            >
              Shop
            </li>
          </Link>
          <Link href={"/blog"}>
            <li
              className={`cursor-pointer ${
                isActive("/blog") ? "text-yellow-500" : "hover:text-yellow-500"
              }`}
            >
              Blog
            </li>
          </Link>
          <Link href={"/contact"}>
            <li
              className={`cursor-pointer ${
                isActive("/contact")
                  ? "text-yellow-500"
                  : "hover:text-yellow-500"
              }`}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-6 text-2xl text-gray-800">
        <button aria-label="Account">
          <MdPersonOutline className="hover:text-yellow-500 cursor-pointer" />
        </button>
        <button aria-label="Search">
          <CiSearch className="hover:text-yellow-500 cursor-pointer" />
        </button>
        <button aria-label="Wishlist">
          <GoHeart className="hover:text-yellow-500 cursor-pointer" />
        </button>
        <button aria-label="Cart">
          <AiOutlineShoppingCart className="hover:text-yellow-500 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
