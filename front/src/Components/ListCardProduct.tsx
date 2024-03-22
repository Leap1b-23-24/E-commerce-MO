"use client";
import {
  Favorite,
  FavoriteBorder,
  Height,
  ShoppingCartOutlined,
  ZoomIn,
} from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useData } from "./Providers/DataProvider";
import { useState } from "react";

type ListCardProductProps = {
  productImage: string[];
  productName: string;
  productColor: string[];
  productPrice: number;
  productAdditional: string;
  productId: string;
};
export const ListCardProduct = (props: ListCardProductProps) => {
  const {
    productImage,
    productName,
    productColor,
    productPrice,
    productAdditional,
    productId,
  } = props;
  const { updateReaction } = useData();
  const [fav, setFav] = useState(false);
  return (
    <Stack width={1} flexDirection={"row"}>
      <Stack width={1 / 4} sx={{ aspectRatio: 1 / 1 }} position={"relative"}>
        <Image alt="card image" fill src={productImage[0]} />
      </Stack>
      <Stack width={3 / 4} justifyContent={"space-between"} p={2}>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Stack flexDirection={"row"} gap={2}>
            <Typography color={"#151875"} fontSize={18} fontWeight={700}>
              {productName}
            </Typography>
            <Stack flexDirection={"row"} alignItems={"center"} gap={"6px"}>
              {productColor.map((item, index) => (
                <Stack
                  key={index}
                  p={"5px"}
                  sx={{ height: "fit-content" }}
                  borderRadius={"50%"}
                  bgcolor={item}
                ></Stack>
              ))}
            </Stack>
          </Stack>
          <Stack flexDirection={"row"} gap={2}>
            <Typography fontSize={21} fontWeight={400} color={"#151875"}>
              {productPrice}
            </Typography>
            <>Rating</>
          </Stack>
          <Typography fontSize={17.67} fontWeight={400} color={"#9295AA"}>
            {productAdditional}
          </Typography>
        </Box>
        <Stack
          width={1}
          height={1}
          bgcolor={"#00000000"}
          justifyContent={"space-between"}
          zIndex={1}
        >
          <Stack
            height={1}
            flexDirection={"row"}
            gap={2}
            p={"11px"}
            alignItems={"end"}
          >
            <Stack
              width={30}
              height={30}
              bgcolor={"#0000000D"}
              color={"primary.main"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
            >
              <ShoppingCartOutlined fontSize="inherit" color="inherit" />
            </Stack>
            <Stack
              onClick={() => {
                updateReaction(productId);
                setFav(true);
              }}
              width={30}
              height={30}
              bgcolor={"#ffffff99"}
              borderRadius={"50%"}
              color={fav ? "#e31b23" : "#1389ff"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
            >
              {fav ? (
                <Favorite fontSize="inherit" color="inherit" />
              ) : (
                <FavoriteBorder fontSize="inherit" color="inherit" />
              )}
            </Stack>
            <Stack
              width={30}
              height={30}
              bgcolor={"#ffffff99"}
              borderRadius={"50%"}
              color={"#1389ff"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
            >
              <ZoomIn fontSize="inherit" color="inherit" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
