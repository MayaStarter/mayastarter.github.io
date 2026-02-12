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
  HeartHandshake,
  Users,
  MessageCircle,
  HardDrive,
  Server,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const },
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
    <motion.div variants={cardVariants} className="group relative">
      <div className={`h-full rounded-2xl glass-gold border ${section.borderColor} hover:border-gold/30 transition-all duration-500 overflow-hidden`}>
        <div className={`h-1 w-full bg-gradient-to-r ${section.color}`} />
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
              {section.phase}
            </span>
            <section.icon className="w-4 h-4 text-cream/25" />
          </div>
          <h3 className="font-cinzel text-base font-bold text-cream mb-2">{section.title}</h3>
          <p className="text-cream/50 text-sm leading-relaxed mb-3">{section.description}</p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-gold/60 hover:text-gold text-sm font-medium transition-colors"
          >
            <span>{isExpanded ? "Hide details" : "How it works"}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
          </button>
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-3 mt-3 border-t border-cream/10">
              <ul className="space-y-2.5">
                {section.howItWorks.map((step, sIndex) => (
                  <li key={sIndex} className="flex items-start gap-2.5 text-sm text-cream/45">
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
      description: "Freelance platforms take 20-30%. Reputation is locked. Cross-border payments cost 7-10%. Workers own nothing. The system extracts from creators.",
      howItWorks: [
        "Platforms capture 20-30% of creator earnings",
        "Leave the platform → lose all reputation",
        "Disputes are opaque, biased toward the platform",
        "Cross-border workers pay 7-10% in bank/conversion fees",
        "No ownership, no governance — you're a product, not a partner",
      ],
      color: "from-red-500 to-orange-500",
      borderColor: "border-red-500/10",
      phase: "THE PROBLEM",
    },
    {
      icon: Handshake,
      title: "AI-Verified Escrow",
      description: "Crypto-signed contracts with measurable terms. AI validates completion. Milestone-based releases. 90% of disputes eliminated before they happen.",
      howItWorks: [
        "Define deliverables: format, count, deadline, revisions",
        "Both sign with wallets — immutable on-chain agreement",
        "Buyer deposits USDC into escrow contract",
        "AI checks: files uploaded? formats correct? deadline met?",
        "All met → auto-release. Dispute → $50 arbiter (loser pays)",
      ],
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/10",
      phase: "CORE ENGINE",
    },
    {
      icon: Store,
      title: "Production Bonds",
      description: "Forward contracts for future work. Mint bonds, sell at discount, deliver in stages. Tradeable on secondary market. Zero debt.",
      howItWorks: [
        "Mint bond: '40 kits, $35 each, 6 months'",
        "Sells at discount: 10 buyers × $100 = $1,000 escrow",
        "Staged releases per batch delivery",
        "Bonds = tradeable SPL tokens on secondary market",
        "Default → auto-refund + permanent reputation loss",
      ],
      color: "from-purple-500 to-violet-500",
      borderColor: "border-purple-500/10",
      phase: "CORE ENGINE",
    },
    {
      icon: Fingerprint,
      title: "Reputation Protocol (RaaS)",
      description: "Soulbound reputation NFT. Open API for Web3. External protocols pay MAYA tokens per query = permanent demand.",
      howItWorks: [
        "Every trade updates on-chain reputation score",
        "Soulbound NFT — can't sell, visually evolves",
        "API/SDK for DAOs, DeFi, NFT marketplaces",
        "External query = MAYA token fee = perpetual demand",
        "Score = Σ(value × completion × time × bond)",
      ],
      color: "from-gold to-amber-500",
      borderColor: "border-gold/10",
      phase: "INTELLIGENCE",
    },
    {
      icon: GraduationCap,
      title: "Proof-of-Skill",
      description: "10 logos = Verified Designer. On-chain, permanent, tamper-proof. Replaces CVs, LinkedIn, and diplomas with proof.",
      howItWorks: [
        "Auto-generated from completed escrow trades",
        "Credentials accumulate by category",
        "Tiers: Beginner (5) → Expert (100) → Master (500)",
        "Employers filter by verified proof, not promises",
        "Portable across platforms — follows your wallet",
      ],
      color: "from-rose-500 to-pink-500",
      borderColor: "border-rose-500/10",
      phase: "INTELLIGENCE",
    },
    {
      icon: Bot,
      title: "AI Agent Marketplace",
      description: "Create AI agents that trade 24/7. Same escrow, same reputation. Passive income verified. Bad agents lose reputation.",
      howItWorks: [
        "Build agent (designer, translator, code reviewer)",
        "Register on marketplace — accepts orders like a human",
        "Same escrow applies — must meet contract terms",
        "Agent builds reputation score independently",
        "You earn while sleeping across all time zones",
      ],
      color: "from-cyan-500 to-teal-500",
      borderColor: "border-cyan-500/10",
      phase: "INTELLIGENCE",
    },
    {
      icon: Users,
      title: "Reputation Lending",
      description: "Elders vouch for talented newcomers. Temporary tier boost. If mentee fails, mentor loses reputation too.",
      howItWorks: [
        "Tier 3+ member vouches for a newcomer",
        "Newcomer gets temporary Tier 2 access (30 days)",
        "If newcomer delivers well, both gain",
        "If newcomer fails, mentor's score drops",
        "Real-world referral system, coded on-chain",
      ],
      color: "from-amber-500 to-orange-500",
      borderColor: "border-amber-500/10",
      phase: "INTELLIGENCE",
    },
    {
      icon: Building2,
      title: "Guild Enterprise",
      description: "10 freelancers form a guild. Take on $50K contracts. Smart contract auto-splits revenue. Decentralized agency.",
      howItWorks: [
        "Members with complementary skills form guild",
        "Guild bids on enterprise contracts",
        "Smart contract defines roles + payment splits",
        "Guild reputation = weighted member average",
        "Fair rates, no agency markup",
      ],
      color: "from-emerald-500 to-green-500",
      borderColor: "border-emerald-500/10",
      phase: "COMMUNITY",
    },
    {
      icon: HeartHandshake,
      title: "Solidarity Insurance",
      description: "Community safety net for Tier 3+ members. Illness, disaster, hardship. Funded from Commons. Voted by community. İmece — coded on-chain.",
      howItWorks: [
        "Funded from Commons Treasury",
        "Tier 3+ eligible (90 days, 20+ trades)",
        "Submit hardship claim with evidence",
        "Community votes on each case — no central authority",
        "Range: $500-$2,000, faizsiz, repayable or grant",
      ],
      color: "from-pink-500 to-rose-500",
      borderColor: "border-pink-500/10",
      phase: "COMMUNITY",
    },
    {
      icon: Globe,
      title: "Cross-Border Network",
      description: "Turkish designer, US client. USDC escrow on Solana. 1-2% total vs 7-10% via banks. Reputation crosses borders.",
      howItWorks: [
        "Client posts job → talent from any country applies",
        "USDC escrow — stable, instant, no conversion",
        "Settles in seconds, not days",
        "Total cost: 1-2% vs 7-10% traditional",
        "Reputation universal — skills speak every language",
      ],
      color: "from-indigo-500 to-blue-500",
      borderColor: "border-indigo-500/10",
      phase: "COMMUNITY",
    },
    {
      icon: MessageCircle,
      title: "Maya Agora",
      description: "Wallet-based social network. Your profile IS your reputation. No bans, no ads, no data extraction. Guild channels auto-created.",
      howItWorks: [
        "Login with wallet — no email, no password",
        "Profile = Reputation NFT + skill badges",
        "Guild & marketplace channels built-in",
        "Encrypted messaging — E2E by default",
        "Data is yours — stored on MAYA Vault Network",
      ],
      color: "from-violet-500 to-purple-500",
      borderColor: "border-violet-500/10",
      phase: "INFRASTRUCTURE",
    },
    {
      icon: HardDrive,
      title: "Maya Vault Network",
      description: "Members donate 10-100GB. Combined: decentralized storage. Encrypted, sharded, redundant. Provide space = earn USDC. No AWS.",
      howItWorks: [
        "Install Maya Vault node — allocate storage",
        "Data encrypted + split into shards",
        "No single node sees full data",
        "3x redundancy — node dies, data survives",
        "Storage providers earn proportional USDC",
      ],
      color: "from-teal-500 to-cyan-600",
      borderColor: "border-teal-500/10",
      phase: "INFRASTRUCTURE",
    },
    {
      icon: Server,
      title: "Maya Daemon",
      description: "Your own local AI. Learns your style. Works while you sleep. Federated learning: collective intelligence, individual privacy.",
      howItWorks: [
        "Run 'maya-daemon start' on your machine",
        "Local models (Llama/Mistral) learn your work style",
        "Agent takes simple marketplace orders",
        "Federated learning: models improve together",
        "Your data never leaves your machine",
      ],
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/10",
      phase: "INFRASTRUCTURE",
    },
    {
      icon: Gem,
      title: "Holder Benefits",
      description: "4 tiers. Real USDC revenue share. Solidarity Insurance. Seasonal economy. Lower fees. Sell = reset everything.",
      howItWorks: [
        "15% of all revenue distributed to holders in USDC",
        "Tiers: Fresh Dough → Rising → Master → Genesis Baker",
        "Higher tier = lower fees (3% → 1.5%), higher limits",
        "Seasonal economy: quarterly harvest distribution",
        "Sell = tier reset. Hold time restarts. Revenue stops.",
      ],
      color: "from-amber-400 to-yellow-500",
      borderColor: "border-amber-400/10",
      phase: "TOKEN VALUE",
    },
    {
      icon: Flame,
      title: "Deflationary Burn",
      description: "20% of revenue buys & burns permanently. Fixed supply. No minting. Your ownership grows automatically.",
      howItWorks: [
        "Every trade → 1-3% fee → 20% to buyback & burn",
        "MAYA bought from market → burn address → gone forever",
        "Total supply: 1B. Burns only reduce — nothing mints",
        "Year 5: 600M supply → your 0.10% becomes 0.167%",
        "67% ownership increase — zero effort, just hold",
      ],
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/10",
      phase: "TOKEN VALUE",
    },
    {
      icon: Landmark,
      title: "Commons Treasury",
      description: "15% of revenue auto-fills community treasury. Quadratic voting. Fund loans, grants, launchpad. Reputation-gated.",
      howItWorks: [
        "15% of revenue flows automatically",
        "Spending: quadratic voting — Power = √(tokens)",
        "Revenue-Based Financing: micro-loans, no interest",
        "Launchpad: propose → vote → fund → 15% revenue return",
        "Sybil-resistant: only completed trades = voting rights",
      ],
      color: "from-violet-500 to-purple-500",
      borderColor: "border-violet-500/10",
      phase: "GOVERNANCE",
    },
    {
      icon: Lock,
      title: "Security",
      description: "Squads multisig. Isolated escrow contracts. AI verification. 48h timelock. Progressive decentralization to full DAO.",
      howItWorks: [
        "Squads Protocol 3-of-5 multisig for treasury",
        "Each escrow = isolated smart contract",
        "AI verification before release",
        "48h timelock on transactions > $10,000",
        "Roadmap: multisig → governance → full DAO",
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
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/4 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/4 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
            📜 WHITEPAPER v3.0
          </motion.span>

          <h2 className="font-cinzel text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold to-cream">
              The Complete Blueprint
            </span>
          </h2>

          <p className="font-inter text-cream/50 max-w-3xl mx-auto text-base mb-4">
            Fifteen protocols across four layers. Marketplace, intelligence, community,
            and infrastructure — plus social network, distributed storage, and local AI.
            The complete civilization protocol.
          </p>
          <p className="font-inter text-gold/50 max-w-xl mx-auto text-sm italic">
            Click &ldquo;How it works&rdquo; on any card for step-by-step mechanics.
          </p>

          {/* Download */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.a
              href="/docs/whitepaper.md"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-amber text-black font-bold text-base shadow-lg shadow-gold/20"
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
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-gold/30 text-gold font-bold text-base hover:bg-gold/5 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-14 p-6 md:p-8 rounded-2xl glass-gold border border-gold/20"
        >
          <h3 className="font-cinzel text-lg font-bold text-cream text-center mb-6">Civilization Architecture</h3>

          <div className="space-y-2.5">
            {[
              { label: "INFRASTRUCTURE", bgOuter: "bg-rose-500/5 border-rose-500/15", textLabel: "text-rose-400", bgTag: "bg-rose-500/10 text-rose-300", items: ["Maya Agora", "Vault Network", "Maya Daemon", "Federated AI"] },
              { label: "COMMUNITY", bgOuter: "bg-emerald-500/5 border-emerald-500/15", textLabel: "text-emerald-400", bgTag: "bg-emerald-500/10 text-emerald-300", items: ["Guild Enterprise", "Solidarity Insurance", "Cross-Border", "Seasonal Economy"] },
              { label: "INTELLIGENCE", bgOuter: "bg-cyan-500/5 border-cyan-500/15", textLabel: "text-cyan-400", bgTag: "bg-cyan-500/10 text-cyan-300", items: ["Reputation (RaaS)", "Proof-of-Skill", "AI Agents", "Reputation Lending"] },
              { label: "CORE ENGINE", bgOuter: "bg-blue-500/5 border-blue-500/15", textLabel: "text-blue-400", bgTag: "bg-blue-500/10 text-blue-300", items: ["AI Escrow", "Production Bonds", "Holder Tiers", "Revenue Share"] },
              { label: "FOUNDATION", bgOuter: "bg-amber-500/5 border-amber-500/15", textLabel: "text-amber-400", bgTag: "bg-amber-500/10 text-amber-300", items: ["Buyback & Burn", "Commons Treasury", "Squads Security", "Fermentalist Manifesto"] },
            ].map((layer, i) => (
              <div key={i} className={`p-3.5 rounded-xl border ${layer.bgOuter}`}>
                <span className={`text-[10px] font-bold tracking-wider ${layer.textLabel}`}>{layer.label}</span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {layer.items.map((item, j) => (
                    <span key={j} className={`px-2.5 py-1 rounded-md text-[11px] font-medium ${layer.bgTag}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2.5 mt-5 text-cream/25 text-xs flex-wrap">
            <span>Trades</span>
            <ArrowRight className="w-3 h-3" />
            <span>Fees (1-3%)</span>
            <ArrowRight className="w-3 h-3" />
            <span className="text-green-400">50% Ops</span>
            <span>+</span>
            <span className="text-amber-400">15% Holders</span>
            <span>+</span>
            <span className="text-purple-400">15% Commons</span>
            <span>+</span>
            <span className="text-orange-400">20% Burn</span>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {sections.map((section, index) => (
            <ExpandableCard key={index} section={section} />
          ))}
        </motion.div>

        {/* Revenue Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 p-8 rounded-2xl glass-gold border border-gold/20"
        >
          <h3 className="font-cinzel text-xl font-bold text-cream text-center mb-6">
            Revenue Flow — Every Trade Powers the Civilization
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="text-center px-6 py-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <Zap className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <p className="text-blue-400 font-bold text-sm">MARKETPLACE</p>
              <p className="text-cream/40 text-xs mt-1">1-3% per trade</p>
            </div>

            <ArrowRight className="w-5 h-5 text-gold/30 rotate-90 md:rotate-0" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Operations", pct: "50%", colorBg: "bg-green-500/10", colorBorder: "border-green-500/20", colorText: "text-green-400" },
                { label: "Holders", pct: "15%", colorBg: "bg-amber-500/10", colorBorder: "border-amber-500/20", colorText: "text-amber-400" },
                { label: "Commons", pct: "15%", colorBg: "bg-purple-500/10", colorBorder: "border-purple-500/20", colorText: "text-purple-400" },
                { label: "Burn", pct: "20%", colorBg: "bg-orange-500/10", colorBorder: "border-orange-500/20", colorText: "text-orange-400" },
              ].map((item, i) => (
                <div key={i} className={`text-center px-4 py-3 rounded-xl ${item.colorBg} border ${item.colorBorder}`}>
                  <p className={`${item.colorText} font-bold text-lg`}>{item.pct}</p>
                  <p className={`${item.colorText} font-bold text-xs`}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-cream/35 text-sm mt-6">
            No tokens minted. No staking inflation. Real revenue from real trades.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
