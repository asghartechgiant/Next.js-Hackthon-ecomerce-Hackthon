import Card from "@/components/Cards/Card";
import Card2 from "@/components/Cards/Card2";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Hero Image Section */}
      <div>
        <Image
          src={"/hero1.png"}
          width={500}
          height={300}
          alt="work"
          className="w-full h-auto"
        />
      </div>

      {/* Content Section with Background */}
      <div className="bg-[#FFF3E3] border absolute right-5 bottom-7 h-[343px] w-[90%] md:w-[443px] mx-5 md:mx-11 p-6 md:p-8">
        <h2 className="pt-6 md:pt-11 text-lg md:text-xl">New Arrival</h2>
        <h1 className="font-semibold text-3xl md:text-5xl text-yellow-600 pt-3">
          Discover Our <br /> New Collection
        </h1>
        <p className="py-3 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B88E2F] text-white py-3 px-8 text-sm md:text-base mt-4">
          BUY NOW
        </button>
      </div>

      {/* Browse The Range */}
      <h1 className="font-bold text-center pt-8 text-xl md:text-2xl">
        Browse The Range
      </h1>
      <p className="text-center text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Cards for Categories */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <Card
          title="Dinning"
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

      {/* Our Products Section */}
      <h1 className="text-center text-2xl font-bold mt-8">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-16 mt-6">
        <Card2
          title="Syltherine"
          imageSrc="/img.png"
          altText="work"
          paragraph="Stylish cafe chair"
          price={"Rp 25.00.000"}
        />
        <Card2
          title="Respira"
          imageSrc="/img2.png"
          altText="work"
          paragraph="Outdoor bar table and stool"
          price={"Rp 500.000"}
        />
        <Card2
          title="Lolito"
          imageSrc="/image 3.png"
          altText="work"
          paragraph="Luxury big sofa"
          price={"Rp 7.000.000"}
        />
        <Card2
          title="Respira"
          imageSrc="/img2.png"
          altText="work"
          paragraph="Outdoor bar table and stool"
          price={"Rp 500.000"}
        />
      </div>

      {/* Show More Button */}
      <div className="flex justify-center my-6">
        <button className="border border-yellow-600 px-10 py-2 text-yellow-600 text-sm md:text-base">
          Show More
        </button>
      </div>

      {/* Inspiration Section */}
      <div className="w-full my-20">
        <Image
          src={"/inspirations.png"}
          width={500}
          height={300}
          alt="work"
          sizes="100%"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Share Section */}
      <div className="w-full my-20">
        <Image
          src={"/Share.png"}
          width={500}
          height={300}
          alt="work"
          sizes="100%"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
