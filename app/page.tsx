import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import CivilizationStack from "@/components/CivilizationStack";
import LiveFeed from "@/components/LiveFeed";
import Rewards from "@/components/Rewards";
import HolderBenefits from "@/components/HolderBenefits";
import Roadmap from "@/components/Roadmap";
import Whitepaper from "@/components/Whitepaper";
import Tokenomics from "@/components/Tokenomics";
import Community from "@/components/Community";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      <ParticleField />
      <Hero />
      <Manifesto />
      <CivilizationStack />
      <LiveFeed />
      <Rewards />
      <HolderBenefits />
      <Roadmap />
      <Whitepaper />
      <Tokenomics />
      <Community />
      <FAQ />
      <Footer />
    </main>
  );
}
