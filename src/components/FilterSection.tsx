"use client";

import React, { useState } from "react";
import { SlidersHorizontal, List, Grid } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterSection = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <section className="bg-[#f9f0e7] py-4 px-4 sm:px-6 lg:px-10 text-black text-sm font-poppins">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex flex-wrap items-center gap-4 text-lg justify-center">
          <div
            className="flex items-center gap-2 cursor-pointer hover:text-black"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal size={24} />
            <span className="sm:inline hidden">Filter</span>
          </div>
          <div className="flex items-center gap-4">
            <Grid size={24} className="cursor-pointer hover:text-black" />
            <List size={24} className="cursor-pointer hover:text-black" />
          </div>
          <div className="hidden sm:block">|</div>
          <p className="hidden sm:block">Showing 1 - 16 of 32 results</p>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-base sm:text-xl">Show</span>
            <Select defaultValue="16">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Show" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8">8</SelectItem>
                <SelectItem value="16">16</SelectItem>
                <SelectItem value="32">32</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-base sm:text-xl">Sort by</span>
            <Select defaultValue="Default">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Default">Default</SelectItem>
                <SelectItem value="Price Low to High">
                  Price: Low to High
                </SelectItem>
                <SelectItem value="Price High to Low">
                  Price: High to Low
                </SelectItem>
                <SelectItem value="Newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Filter dropdown (you can add your filter content here) */}
      {isFilterOpen && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          {/* Add your filter options here */}
          <p>Filter options go here</p>
        </div>
      )}
    </section>
  );
};

export default FilterSection;
