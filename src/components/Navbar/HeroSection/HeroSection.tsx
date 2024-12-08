import Card from "@/components/Cards/Card";
import Card2 from "@/components/Cards/Card2";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="absolute-relative">
      <div>
        <Image
          src={"/hero1.png"}
          width={500}
          height={300}
          alt="work"
          className="w-full h-auto"
        />
      </div>

      <div className="bg-[#FFF3E3] border absolute right-5 bottom-7 h-[343px] w-[443px] mx-11">
        <h2 className="pt-11 px-6">New Arrival</h2>
        <h1 className="font-semibold text-5xl text-yellow-600 px-6 pt-3">
          Discover Our <br /> New Collection
        </h1>
        <p className="px-6 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B88E2F] text-white mx-6 my-6 py-3 px-8 text-sm">
          BUY NOW
        </button>
      </div>

      <h1 className="font-bold text-center pt-8 text-2xl">Browse The Range</h1>
      <p className="text-center pt-0 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex justify-center gap-6">
        {" "}
        <Card
          title="Dinnig"
          imageSrc="/Mask Group.png"
          altText="Work Example 1"
        />
        <Card title="Living" imageSrc="/Living.png" altText="Work Example 1" />
        <Card
          title="Bedroom"
          imageSrc="/bedroom.png"
          altText="Work Example 1"
        />
      </div>
      <h1 className="text-center text-2xl font-bold mt-8">Our Products</h1>

      <div className="flex justify-center px-16">
        {" "}
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
      <div className="flex justify-center my-6">
        <button className=" border border-yellow-600 px-10 py-2 text-yellow-600 ">
          Show More
        </button>
      </div>
      <div className="w-full">
        <Image
          src={"/inspirations.png"}
          width={300}
          height={300}
          alt="work"
          sizes="100"
          className="w-full h-auto object-cover my-20 "
        />
      </div>
      <div>
        <Image
          src={"/Share.png"}
          width={300}
          height={300}
          alt="work"
          className="w-full h-auto object-cover my-20"
          sizes="100"
        />
      </div>
    </div>
  );
}
