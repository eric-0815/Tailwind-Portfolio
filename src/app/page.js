import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <section className="max-w-3xl mx-auto text-black bg-white">
        <Navbar />
        <Hero />
        <section>Work Experience</section>
      </section>
    </main>
  );
}
