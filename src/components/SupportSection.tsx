import Image from "next/image";
import React from "react";

const supportData = [
  {
    image: "/i1.png",
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    image: "/i2.png",
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    image: "/i3.png",
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    image: "/i4.png",
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const SupportSection = () => {
  return (
    <section className="bg-[#faf3e9] py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4">
        {supportData.map((item, index) => (
          <div key={index} className="flex gap-4 items-center">
            <div className="flex-shrink-0">
              <Image src={item.image} alt={item.title} height={60} width={60} />
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-lg sm:text-xl lg:text-2xl">
                {item.title}
              </h3>
              <p className="font-poppins font-medium text-base sm:text-lg lg:text-xl text-[#898989]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportSection;
