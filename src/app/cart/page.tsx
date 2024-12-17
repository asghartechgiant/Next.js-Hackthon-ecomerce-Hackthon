import BreadCrumb from "@/components/BreadCrumb";
import Cart from "@/components/CartSection";
import SupportSection from "@/components/SupportSection";
import React from "react";

const CartPage = () => {
  return (
    <>
      <BreadCrumb
        backgroundImage="/banner.png"
        icon="/house.png"
        title="Cart"
        links={[
          { name: "Home", href: "/" },
          { name: "Cart", isActive: true },
        ]}
      />
      <Cart />
      <SupportSection />
    </>
  );
};

export default CartPage;
