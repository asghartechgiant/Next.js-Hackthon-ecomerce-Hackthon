// components/CheckOut.js
import Image from "next/image";
import React from "react";

export default function CheckOut() {
  return (
    <>
      <Image
        src={"/ss.png"}
        alt="
    ss"
        height={300}
        width={900}
        className="w-full object-cover"
      />
      <div className="flex flex-col md:flex-row justify-between p-8">
        {/* Billing Details Form */}
        <div className="w-full md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-semibold mb-4">Billing details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-lg p-2 w-full"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-lg p-2 w-full"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Company name (Optional)"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            <select
              className="border border-gray-300 rounded-lg p-2 w-full"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
            </select>
            <input
              type="text"
              placeholder="Street address"
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
            <input
              type="text"
              placeholder="Town / City"
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
            <input
              type="text"
              placeholder="Province"
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
            <input
              type="text"
              placeholder="ZIP code"
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
            <textarea
              placeholder="Additional information"
              className="border border-gray-300 rounded-lg p-2 w-full"
              rows="3"
            ></textarea>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <div className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Product</span>
                <span>Rs. 250,000</span>
              </li>
              <li className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. 250,000</span>
              </li>
              <li className="flex justify-between font-semibold text-xl">
                <span>Total</span>
                <span>Rs. 250,000</span>
              </li>
            </ul>

            <div className="mt-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  className="border-gray-300"
                  required
                />
                <span>Direct Bank Transfer</span>
              </label>
              <p className="text-sm text-gray-600 ml-6">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <label className="flex items-center space-x-2 mt-2">
                <input
                  type="radio"
                  name="payment"
                  className="border-gray-300"
                  required
                />
                <span>Cash on Delivery</span>
              </label>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our
              <a href="#" className="text-blue-500">
                {" "}
                privacy policy
              </a>
              .
            </p>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-lg mt-4"
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
