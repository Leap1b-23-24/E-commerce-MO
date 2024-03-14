import { SignUp } from "@/Components/Authentication/SignUp";
import { DashboardLeft } from "@/Components/DashboardLeft";
import { DeliveryInfo } from "@/Components/DeliveryInfo";
import { Footer } from "@/Components/Header/Footer";
import { Header } from "@/Components/Header/Header";
import { Menu } from "@/Components/Header/Menu";
import { LeftButton } from "@/Components/Leftbutton";
import { Ordertable } from "@/Components/Order-table";
import { Table } from "@/Components/Table";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header />
      <Menu />

      <LeftButton />

      <DeliveryInfo />
      <Ordertable />

      <Footer />
    </main>
  );
}
