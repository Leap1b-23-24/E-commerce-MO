import { SignUp } from "@/Components/Authentication/SignUp";
import { Footer } from "@/Components/Header/Footer";
import { Header } from "@/Components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (

    <main className="flex flex-col min-h-screen items-center justify-between">

      <Header />

      <Footer />
    </main>
  );
}
