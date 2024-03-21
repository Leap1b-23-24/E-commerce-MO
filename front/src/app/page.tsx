"use client";
import { FeaturedProductCard } from "@/Components/FeaturedProductCard";
import { FeaturedProducts } from "@/Components/FeaturedProducts";
import { Footer } from "@/Components/Header/Footer";
import { Header } from "@/Components/Header/Header";
import { Navbar } from "@/Components/Header/Navbar";
import { useData } from "@/Components/Providers/DataProvider";
import { Container, Stack } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Stack minHeight={"100vh"}>
      <Header />
      <Stack width={1} flex={1}>
        <Navbar />

        <Stack position={"relative"} sx={{ width: "100vw", height: "600px" }}>
          <Image alt="carousel" src={"/promotional.png"} fill />
        </Stack>

        <FeaturedProducts />
      </Stack>
      <Footer />
    </Stack>
  );
}
