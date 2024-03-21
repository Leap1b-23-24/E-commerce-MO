"use client";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { FeaturedProductCard } from "./FeaturedProductCard";
import { useData } from "./Providers/DataProvider";
import { useState } from "react";
const step = [1, 2, 3, 4];
export const FeaturedProducts = () => {
  const { allProducts } = useData();
  const [selectedStep, setSelectedStep] = useState(1);
  return (
    <Container maxWidth="lg">
      <Stack
        gap={"39px"}
        mt={"129px"}
        mb={"71px"}
        alignItems={"center"}
        // overflow={"hidden"}
      >
        <Typography fontSize={42} fontWeight={800} color={"#1A0B5B"}>
          Онцлох бүтээгдэхүүн
        </Typography>
        <Stack
          sx={{ width: "200%" }}
          flexDirection={"row"}
          justifyContent={"space-around"}
        >
          {allProducts.map((item, index) => (
            <Stack key={index} width={"270px"} height={"361px"}>
              <FeaturedProductCard
                productName={item.productName}
                productImage={item.productImage[0]}
                productPrice={item.productPrice}
              />
            </Stack>
          ))}
        </Stack>
        <Stack flexDirection={"row"} gap={"6px"}>
          {step.map((item, index) => (
            <Stack
              onClick={() => {
                setSelectedStep(item);
              }}
              key={index}
              width={selectedStep == item ? 24 : 16}
              height={4}
              bgcolor={selectedStep == item ? "#FB2E86" : "#FEBAD7"}
              borderRadius={"10px"}
              sx={{ cursor: "pointer", transition: "0.3s linear" }}
            ></Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};
