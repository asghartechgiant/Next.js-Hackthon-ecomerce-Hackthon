import BreadcrumbSection from "@/components/BreadCrumbSection";
import ProductDetailInfoSection from "@/components/ProductDetailInfoSection";
import ProductDetailSection from "@/components/ProductDetailSection";
import RelatedProducts from "@/components/RelatedProducts";
import React from "react";

const ShopDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  return (
    <>
      <BreadcrumbSection />
      <ProductDetailSection />
      <ProductDetailInfoSection />
      <RelatedProducts />
    </>
  );
};

export default ShopDetail;
