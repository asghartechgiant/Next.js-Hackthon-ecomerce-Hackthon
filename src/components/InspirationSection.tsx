import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const InspirationSection = () => {
  return (
    <section className="bg-[#fcf9f4] py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col lg:flex-row">
            <div className="flex-1 mb-6 lg:mb-0">
              <div className="flex h-full gap-4 justify-center items-start lg:items-center flex-col font-poppins">
                <h1 className="text-headColor font-bold text-3xl sm:text-4xl">
                  50+ Beautiful rooms inspiration
                </h1>
                <p className="font-medium text-base text-paraColor mb-4">
                  Our designer already made a lot of beautiful prototipe of
                  rooms that inspire you
                </p>
                <Button variant="myVariant" size="lg" asChild>
                  <Link href="/shop">Explore More</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <Image
                src="/Image.png"
                alt="Inspiration"
                width={500}
                height={500}
                className="h-auto w-full max-w-[500px] object-contain"
              />
            </div>
          </div>
          <div className="hidden sm:block lg:col-span-4">
            <Carousel className="w-full sm:max-w-[22rem] mx-auto lg:mx-0">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <Image
                            src="/slider/c1.png"
                            alt={`Carousel item ${index + 1}`}
                            width={400}
                            height={400}
                            className="rounded-sm w-full h-full object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
