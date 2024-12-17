import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-10 border-t border-[#d4d4d4] bg-gray-50 text-black font-poppins py-8">
      <div className="px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="pr-20">
          <h1 className="text-2xl font-bold mb-8">Funiro.</h1>
          <p className="text-base text-lightColor">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>

        {/* Center Links */}
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium text-base mb-8 text-lightColor ">
              Links
            </h3>
            <ul className="space-y-6">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base mb-8 text-lightColor">Help</h3>
            <ul className="space-y-6">
              <li>
                <Link href={"/"}>Payment Options</Link>
              </li>
              <li>
                <Link href={"/"}>Returns</Link>
              </li>
              <li>
                <Link href={"/"}>Privacy Policies</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Newsletter */}
        <div className="pr-20">
          <h3 className="font-medium text-base mb-10 text-lightColor">
            Newsletter
          </h3>
          <div className="flex ">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full bg-transparent outline-none text-sm border-b-2 border-black placeholder:text-lightColor"
            />
            <button className="text-sm font-semibold ml-4 border-b-2 border-black">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-left text-base text-black">
        © 2023 Funiro. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
