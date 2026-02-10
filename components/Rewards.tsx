'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Fingerprint,
  ShieldCheck,
  Handshake,
  Store,
  Sparkles,
  Flame,
  Rocket,
  Bot,
  Globe,
  GraduationCap,
  Building2,
  Network,
  Wifi,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
} as const;

interface Protocol {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
  metaphor: string;
}

export default function Rewards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const coreProtocols: Protocol[] = [
    {
      icon: Handshake,
      title: "AI-Verified Escrow",
      tagline: "Trade with Trust, Not Faith",
      description: "Both parties sign crypto contracts with measurable terms. AI verifies completion. No subjective disputes. No corrupt middlemen.",
      features: [
        "Crypto-signed contracts with specific deliverables",
        "AI agent checks: files delivered? formats correct? deadline met?",
        "Milestone-based escrow releases — pay as work progresses",
        "1-3% fee funds the entire ecosystem",
      ],
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/5",
      metaphor: "The contract is the law. The AI is the judge.",
    },
    {
      icon: Store,
      title: "Production Bonds",
      tagline: "Kickstarter on Solana",
      description: "Sell your future production at a discount. Get capital today without debt. Deliver tomorrow. Investors get a deal. You get funded.",
      features: [
        "Mint bonds for future work — bakers, devs, artisans",
        "Staged escrow releases as each batch is delivered",
        "Secondary market — your reputation has market value",
        "Zero debt, zero interest — just pre-orders",
      ],
      color: "from-purple-500 to-violet-500",
      gradient: "bg-gradient-to-br from-purple-500/10 to-violet-500/5",
      metaphor: "The seeds cost $10. The harvest is worth $200. That's production.",
    },
    {
      icon: Fingerprint,
      title: "Reputation Protocol (RaaS)",
      tagline: "Web3's Credit Score",
      description: "Your soulbound reputation NFT isn't just for MAYA — any Web3 project can read it. MAYA becomes the trust infrastructure of the decentralized internet.",
      features: [
        "Soulbound NFT — cannot be sold, only earned",
        "API/SDK for any Web3 project to query MAYA reputation",
        "Other DAOs, NFT marketplaces, DeFi protocols can integrate",
        "MAYA token required for reputation queries = permanent demand",
      ],
      color: "from-gold to-amber-500",
      gradient: "bg-gradient-to-br from-gold/10 to-amber-500/5",
      metaphor: "Starter culture goes into ANY dough. MAYA reputation goes into ANY platform.",
    },
  ];

  const expansionProtocols: Protocol[] = [
    {
      icon: Bot,
      title: "AI Agent Marketplace",
      tagline: "Your AI Works While You Sleep",
      description: "Build AI agents that trade on the marketplace. Your agent designs logos, translates docs, reviews code — 24/7. You earn passively. Agents have reputation too.",
      features: [
        "Create AI agents that offer services in the marketplace",
        "Agents build their own reputation score through completed trades",
        "Passive income — your agent works while you sleep",
        "Bad agents lose reputation, just like humans",
      ],
      color: "from-cyan-500 to-teal-500",
      gradient: "bg-gradient-to-br from-cyan-500/10 to-teal-500/5",
      metaphor: "Sourdough multiplies on its own. AI agents earn on their own.",
    },
    {
      icon: Building2,
      title: "Guild Enterprise",
      tagline: "One Baker Makes Bread. Ten Bakers Build an Empire.",
      description: "Solo freelancers can't land $50K contracts. Guilds can. Form a guild, take on enterprise projects, split revenue automatically via smart contracts.",
      features: [
        "Guilds take on projects no individual could handle",
        "Smart contract handles pay distribution automatically",
        "Guild reputation = weighted average of all members",
        "Enterprise clients get decentralized teams at fair rates",
      ],
      color: "from-emerald-500 to-green-500",
      gradient: "bg-gradient-to-br from-emerald-500/10 to-green-500/5",
      metaphor: "One culture makes one loaf. Ten cultures run a bakery.",
    },
    {
      icon: Globe,
      title: "Cross-Border Solidarity",
      tagline: "The Silk Road of Value",
      description: "A Turkish designer serves a US client. Payment in USDC. Escrow on Solana. No bank takes 7-10%. MAYA takes 1-2%. The future of international labor.",
      features: [
        "Borderless marketplace — talent meets capital globally",
        "USDC escrow — stable, instant, no bank delays",
        "Reputation is universal — works across all borders",
        "70% cheaper than traditional cross-border payments",
      ],
      color: "from-indigo-500 to-blue-500",
      gradient: "bg-gradient-to-br from-indigo-500/10 to-blue-500/5",
      metaphor: "The Silk Road carried grain. MAYA Network carries value.",
    },
    {
      icon: GraduationCap,
      title: "Proof-of-Skill Protocol",
      tagline: "Your Work IS Your Diploma",
      description: "Forget CVs and university degrees. Every completed trade becomes a verified skill credential on-chain. 10 logos? You're a Verified Designer. 50 translations? Master Translator.",
      features: [
        "On-chain skill credentials — impossible to fake",
        "Auto-generated from completed escrow trades",
        "Replaces LinkedIn, CVs, and diplomas with proof",
        "Google already doesn't require degrees — Web3 shouldn't either",
      ],
      color: "from-rose-500 to-pink-500",
      gradient: "bg-gradient-to-br from-rose-500/10 to-pink-500/5",
      metaphor: "You learn baking from dough, not textbooks. Skills from work, not diplomas.",
    },
    {
      icon: Rocket,
      title: "Community Launchpad",
      tagline: "No VCs. No Gatekeepers.",
      description: "Got a project? The community funds it, guilds staff it, and 15% of revenue flows back to the Commons Treasury. A self-sustaining launch ecosystem.",
      features: [
        "Propose → community reviews → quadratic vote → fund",
        "Guild members staff the project team",
        "15% revenue return to Commons Treasury",
        "No VC dilution. No board seats. Pure community backing.",
      ],
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-br from-orange-500/10 to-red-500/5",
      metaphor: "The bakery funds the next bakery. The cycle never ends.",
    },
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden" id="rewards">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass-gold text-gold text-sm font-medium tracking-wider mb-6"
            whileHover={{ scale: 1.05 }}
          >
            🧬 THE PROTOCOL STACK
          </motion.span>

          <h2 className="font-cinzel text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold to-cream">
              NOT A TOKEN. A PROTOCOL.
            </span>
          </h2>

          <p className="font-inter text-cream/60 max-w-3xl mx-auto text-lg">
            MAYA is seven protocols woven into one living organism.
            Each layer feeds the next — like sourdough culture that transforms
            everything it touches. Web3&apos;s trust infrastructure starts here.
          </p>
        </motion.div>

        {/* Evolution Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 p-8 rounded-2xl glass-gold border border-gold/20 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            {[
              { emoji: "🌾", year: "10,000 BC", title: "Grain Fermentation", desc: "Invented bread & beer" },
              { emoji: "🏺", year: "3,000 BC", title: "Trade & Currency", desc: "Grain became money" },
              { emoji: "🏦", year: "1400 AD", title: "Banking System", desc: "Trust centralized" },
              { emoji: "₿", year: "2009", title: "Bitcoin", desc: "Trust decentralized" },
              { emoji: "🍞", year: "2026", title: "MAYA", desc: "Trust made obsolete" },
            ].map((era, i) => (
              <div key={i} className="flex items-center gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                  <span className="text-3xl mb-2">{era.emoji}</span>
                  <p className="text-cream/40 text-xs uppercase tracking-wider">{era.year}</p>
                  <p className={`${i === 4 ? "text-gold font-bold" : "text-cream/70"} text-sm font-medium`}>{era.title}</p>
                  <p className="text-cream/40 text-xs">{era.desc}</p>
                </div>
                {i < 4 && <Flame className="w-4 h-4 text-gold/30 rotate-90 md:rotate-0 hidden md:block" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core Protocols Section */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-cinzel text-xl font-bold text-cream">Core Economic Engine</h3>
              <p className="text-cream/40 text-sm">The foundation — escrow, bonds, and reputation</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {coreProtocols.map((protocol, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-2xl ${protocol.gradient} border border-gold/10 hover:border-gold/30 transition-all duration-500`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${protocol.color} flex items-center justify-center mb-5`}>
                <protocol.icon className="w-7 h-7 text-white" />
              </div>
              <p className={`text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${protocol.color} bg-clip-text text-transparent mb-1`}>
                {protocol.tagline}
              </p>
              <h3 className="font-cinzel text-xl font-bold text-cream mb-3">{protocol.title}</h3>
              <p className="text-cream/60 text-sm mb-5 leading-relaxed">{protocol.description}</p>
              <ul className="space-y-3 mb-5">
                {protocol.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-cream/50">
                    <Sparkles className="w-3 h-3 text-gold/50 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-cream/5">
                <p className="text-cream/30 text-xs italic">&ldquo;{protocol.metaphor}&rdquo;</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expansion Protocols Section */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
              <Network className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-cinzel text-xl font-bold text-cream">Expansion Layer</h3>
              <p className="text-cream/40 text-sm">AI agents, guilds, cross-border, skill credentials, and launchpad</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {expansionProtocols.slice(0, 3).map((protocol, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-2xl ${protocol.gradient} border border-gold/10 hover:border-gold/30 transition-all duration-500`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${protocol.color} flex items-center justify-center mb-5`}>
                <protocol.icon className="w-7 h-7 text-white" />
              </div>
              <p className={`text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${protocol.color} bg-clip-text text-transparent mb-1`}>
                {protocol.tagline}
              </p>
              <h3 className="font-cinzel text-xl font-bold text-cream mb-3">{protocol.title}</h3>
              <p className="text-cream/60 text-sm mb-5 leading-relaxed">{protocol.description}</p>
              <ul className="space-y-3 mb-5">
                {protocol.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-cream/50">
                    <Sparkles className="w-3 h-3 text-gold/50 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-cream/5">
                <p className="text-cream/30 text-xs italic">&ldquo;{protocol.metaphor}&rdquo;</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {expansionProtocols.slice(3).map((protocol, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-2xl ${protocol.gradient} border border-gold/10 hover:border-gold/30 transition-all duration-500`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${protocol.color} flex items-center justify-center mb-5`}>
                <protocol.icon className="w-7 h-7 text-white" />
              </div>
              <p className={`text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${protocol.color} bg-clip-text text-transparent mb-1`}>
                {protocol.tagline}
              </p>
              <h3 className="font-cinzel text-xl font-bold text-cream mb-3">{protocol.title}</h3>
              <p className="text-cream/60 text-sm mb-5 leading-relaxed">{protocol.description}</p>
              <ul className="space-y-3 mb-5">
                {protocol.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-cream/50">
                    <Sparkles className="w-3 h-3 text-gold/50 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-cream/5">
                <p className="text-cream/30 text-xs italic">&ldquo;{protocol.metaphor}&rdquo;</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Protocol Flywheel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="p-10 rounded-2xl glass-gold border border-gold/20 text-center"
        >
          <Wifi className="w-8 h-8 text-gold mx-auto mb-4" />
          <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-cream mb-4">
            The Flywheel Effect
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-sm text-cream/60 mb-6">
            <span className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">More Trades</span>
            <span className="text-gold">→</span>
            <span className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">More Revenue</span>
            <span className="text-gold">→</span>
            <span className="px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400">More Burns</span>
            <span className="text-gold">→</span>
            <span className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">Higher Reputation</span>
            <span className="text-gold">→</span>
            <span className="px-4 py-2 rounded-lg bg-gold/10 border border-gold/20 text-gold">More Users</span>
          </div>
          <p className="text-cream/40 text-sm max-w-2xl mx-auto">
            Each protocol feeds the next. Escrow generates fees. Fees burn tokens. Reputation attracts users.
            Users create guilds. Guilds attract enterprise. Enterprise funds the launchpad.
            The culture grows itself — forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
