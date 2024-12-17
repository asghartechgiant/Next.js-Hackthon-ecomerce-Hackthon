import { ChevronRight } from "lucide-react";
import Link from "next/link";

// components/Breadcrumb.tsx
export default function BreadcrumbSection() {
  return (
    <div className="bg-[#f9f0e7] py-6 px-10">
      <div className="flex items-center text-sm text-gray-400">
        <Link href="/" className="hover:text-gray-600 text-base">
          Home
        </Link>
        <span className="mx-2 text-black font-bold">
          {" "}
          <ChevronRight />{" "}
        </span>
        <Link href="/shop" className="hover:text-gray-600  text-base">
          Shop
        </Link>
        <span className="mx-2 text-black font-bold">
          {" "}
          <ChevronRight />{" "}
        </span>
        <span className="text-gray-800 font-medium text-base">
          Asgaard sofa
        </span>
      </div>
    </div>
  );
}
