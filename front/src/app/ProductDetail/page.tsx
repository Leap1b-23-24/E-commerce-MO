"use client";
import { ProductDetailCard } from "@/Components/ProductDetailCard";
import { useData } from "@/Components/Providers/DataProvider";
import { Stack } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { api } from "../common/axios";
import { useAuth } from "@/Components/Providers/AuthProvider";
import { useRouter } from "next/navigation";

type userType = {
  userName: string;
  email: string;
  merchName: string;
  address: { city: string; district: string; khoroo: string };
  experience: string;
  merchType: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};
type CommentType = {
  userId: userType;
  productId: string;
  comment: string;
  star: number;
  createdAt: Date;
  updatedAt: Date;
};

type ProductDetailProps = {
  allComments: CommentType[];
  setAllComments: Dispatch<SetStateAction<CommentType[]>>;
};
const detailId = localStorage.getItem("detailId");
export default function ProductDetail(props: ProductDetailProps) {
  const { allProducts, detailId } = useData();
  const { setRefresh, refresh } = useAuth();
  const [allComments, setAllComments] = useState<CommentType[]>([]);
  const router = useRouter();
  const selectedProduct = allProducts.find(
    (product) => product._id == detailId
  );
  const getAllComments = async () => {
    try {
      const { data } = await api.get("comment/getAllComments");
      setAllComments(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };
  const selectedProductComments = allComments.filter(
    (comment) => comment.productId == detailId
  );

  useEffect(() => {
    getAllComments();
  }, [refresh]);
  if (!detailId) {
    router.push("/");
  }
  return (
    <Stack>
      <ProductDetailCard
        productId={selectedProduct?._id}
        productImage={selectedProduct?.productImage}
        productName={selectedProduct?.productName}
        productPrice={selectedProduct?.productPrice}
        productAdditional={selectedProduct?.productAdditional}
        productColor={selectedProduct?.productColor}
        productRating={selectedProduct?.avgStars}
        reviewCount={selectedProduct?.reviewCount}
        comments={selectedProductComments}
      />
    </Stack>
  );
}
