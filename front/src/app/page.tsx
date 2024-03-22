"use client";
import { CardMain } from "@/Components/CardMain";
import { FeaturedProductCard } from "@/Components/FeaturedProductCard";
import { FeaturedProducts } from "@/Components/FeaturedProducts";
import { Footer } from "@/Components/Header/Footer";
import { Header } from "@/Components/Header/Header";
import { Navbar } from "@/Components/Header/Navbar";
import { HomePageService } from "@/Components/HomePageService";
import { LoadingPage } from "@/Components/LoadingPage";
import { useData } from "@/Components/Providers/DataProvider";
import { RecentlyAddedProducts } from "@/Components/RecentlyAddedProducts";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";

export default function Home() {
  const { allProducts } = useData();
  if (!allProducts.length) {
    return (
      <Stack minHeight={"100vh"}>
        <Header />
        <Stack width={1} flex={1} bgcolor="#F7F7F8">
          <LoadingPage />
        </Stack>
        <Footer />
      </Stack>
    );
  }
  return (
    <Stack minHeight={"100vh"}>
      <Header />
      <Stack width={1} flex={1} bgcolor="#F7F7F8">
        <Navbar />

        <Stack position={"relative"} sx={{ width: "100vw", height: "600px" }}>
          <Image alt="carousel" src={"/promotional.png"} fill />
        </Stack>

        <FeaturedProducts />
        <RecentlyAddedProducts />
        <HomePageService />
      </Stack>
      <Footer />
    </Stack>
  );
}
