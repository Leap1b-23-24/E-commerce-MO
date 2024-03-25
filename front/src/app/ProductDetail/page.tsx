"use client";
import { ProductDetailCard } from "@/Components/ProductDetailCard";
import { useData } from "@/Components/Providers/DataProvider";
import { Stack } from "@mui/material";
import { useState } from "react";

const colors = ["#DE9034", "#E60584", "#5E37FF"];
export default function ProductDetail() {
  const { allProducts, detailId } = useData();

  const selectedProduct = allProducts.find(
    (product) => product._id == detailId
  );
  console.log(selectedProduct);
  return (
    <Stack>
      <ProductDetailCard
        productId={selectedProduct?._id}
        productImage={selectedProduct?.productImage}
        productName={selectedProduct?.productName}
        productPrice={selectedProduct?.productPrice}
        productAdditional={selectedProduct?.productAdditional}
        productColor={selectedProduct?.productColor}
        // productRating={selectedProduct.productRating}
      />
    </Stack>
  );
}
