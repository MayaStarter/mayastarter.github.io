"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FileText,
  Handshake,
  Store,
  Landmark,
  Flame,
  Fingerprint,
  Lock,
  Download,
  ExternalLink,
  Bot,
  Globe,
  GraduationCap,
  Building2,
  Gem,
  ChevronDown,
  ArrowRight,
  Zap,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1] as const,
    },
  },
} as const;

interface Section {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  howItWorks: string[];
  color: string;
  borderColor: string;
  phase: string;
}

function ExpandableCard({ section }: { section: Section }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
    >
      <div
        className={`h-full rounded-2xl glass-gold border ${section.borderColor} hover:border-gold/40 transition-all duration-500 overflow-hidden`}
      >
        {/* Top color accent bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${section.color}`} />

        <div className="p-6">
          {/* Phase badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={`text-xs font-bold tracking-wider uppercase px-2 py-1 rounded-md bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
              {section.phase}
            </span>
            <section.icon className={`w-5 h-5 text-cream/30`} />
          </div>

          {/* Title */}
          <h3 className="font-cinzel text-lg font-bold text-cream mb-2">{section.title}</h3>

          {/* Description */}
          <p className="text-cream/60 text-sm leading-relaxed mb-4">{section.description}</p>

          {/* Expand button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-gold/70 hover:text-gold text-sm font-medium transition-colors"
          >
            <span>{isExpanded ? "Hide details" : "How it works"}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
          </button>

          {/* Expandable details */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-cream/10">
              <ul className="space-y-3">
                {section.howItWorks.map((step, sIndex) => (
                  <li key={sIndex} className="flex items-start gap-3 text-sm text-cream/50">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${section.color} flex items-center justify-center text-[10px] font-bold text-white`}>
                      {sIndex + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Whitepaper() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sections: Section[] = [
    {
      icon: FileText,
      title: "The Problem",
      description: "Freelance platforms take 20-30%. Workers own nothing. Reputation is locked. Cross-border payments cost 7-10%. The system extracts from creators.",
      howItWorks: [
        "Platforms like Fiverr/Upwork capture 20-30% of your earnings",
        "Your reputation is trapped — leave the platform, lose everything",
        "Dispute resolution is opaque and biased toward the platform",
        "Cross-border freelancers pay extra through bank transfers and conversion",
        "No ownership, no governance, no portability — you're a product, not a partner",
      ],
      color: "from-red-500 to-orange-500",
      borderColor: "border-red-500/10",
      phase: "THE PROBLEM",
    },
    {
      icon: Handshake,
      title: "AI-Verified Escrow",
      description: "Both parties sign crypto contracts with measurable terms. AI agent validates completion objectively. 90% of disputes eliminated before they happen.",
      howItWorks: [
        "Buyer and seller define specific deliverables: format, count, deadline, revision limits",
        "Both sign with crypto wallets — immutable on-chain agreement",
        "Buyer deposits USDC into escrow smart contract",
        "Seller delivers — AI agent checks: files uploaded? formats correct? deadline met?",
        "All conditions met → escrow auto-releases. Dispute? → 50 USDC arbiter (loser pays)",
      ],
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/10",
      phase: "LAYER 1 — CORE",
    },
    {
      icon: Store,
      title: "Production Bonds",
      description: "Forward contracts for future work. A baker needs $1,000 for equipment? Mint a bond. Sell 40 starter kits at discount. Staged delivery, zero debt.",
      howItWorks: [
        "Worker mints a bond: '40 sourdough kits, $35 each, delivered in 6 months'",
        "Bond sells at discount: 10 buyers × $100 = $1,000 in escrow",
        "Staged releases: every 10 kits delivered → $250 released to worker",
        "Bonds are tradeable SPL tokens — secondary market for future labor",
        "Default protection: undelivered portion auto-refunds. Bad reputation permanently recorded",
      ],
      color: "from-purple-500 to-violet-500",
      borderColor: "border-purple-500/10",
      phase: "LAYER 1 — CORE",
    },
    {
      icon: Fingerprint,
      title: "Reputation Protocol (RaaS)",
      description: "Your soulbound NFT isn't just for MAYA. Any Web3 project can query your reputation via API/SDK. MAYA becomes the trust layer of the decentralized internet.",
      howItWorks: [
        "Every completed trade updates your on-chain reputation score",
        "Soulbound NFT — can't be sold, can't be faked, visually evolves with tier",
        "Open API/SDK: other DAOs, NFT marketplaces, DeFi protocols can read your MAYA score",
        "External projects pay MAYA tokens per reputation query = permanent demand for token",
        "Score = Σ(trade_value × completion_rate × time_factor × bond_factor) — transparent formula",
      ],
      color: "from-gold to-amber-500",
      borderColor: "border-gold/10",
      phase: "LAYER 2 — INTELLIGENCE",
    },
    {
      icon: GraduationCap,
      title: "Proof-of-Skill Protocol",
      description: "10 logo designs completed = 'Verified Logo Designer' credential. On-chain, permanent, tamper-proof. Your work IS your diploma.",
      howItWorks: [
        "Every completed escrow trade auto-generates a skill credential",
        "Credentials accumulate: 10 trades in design → Verified Designer badge",
        "On-chain and permanent — impossible to fake, unlike LinkedIn endorsements",
        "Employers/clients filter by verified skills instead of CVs or degrees",
        "Tier progression: Beginner (5 trades) → Skilled (25) → Expert (100) → Master (500)",
      ],
      color: "from-rose-500 to-pink-500",
      borderColor: "border-rose-500/10",
      phase: "LAYER 2 — INTELLIGENCE",
    },
    {
      icon: Bot,
      title: "AI Agent Marketplace",
      description: "Create AI agents that work in the marketplace 24/7. Your agent designs, translates, codes — and earns reputation. Passive income, verified by the same escrow system.",
      howItWorks: [
        "Build an AI agent (logo generator, translator, code reviewer, etc.)",
        "Register it on the MAYA marketplace — it takes orders like a human",
        "Same escrow system applies — AI agent must meet contract terms",
        "Agent builds its own reputation score — bad output = reputation loss",
        "You earn passively while your agent works 24/7 across time zones",
      ],
      color: "from-cyan-500 to-teal-500",
      borderColor: "border-cyan-500/10",
      phase: "LAYER 2 — INTELLIGENCE",
    },
    {
      icon: Building2,
      title: "Guild Enterprise Protocol",
      description: "10 designers form a guild. Together they land a $50K corporate rebrand. Smart contract splits payment automatically. Decentralized agency.",
      howItWorks: [
        "Members with complementary skills form a guild (open to anyone)",
        "Guild bids on enterprise contracts no individual could handle",
        "Smart contract defines roles, deliverables, and payment splits",
        "Guild reputation = weighted average of members — bad member hurts everyone",
        "Enterprise clients get decentralized teams at fair rates (no agency markup)",
      ],
      color: "from-emerald-500 to-green-500",
      borderColor: "border-emerald-500/10",
      phase: "LAYER 3 — EXPANSION",
    },
    {
      icon: Globe,
      title: "Cross-Border Solidarity",
      description: "Turkish designer, US client. Payment in USDC, escrowed on Solana. 1-2% total cost vs 7-10% via banks. The Silk Road of value.",
      howItWorks: [
        "Client in any country posts job → talent from any country applies",
        "Payment in USDC — stable, instant, no currency conversion losses",
        "Escrow on Solana — settles in seconds, not days or weeks",
        "Total cost: 1-2% (MAYA fee) vs 7-10% (bank transfers + PayPal + conversion)",
        "Reputation crosses borders — your skills speak the same language everywhere",
      ],
      color: "from-indigo-500 to-blue-500",
      borderColor: "border-indigo-500/10",
      phase: "LAYER 3 — EXPANSION",
    },
    {
      icon: Gem,
      title: "Holder Benefits",
      description: "Real revenue share in USDC. Tiered loyalty system. Lower fees for long-term holders. Genesis Baker badge — never issued again. Sell = reset everything.",
      howItWorks: [
        "15% of all protocol revenue distributed to holders in USDC",
        "4 tiers: Fresh Dough → Rising Baker (30d) → Master Baker (90d) → Genesis Baker",
        "Higher tiers = lower escrow fees (3% → 2% → 1.5%), higher bond limits",
        "Genesis Bakers (holding since launch) get exclusive badge + governance veto",
        "Sell your MAYA → tier resets to zero. Hold time restarts. Revenue share stops.",
      ],
      color: "from-amber-400 to-yellow-500",
      borderColor: "border-amber-400/10",
      phase: "TOKEN VALUE",
    },
    {
      icon: Flame,
      title: "Deflationary Burn",
      description: "20% of all revenue buys MAYA and burns it permanently. Fixed supply. No minting. Your share of total supply grows automatically — just by holding.",
      howItWorks: [
        "Every trade generates 1-3% fee → 20% goes to buyback & burn",
        "MAYA bought from open market → sent to burn address → gone forever",
        "Total supply: 1B tokens. Burns only reduce — nothing ever mints new tokens",
        "Year 1 example: $2M GMV → $50K revenue → $10K burned permanently",
        "Holding 1M MAYA: ownership goes from 0.10% → 0.167% in 5 years (67% increase, zero effort)",
      ],
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/10",
      phase: "TOKEN VALUE",
    },
    {
      icon: Landmark,
      title: "Commons Treasury",
      description: "15% of revenue auto-fills a community treasury. Quadratic voting prevents whale dominance. Fund loans, grants, and the community launchpad.",
      howItWorks: [
        "15% of protocol revenue flows to Commons automatically — no vote needed to fund it",
        "Spending requires quadratic voting: Voting Power = √(tokens_committed)",
        "Revenue-Based Financing: micro-loans repaid as % of marketplace earnings, no interest",
        "Community Launchpad: propose → discuss → vote → fund → build → 15% revenue return",
        "Sybil resistant: only wallets with completed trades can vote (reputation-gated)",
      ],
      color: "from-violet-500 to-purple-500",
      borderColor: "border-violet-500/10",
      phase: "GOVERNANCE",
    },
    {
      icon: Lock,
      title: "Security",
      description: "Squads Protocol multisig. AI contract verification. Third-party audits. Non-custodial. Progressive decentralization from multisig to full DAO.",
      howItWorks: [
        "Squads Protocol 3-of-5 multisig for operational treasury",
        "Each escrow has its own isolated smart contract — no shared pool risk",
        "AI verification layer checks contracts before release",
        "48-hour time lock on treasury transactions above $10,000",
        "Progressive decentralization: multisig → community governance → full DAO",
      ],
      color: "from-emerald-500 to-green-600",
      borderColor: "border-emerald-500/10",
      phase: "SECURITY",
    },
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden" id="whitepaper">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass-gold text-gold text-sm font-medium tracking-wider mb-6"
            whileHover={{ scale: 1.05 }}
          >
            📜 WHITEPAPER v2.0
          </motion.span>

          <h2 className="font-cinzel text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold to-cream">
              The Complete Blueprint
            </span>
          </h2>

          <p className="font-inter text-cream/60 max-w-3xl mx-auto text-lg mb-4">
            Seven protocols. Three layers. One living organism.
            AI-verified escrow, production bonds, reputation-as-a-service, AI agents,
            guild enterprise, cross-border solidarity, and proof-of-skill credentials.
          </p>
          <p className="font-inter text-gold/60 max-w-xl mx-auto text-sm italic">
            Click &ldquo;How it works&rdquo; on any card to see the step-by-step mechanics.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <motion.a
              href="/docs/whitepaper.md"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-amber text-black font-bold text-lg shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-shadow"
            >
              <Download className="w-5 h-5" />
              Read Full Whitepaper
            </motion.a>
            <motion.a
              href="https://github.com/mayastarter"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-gold/30 text-gold font-bold text-lg hover:bg-gold/5 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              View on GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 p-6 md:p-8 rounded-2xl glass-gold border border-gold/20"
        >
          <h3 className="font-cinzel text-xl font-bold text-cream text-center mb-6">Protocol Architecture</h3>

          <div className="space-y-3">
            {/* Layer 3 */}
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-emerald-400 tracking-wider">LAYER 3 — EXPANSION</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 text-xs font-medium">Guild Enterprise</span>
                <span className="px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-300 text-xs font-medium">Cross-Border Network</span>
                <span className="px-3 py-1.5 rounded-lg bg-orange-500/10 text-orange-300 text-xs font-medium">Community Launchpad</span>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/15">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-cyan-400 tracking-wider">LAYER 2 — INTELLIGENCE</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-gold/10 text-gold text-xs font-medium">Reputation Protocol (RaaS)</span>
                <span className="px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-300 text-xs font-medium">Proof-of-Skill</span>
                <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 text-xs font-medium">AI Agent Marketplace</span>
              </div>
            </div>

            {/* Layer 1 */}
            <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/15">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-blue-400 tracking-wider">LAYER 1 — CORE ENGINE</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-300 text-xs font-medium">AI-Verified Escrow</span>
                <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 text-xs font-medium">Production Bonds</span>
                <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 text-xs font-medium">Holder Tiers + Revenue Share</span>
              </div>
            </div>

            {/* Foundation */}
            <div className="p-4 rounded-xl bg-gold/5 border border-gold/15">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-gold tracking-wider">FOUNDATION</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-orange-500/10 text-orange-300 text-xs font-medium">Buyback &amp; Burn</span>
                <span className="px-3 py-1.5 rounded-lg bg-violet-500/10 text-violet-300 text-xs font-medium">Commons Treasury + DAO</span>
                <span className="px-3 py-1.5 rounded-lg bg-green-500/10 text-green-300 text-xs font-medium">Squads Multisig Security</span>
              </div>
            </div>
          </div>

          {/* Flow arrows */}
          <div className="flex items-center justify-center gap-3 mt-6 text-cream/30 text-xs">
            <span>Trades</span>
            <ArrowRight className="w-3 h-3" />
            <span>Fees</span>
            <ArrowRight className="w-3 h-3" />
            <span className="text-green-400">50% Ops</span>
            <span className="text-cream/20">+</span>
            <span className="text-amber-400">15% Holders</span>
            <span className="text-cream/20">+</span>
            <span className="text-purple-400">15% Commons</span>
            <span className="text-cream/20">+</span>
            <span className="text-orange-400">20% Burn</span>
          </div>
        </motion.div>

        {/* Section Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sections.map((section, index) => (
            <ExpandableCard key={index} section={section} />
          ))}
        </motion.div>

        {/* Revenue Flow Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl glass-gold border border-gold/20"
        >
          <h3 className="font-cinzel text-2xl font-bold text-cream text-center mb-8">
            Revenue Flow — Every Trade Powers the Ecosystem
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="text-center px-6 py-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <Zap className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <p className="text-blue-400 font-bold text-sm">MARKETPLACE</p>
              <p className="text-cream/50 text-xs mt-1">1-3% per trade</p>
            </div>

            <ArrowRight className="w-5 h-5 text-gold/40 rotate-90 md:rotate-0" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Operations", pct: "50%", color: "green", desc: "Dev + Growth" },
                { label: "Holders", pct: "15%", color: "amber", desc: "USDC Revenue" },
                { label: "Commons", pct: "15%", color: "purple", desc: "Treasury + Loans" },
                { label: "Burn", pct: "20%", color: "orange", desc: "Permanent" },
              ].map((item, i) => (
                <div key={i} className={`text-center px-4 py-3 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20`}>
                  <p className={`text-${item.color}-400 font-bold text-lg`}>{item.pct}</p>
                  <p className={`text-${item.color}-400 font-bold text-xs`}>{item.label}</p>
                  <p className="text-cream/40 text-[10px] mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-cream/40 text-sm mt-6">
            No tokens minted. No staking inflation. Just real revenue from real trades.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
