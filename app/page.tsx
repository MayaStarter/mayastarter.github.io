import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import LiveFeed from "@/components/LiveFeed";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      <ParticleField />
      <Hero />
      <section id="manifesto">
        <Manifesto />
      </section>
      <LiveFeed />
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="tokenomics">
        <Tokenomics />
      </section>
      <Footer />
    </main>
  );
}
