import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";

const ProductDetailInfoSection = () => {
  return (
    <>
      <Tabs defaultValue="description" className="max-w-[900px] mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="information">Additional Information</TabsTrigger>
          <TabsTrigger value="reviews">Reviews [5]</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <p className="text-[#9F9F9F] font-base font-poppins mb-10">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[#9F9F9F] font-base font-poppins mb-10">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </TabsContent>
        <TabsContent value="information">
          <p className="text-[#9F9F9F] font-base font-poppins mb-10">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the
            road.Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[#9F9F9F] font-base font-poppins mb-10">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </TabsContent>
        <TabsContent value="reviews">
          <p className="text-[#9F9F9F] font-base font-poppins mb-10">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the
            road.Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[#9F9F9F] font-base font-poppins mb-10">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.Weighing in under 7 pounds, the
            Kilburn is a lightweight piece of vintage styled engineering.
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound that is
            both articulate and pronounced. The analogue knobs allow you to fine
            tune the controls to your personal preferences while the
            guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </TabsContent>
      </Tabs>
      <div className="px-10 grid grid-cols-2 gap-8 my-10 border-b pb-10">
        <Image
          src={"/s1.png"}
          alt="s1"
          height={400}
          width={600}
          className="cursor-pointer"
        />
        <Image
          src={"/s2.png"}
          alt="s2"
          height={400}
          width={600}
          className="cursor-pointer"
        />
      </div>
    </>
  );
};

export default ProductDetailInfoSection;
