import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HomeMainSection = () => {
  return (
    <>
      <section className="hidden bg-[url('/main.png')] h-full py-20 w-full bg-cover bg-center px-20 md:flex justify-end">
        <div className="bg-[#FFF3E3] w-max p-8 pr-24 flex flex-col gap-2 items-start justify-start rounded-sm">
          <p className="text-fontColor font-poppins text-base font-semibold capitalize tracking-[3px]">
            new arrival
          </p>
          <h1 className="font-poppins text-4xl lg:text-5xl font-bold text-primary">
            Discover Our <br />
            New Collection
          </h1>
          <p className="font-poppins font-medium text-fontColor text-sm mg:text-lg mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />{" "}
            elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Button variant={"myVariant"} size={"lg"}>
            <Link href={"/shop"}>buy now</Link>
          </Button>
        </div>
      </section>
      <section className="md:hidden grid grid-cols-1">
        <div className="bg-[#FFF3E3] w-full p-8 pr-10 flex flex-col gap-2 items-start justify-start rounded-sm">
          <p className="text-fontColor font-poppins text-base font-semibold capitalize tracking-[3px]">
            new arrival
          </p>
          <h1 className="font-poppins text-3xl sm:text-5xl font-bold text-primary">
            Discover Our <br />
            New Collection
          </h1>
          <p className="font-poppins font-medium text-fontColor text-lg mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />{" "}
            elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Button variant={"myVariant"} size={"lg"}>
            <Link href={"/shop"}>buy now</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomeMainSection;
