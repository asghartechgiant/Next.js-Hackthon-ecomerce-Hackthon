import BillingForm from "@/components/BillingForm";
import BreadCrumb from "@/components/BreadCrumb";
import SupportSection from "@/components/SupportSection";
import React from "react";

const page = () => {
  return (
    <>
      <BreadCrumb
        backgroundImage="/banner.png"
        icon="/house.png"
        title="Checkout"
        links={[
          { name: "Home", href: "/" },
          { name: "Checkout", isActive: true },
        ]}
      />
      <BillingForm />
      <SupportSection />
    </>
  );
};

export default page;
