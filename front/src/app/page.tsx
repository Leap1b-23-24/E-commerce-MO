"use client";
import { FeaturedProducts } from "@/Components/FeaturedProducts";
import { HomeCarousel } from "@/Components/Home/HomeCarousel";
import { HomePageService } from "@/Components/Home/HomePageService";
import { useData } from "@/Components/Providers/DataProvider";
import { RecentlyAddedProducts } from "@/Components/RecentlyAddedProducts";
import { Stack } from "@mui/material";

export default function Home() {
  const { allProducts, cartProduct, isReady } = useData();

  return (
    <Stack minHeight={"100vh"}>
      <Stack width={1} flex={1} bgcolor="#F7F7F8">
        <HomeCarousel />
        <FeaturedProducts />
        <RecentlyAddedProducts />
        <HomePageService />
      </Stack>
    </Stack>
  );
}
