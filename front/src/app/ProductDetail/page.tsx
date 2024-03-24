"use client";
import { useData } from "@/Components/Providers/DataProvider";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
type ProductDetailProps = {
  productImage: string[];
  productName: string;
  productPrice: number;
  productAdditional: string;
  productColor: string[];
  productRating: number;
};
const colors = ["#DE9034", "#E60584", "#5E37FF"];
export default function ProductDetail() {
  const [bigImage, setBigImage] = useState("/google.png");
  const { numberFormatter } = useData();
  return (
    <>
      <Stack flex={1} bgcolor="#F7F7F8" py={6}>
        <Container maxWidth="lg">
          <Box display={"flex"} gap={"41px"} width={1}>
            <Stack width={0.5} bgcolor={"red"} flexDirection={"row"}>
              <Stack
                gap={"11px"}
                width={"200px"}
                height={"200px"}
                position={"relative"}
                bgcolor={"aqua"}
              >
                <Image
                  alt="product image 1"
                  width={100}
                  height={100}
                  src={"/tshirt.png"}
                />
              </Stack>
              <Stack
                width={1}
                height={200}
                position={"relative"}
                bgcolor={"blue"}
              >
                <Image src={bigImage} alt="product" fill sizes="small" />
              </Stack>
            </Stack>
            <Stack width={0.5} border={1} gap={2}>
              <Typography fontSize={36} fontWeight={800} color={"#111C85"}>
                Sofa
              </Typography>
              <Stack>rating</Stack>
              <Stack>
                <Typography fontSize={32} fontWeight={400} color={"#151875"}>
                  {numberFormatter.format(230000)}
                  {"₮"}
                </Typography>
              </Stack>
              <Stack flexDirection={"row"} gap={1}>
                {colors.map((item, index) => (
                  <Stack
                    key={index}
                    p={0.75}
                    bgcolor={item}
                    borderRadius={"50%"}
                  ></Stack>
                ))}
              </Stack>
              <Typography fontSize={17.67} fontWeight={400} color={"#9295AA"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Stack>
      <Stack bgcolor={"#F9F8FE"}>
        <Container maxWidth="lg">sfe</Container>
      </Stack>
    </>
  );
}
