import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex justify-between px-10 items-center py-4 font-poppins text-base font-medium">
      <div>
        <Image src={"/logo.png"} alt="Logo" width={200} height={45} />
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-8">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-4 lg:gap-8">
          <li className="cursor-pointer">
            <User className="h-[18px] w-[18px] lg:h-[28px] lg:w-[28px]" />
          </li>
          <li className="cursor-pointer">
            <Search className="h-[18px] w-[18px] lg:h-[28px] lg:w-[28px]" />
          </li>
          <li className="cursor-pointer">
            <Heart className="h-[18px] w-[18px] lg:h-[28px] lg:w-[28px]" />
          </li>
          <li className="cursor-pointer">
            <Link href={"/cart"}>
              <ShoppingCart className="h-[18px] w-[18px] lg:h-[28px] lg:w-[28px]" />{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col justify-center gap-8">
                  <li>
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"/shop"}>Shop</Link>
                  </li>
                  <li>
                    <Link href={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link href={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
