"use client";

import Whitepaper from "@/components/Whitepaper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      <ParticleField />
      <div className="pt-24">
        <Whitepaper />
      </div>
      <Footer />
    </main>
  );
}
