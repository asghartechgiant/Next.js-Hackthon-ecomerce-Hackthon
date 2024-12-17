"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function BillingForm() {
  return (
    <div className="container mx-auto py-20 px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Billing details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name (Optional)</Label>
                <Input id="company" placeholder="Enter company name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country / Region</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="pakistan">Pakistan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="street">Street address</Label>
                <Input id="street" placeholder="Enter street address" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Town / City</Label>
                <Input id="city" placeholder="Enter town or city" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="province">Province</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="western">Western Province</SelectItem>
                    <SelectItem value="central">Central Province</SelectItem>
                    <SelectItem value="southern">Southern Province</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="zip">ZIP code</Label>
                <Input id="zip" placeholder="Enter ZIP code" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="Enter phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional">Additional information</Label>
                <Textarea
                  id="additional"
                  placeholder="Notes about your order"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Your order</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Airpods pro × 1</span>
                  <span>Rs. 250,000.00</span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span>Subtotal</span>
                  <span>Rs. 250,000.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">Rs. 250,000.00</span>
                </div>
              </div>

              <RadioGroup defaultValue="bank-transfer" className="space-y-4">
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                  <div>
                    <Label htmlFor="bank-transfer" className="font-medium">
                      Direct Bank Transfer
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="cash" id="cash" />
                  <div>
                    <Label htmlFor="cash" className="font-medium">
                      Cash On Delivery
                    </Label>
                  </div>
                </div>
              </RadioGroup>

              <p className="text-sm text-muted-foreground">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a href="#" className="text-primary hover:underline">
                  privacy policy
                </a>
                .
              </p>

              <Button size="lg" className="w-full">
                Place order
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
