"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Handshake,
  Bot,
  Users,
  Server,
  Sparkles,
  Store,
  Fingerprint,
  GraduationCap,
  Building2,
  HeartHandshake,
  Globe,
  MessageCircle,
  HardDrive,
  ArrowRight,
} from "lucide-react";

const layers = [
  {
    icon: Handshake,
    title: "Core Engine",
    subtitle: "Trade with trust, not faith",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/8",
    border: "border-blue-500/20",
    protocols: [
      { icon: Handshake, name: "AI-Verified Escrow", desc: "Crypto-signed contracts, AI validates, 1-3% fee" },
      { icon: Store, name: "Production Bonds", desc: "Sell future work at discount, zero debt" },
      { icon: Fingerprint, name: "Reputation (RaaS)", desc: "Soulbound NFT, open API, permanent demand" },
    ],
  },
  {
    icon: Bot,
    title: "Intelligence Layer",
    subtitle: "AI agents, skills, and mentorship",
    color: "from-cyan-500 to-teal-500",
    bg: "bg-cyan-500/8",
    border: "border-cyan-500/20",
    protocols: [
      { icon: Bot, name: "AI Agent Marketplace", desc: "Your AI works 24/7, passive income verified" },
      { icon: GraduationCap, name: "Proof-of-Skill", desc: "Completed trades → on-chain credentials" },
      { icon: Users, name: "Reputation Lending", desc: "Elders vouch for newcomers, both earn or lose" },
    ],
  },
  {
    icon: Users,
    title: "Community Layer",
    subtitle: "Guilds, insurance, and solidarity",
    color: "from-emerald-500 to-green-500",
    bg: "bg-emerald-500/8",
    border: "border-emerald-500/20",
    protocols: [
      { icon: Building2, name: "Guild Enterprise", desc: "10 freelancers → $50K+ contracts, auto-split" },
      { icon: HeartHandshake, name: "Solidarity Insurance", desc: "İmece on-chain — community safety net" },
      { icon: Globe, name: "Cross-Border Network", desc: "1-2% vs 7-10%, reputation crosses borders" },
    ],
  },
  {
    icon: Server,
    title: "Infrastructure",
    subtitle: "Your network, your servers, your AI",
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-500/8",
    border: "border-rose-500/20",
    protocols: [
      { icon: MessageCircle, name: "Maya Agora", desc: "Wallet-based social, reputation IS your profile" },
      { icon: HardDrive, name: "Vault Network", desc: "Community-owned storage, encrypted & sharded" },
      { icon: Server, name: "Maya Daemon", desc: "Local AI, federated learning, your data stays" },
    ],
  },
];

export default function Protocol() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-24 px-4 overflow-hidden" id="protocol">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-neon-cyan/3 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-neon-purple/3 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass-gold text-gold text-sm font-medium tracking-wider mb-6"
            whileHover={{ scale: 1.05 }}
          >
            🧬 THE CIVILIZATION PROTOCOL
          </motion.span>

          <h2 className="font-cinzel text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold to-cream">
              15 Protocols. 4 Layers. 1 Civilization.
            </span>
          </h2>

          <p className="font-inter text-cream/50 max-w-2xl mx-auto text-base">
            Marketplace, intelligence, community, and infrastructure — each layer feeds the next.
          </p>
        </motion.div>

        {/* Layer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className={`p-6 rounded-2xl ${layer.bg} border ${layer.border} hover:border-gold/30 transition-all duration-500`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                  <layer.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-cream">{layer.title}</h3>
                  <p className="text-cream/40 text-xs">{layer.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3">
                {layer.protocols.map((p, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <p.icon className="w-4 h-4 text-gold/40 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-cream/80 text-sm font-semibold">{p.name}</span>
                      <span className="text-cream/40 text-sm"> — {p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flywheel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="p-6 md:p-8 rounded-2xl glass-gold border border-gold/20 text-center"
        >
          <h3 className="font-cinzel text-xl font-bold text-cream mb-4">The Civilizational Flywheel</h3>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-sm mb-4">
            {[
              { label: "Trades", cls: "bg-blue-500/10 border-blue-500/20 text-blue-400" },
              { label: "Revenue", cls: "bg-green-500/10 border-green-500/20 text-green-400" },
              { label: "Burns + Rewards", cls: "bg-orange-500/10 border-orange-500/20 text-orange-400" },
              { label: "Reputation", cls: "bg-purple-500/10 border-purple-500/20 text-purple-400" },
              { label: "Guilds", cls: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" },
              { label: "Infrastructure", cls: "bg-rose-500/10 border-rose-500/20 text-rose-400" },
              { label: "More Users", cls: "bg-amber-500/10 border-amber-500/20 text-amber-400" },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className={`px-3 py-1.5 rounded-lg border text-xs font-medium ${step.cls}`}>
                  {step.label}
                </span>
                {i < 6 && <ArrowRight className="w-3 h-3 text-gold/30" />}
              </div>
            ))}
          </div>

          <p className="text-cream/35 text-sm max-w-xl mx-auto">
            Each protocol feeds the next. The civilization grows itself.
          </p>

          {/* Revenue Split */}
          <div className="flex items-center justify-center gap-2.5 mt-5 text-cream/30 text-xs flex-wrap">
            <span>1-3% fee</span>
            <Sparkles className="w-3 h-3 text-gold/30" />
            <span className="text-green-400">50% Ops</span>
            <span>·</span>
            <span className="text-amber-400">15% Holders</span>
            <span>·</span>
            <span className="text-purple-400">15% Commons</span>
            <span>·</span>
            <span className="text-orange-400">20% Burn</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
