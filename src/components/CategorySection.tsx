import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategorySection = () => {
  return (
    <section className="font-poppins px-10">
      <div className="my-8">
        <h2 className="text-center font-bold text-3xl">Browse The Range</h2>
        <p className="text-center text-paraColor text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Link href="/">
          <Image src={"/c1.png"} alt="c1" width={500} height={600} />
          <h3 className="text-center my-4 text-2xl font-semibold hover:underline">
            Dining
          </h3>
        </Link>
        <Link href="/">
          <Image src={"/c1.png"} alt="c1" width={500} height={600} />
          <h3 className="text-center my-4 text-2xl font-semibold hover:underline">
            Living
          </h3>
        </Link>
        <Link href="/">
          <Image src={"/c1.png"} alt="c1" width={500} height={600} />
          <h3 className="text-center my-4 text-2xl font-semibold hover:underline">
            Bedroom
          </h3>
        </Link>
      </div>
    </section>
  );
};

export default CategorySection;
