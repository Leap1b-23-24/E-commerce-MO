import { Footer } from "@/Components/Header/Footer";
import { Header } from "@/Components/Header/Header";
import { Navbar } from "@/Components/Header/Navbar";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Header />
      <Stack width={1} flex={1}>
        <Navbar />
      </Stack>
      <Footer />
    </main>
  );
}
