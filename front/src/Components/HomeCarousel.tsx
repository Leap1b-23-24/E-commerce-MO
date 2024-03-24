"use client";
import { Container, Stack } from "@mui/material";
import { HomeCarouselCard } from "./HomeCarouselCard";
import { useData } from "./Providers/DataProvider";

export const HomeCarousel = () => {
  const { allProducts } = useData();
  return (
    <Stack bgcolor={"#F2F0FF"}>
      <Container maxWidth="lg">
        <HomeCarouselCard />
      </Container>
    </Stack>
  );
};
