import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Section - Logo and Address */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Furniro.</h1>
          <p className="text-gray-600 mt-20">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="font-bold text-[#9F9F9F] mb-4 ">Links</h3>
          <ul className="space-y-16 mt-20">
            <li className="text-black font-bold hover:text-gray-800 cursor-pointer">
              Home
            </li>
            <li className="text-black font-bold hover:text-gray-800 cursor-pointer">
              Shop
            </li>
            <li className="text-black font-bold hover:text-gray-800 cursor-pointer">
              About
            </li>
            <li className="text-black font-bold hover:text-gray-800 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-bold text-[#9F9F9F] mb-4">Help</h3>
          <ul className="space-y-16 mt-20">
            <li className="text-black font-bold hover:text-gray-800 cursor-pointer">
              Payment Options
            </li>
            <li className="text-black font-bold hover:text-gray-800 cursor-pointer">
              Returns
            </li>
            <li className="text-black font-bold hover:text-gray-800 cursor-pointer">
              Privacy Policies
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold text-[#9F9F9F] mb-4">Newsletter</h3>
          <div className="flex items-center py-2 mt-16">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full text-sm text-gray-700 placeholder-gray-500 focus:outline-none border-b border-black "
            />
            <button className="ml-2 px-4 py-2 text-black hover:bg-gray-600 text-sm font-bold border-b border-black  ">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 text-start text-sm text-gray-600 border-t-2 w-full py-6">
        © 2023 Furniro. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
