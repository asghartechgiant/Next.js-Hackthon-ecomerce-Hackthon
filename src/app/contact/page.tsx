import BreadCrumb from "@/components/BreadCrumb";
import ContactSection from "@/components/ContactSection";
import SupportSection from "@/components/SupportSection";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <BreadCrumb
        backgroundImage="/banner.png"
        icon="/house.png"
        title="Contact"
        links={[
          { name: "Home", href: "/" },
          { name: "Contact", isActive: true },
        ]}
      />
      <ContactSection />
      <SupportSection />
    </>
  );
};

export default ContactPage;
