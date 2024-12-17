"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";

export default function Cart() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section - Cart Items */}
        <div className="w-full lg:w-2/3">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">Product</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Subtotal</TableHead>
                  <TableHead className="text-center">Delete</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/s.png"
                        alt="Asgaard sofa"
                        width={64}
                        height={64}
                        className="rounded object-cover"
                      />
                      <span className="hidden sm:inline">Asgaard sofa</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">Rs. 250,000.00</TableCell>
                  <TableCell className="text-center">
                    <Input
                      type="number"
                      defaultValue="1"
                      className="w-16 text-center mx-auto"
                    />
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    Rs. 250,000.00
                  </TableCell>
                  <TableCell className="text-center">
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Right Section - Cart Totals */}
        <div className="w-full lg:w-1/3">
          <div className="bg-[#f9f0e7] p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-600">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600 font-semibold">Total</span>
              <span className="text-primary font-bold">Rs. 250,000.00</span>
            </div>
            <div className="mt-6 text-center">
              <Button asChild className="w-full sm:w-auto">
                <Link href="/check-out">Check Out</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
