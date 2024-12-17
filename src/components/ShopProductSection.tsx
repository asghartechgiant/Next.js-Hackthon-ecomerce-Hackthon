import React from "react";
import Card from "./Card";

const ShopProductSection = () => {
  return (
    <section className="px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            desc={card.desc}
            price={card.price}
            curPrice={card.curPrice}
            discount={card.discount}
            isNew={card.isNew}
            image={card.image}
          />
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export const Pagination = () => {
  const pages = ["1", "2", "3", "Next"];

  return (
    <div className="flex gap-6 justify-center my-10">
      {pages.map((page, index) => (
        <div
          key={index}
          className="bg-[#f9f1e7] text-black hover:text-white hover:bg-primary transition duration-300 cursor-pointer flex justify-center items-center py-3 rounded px-6"
        >
          {page}
        </div>
      ))}
    </div>
  );
};

const cardData = [
  {
    title: "Syltherine",
    desc: "Stylish cafe chair",
    price: "3.500.000",
    curPrice: "2.500.000",
    discount: "-32%",
    image: "/cards/c1.png",
  },
  {
    title: "Leviosa",
    desc: "Stylish cafe chair",
    curPrice: "2.500.000",
    image: "/cards/c2.png",
  },
  {
    title: "Lolito",
    desc: "Luxury big sofa",
    price: "14.000.000",
    curPrice: "7.000.000",
    discount: "-32%",
    image: "/cards/c3.png",
  },
  {
    title: "Respira",
    desc: "Outdoor bar table and stool",
    isNew: true,
    curPrice: "500.000",
    image: "/cards/c4.png",
  },
  {
    title: "Syltherine",
    desc: "Stylish cafe chair",
    price: "3.500.000",
    curPrice: "2.500.000",
    discount: "-32%",
    image: "/cards/c1.png",
  },
  {
    title: "Leviosa",
    desc: "Stylish cafe chair",
    curPrice: "2.500.000",
    image: "/cards/c2.png",
  },
  {
    title: "Lolito",
    desc: "Luxury big sofa",
    price: "14.000.000",
    curPrice: "7.000.000",
    discount: "-32%",
    image: "/cards/c3.png",
  },
  {
    title: "Respira",
    desc: "Outdoor bar table and stool",
    isNew: true,
    curPrice: "500.000",
    image: "/cards/c4.png",
  },
  {
    title: "Syltherine",
    desc: "Stylish cafe chair",
    price: "3.500.000",
    curPrice: "2.500.000",
    discount: "-32%",
    image: "/cards/c1.png",
  },
  {
    title: "Leviosa",
    desc: "Stylish cafe chair",
    curPrice: "2.500.000",
    image: "/cards/c2.png",
  },
  {
    title: "Lolito",
    desc: "Luxury big sofa",
    price: "14.000.000",
    curPrice: "7.000.000",
    discount: "-32%",
    image: "/cards/c3.png",
  },
  {
    title: "Respira",
    desc: "Outdoor bar table and stool",
    isNew: true,
    curPrice: "500.000",
    image: "/cards/c4.png",
  },
];
export default ShopProductSection;
