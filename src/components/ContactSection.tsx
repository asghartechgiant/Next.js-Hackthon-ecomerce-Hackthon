"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-2">Get in Touch With Us</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          For those interested in our products & services, kindly email us or
          fill in the form below & we will get back to you as soon as possible
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 mt-1 text-primary" />
            <div>
              <h3 className="font-semibold mb-1">Address</h3>
              <p className="text-muted-foreground">
                205 SOHO Avenue West
                <br />
                New SOHO, Israel
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 mt-1 text-primary" />
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-muted-foreground">
                Mobile: (+91) 9845-9845
                <br />
                Mobile: (+91) 9845-9789
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 mt-1 text-primary" />
            <div>
              <h3 className="font-semibold mb-1">Working Time</h3>
              <p className="text-muted-foreground">
                Monday-Friday: 9AM - 6PM
                <br />
                Saturday-Sunday: 9AM - 2PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <Input type="text" placeholder="Your name" className="bg-white" />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email address"
              className="bg-white"
            />
          </div>
          <div>
            <Input type="text" placeholder="Subject" className="bg-white" />
          </div>
          <div>
            <Textarea
              placeholder="Write your message here..."
              className="min-h-[120px] bg-white"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#B68C5A] hover:bg-[#9d7a4e] text-white"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
