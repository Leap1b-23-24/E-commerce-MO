import { SignUp } from "@/Components/Authentication/SignUp";
import { DeliveryInfo } from "@/Components/DeliveryInfo";
import { Footer } from "@/Components/Header/Footer";
import { Header } from "@/Components/Header/Header";
import { Menu } from "@/Components/Header/Menu";
import { LeftButton } from "@/Components/Leftbutton";
import { Table } from "@/Components/Table";
import Image from "next/image";
import { ShopCardShoes } from "@/Components/ShopCardShoes";
import { ShopCardShirt } from "@/Components/ShopCardShirt";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header />
      <Menu />

      <LeftButton />

      <DeliveryInfo />

      <Footer />
    </main>
  );
}
