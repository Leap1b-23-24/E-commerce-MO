import { SignUp } from "@/Components/Authentication/SignUp";
import { DashboardTotalCard } from "@/Components/DashboardTotalCard";
import { Footer } from "@/Components/Header/Footer";
import { Header } from "@/Components/Header/Header";
import { Menu } from "@/Components/Header/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header />
      <Menu />
      <DashboardTotalCard />
      <Footer />
    </main>
  );
}
