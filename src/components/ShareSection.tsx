import Image from "next/image";
import React from "react";

const ShareSection = () => {
  return (
    <section>
      <div className="flex flex-col items-center mt-8 mb-[-20px]">
        <p className="font-semibold text-xl text-paraColor">
          Share your setup with
        </p>
        <h3 className="font-bold text-2xl sm:text-40px text-headColor">
          #FuniroFurniture
        </h3>
      </div>
      <Image
        src={"/Images.png"}
        alt="Images"
        height={400}
        width={1400}
        sizes="100"
      />
    </section>
  );
};

export default ShareSection;
