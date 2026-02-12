"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Layers,
  Building,
  Crown,
  Server,
  Globe,
  Rocket,
  Users,
  Radio,
  ShieldCheck,
  Handshake,
  Store,
  Flame,
  BarChart3,
  Sparkles,
  CheckCircle2,
  Circle,
  Timer,
  Bot,
  GraduationCap,
  Fingerprint,
  Building2,
  Gem,
  HeartHandshake,
  MessageCircle,
  HardDrive,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { t } = useLanguage();

  const phases = [
    {
      phase: "PHASE I",
      title: t("roadmap.phase1.title"),
      subtitle: "Q1 2026",
      icon: Zap,
      status: "active" as const,
      color: "from-green-500 to-emerald-600",
      glowColor: "shadow-green-500/50",
      description: t("roadmap.phase1.desc"),
      milestones: [
        { icon: Rocket, text: "Fair launch on Pump.fun — no presale, no insiders", status: "completed" },
        { icon: Radio, text: "24/7 livestream — watch the starter breathe", status: "completed" },
        { icon: Users, text: "First 1,000 Founding Bakers community", status: "in-progress" },
        { icon: Sparkles, text: "Founding Baker NFT badges", status: "in-progress" },
        { icon: ShieldCheck, text: "Squads Protocol multisig treasury", status: "pending" },
      ],
      highlight: "🚀 Fair Launch on Pump.fun",
      stats: [
        { label: "Target Holders", value: "1,000+" },
        { label: "Community Goal", value: "5K" },
      ],
    },
    {
      phase: "PHASE II",
      title: t("roadmap.phase2.title"),
      subtitle: "Q2–Q3 2026",
      icon: Layers,
      status: "upcoming" as const,
      color: "from-blue-500 to-cyan-600",
      glowColor: "shadow-blue-500/50",
      description: t("roadmap.phase2.desc"),
      milestones: [
        { icon: Handshake, text: "AI-verified escrow marketplace MVP", status: "pending" },
        { icon: Store, text: "Production Bonds — sell future work, get funded today", status: "pending" },
        { icon: Gem, text: "Holder tier system with USDC revenue share", status: "pending" },
        { icon: BarChart3, text: "Revenue engine: 1-3% fee → burn + holders + commons", status: "pending" },
        { icon: Flame, text: "First buyback & burn from real marketplace revenue", status: "pending" },
      ],
      highlight: "🤝 Marketplace + Revenue Engine",
      stats: [
        { label: "Escrow Fee", value: "1-3%" },
        { label: "Holder Share", value: "15%" },
      ],
    },
    {
      phase: "PHASE III",
      title: t("roadmap.phase3.title"),
      subtitle: "Q4 2026 – Q1 2027",
      icon: Building,
      status: "upcoming" as const,
      color: "from-purple-500 to-violet-600",
      glowColor: "shadow-purple-500/50",
      description: t("roadmap.phase3.desc"),
      milestones: [
        { icon: Fingerprint, text: "Reputation Protocol (RaaS) — Web3 trust API", status: "pending" },
        { icon: GraduationCap, text: "Proof-of-Skill — on-chain credentials from real work", status: "pending" },
        { icon: Bot, text: "AI Agent Marketplace — agents that earn 24/7", status: "pending" },
        { icon: Users, text: "Reputation Lending — elder-to-newcomer mentorship", status: "pending" },
        { icon: ShieldCheck, text: "Full security audit by top-tier firm", status: "pending" },
      ],
      highlight: "🧠 Intelligence Layer",
      stats: [
        { label: "Trust API", value: "Live" },
        { label: "AI Agents", value: "∞" },
      ],
    },
    {
      phase: "PHASE IV",
      title: t("roadmap.phase4.title"),
      subtitle: "2027",
      icon: Crown,
      status: "future" as const,
      color: "from-gold to-amber-600",
      glowColor: "shadow-gold/50",
      description: t("roadmap.phase4.desc"),
      milestones: [
        { icon: Building2, text: "Guild Enterprise — decentralized teams for $50K+ contracts", status: "pending" },
        { icon: Globe, text: "Cross-Border Solidarity Network", status: "pending" },
        { icon: HeartHandshake, text: "Solidarity Insurance — community safety net", status: "pending" },
        { icon: Rocket, text: "Community Launchpad — fund projects from Commons", status: "pending" },
        { icon: Store, text: "Seasonal Economy — quarterly harvest & rewards", status: "pending" },
      ],
      highlight: "👑 Community Layer",
      stats: [
        { label: "Global Guilds", value: "100+" },
        { label: "Insurance Pool", value: "Active" },
      ],
    },
    {
      phase: "PHASE V",
      title: t("roadmap.phase5.title"),
      subtitle: "2028",
      icon: Server,
      status: "future" as const,
      color: "from-rose-500 to-pink-600",
      glowColor: "shadow-rose-500/50",
      description: t("roadmap.phase5.desc"),
      milestones: [
        { icon: MessageCircle, text: "Maya Agora — wallet-based decentralized social network", status: "pending" },
        { icon: HardDrive, text: "Maya Vault Network — community-owned distributed storage", status: "pending" },
        { icon: Bot, text: "Maya Daemon — local AI agents on every member's computer", status: "pending" },
        { icon: Server, text: "Federated Learning — collective intelligence, individual privacy", status: "pending" },
        { icon: ShieldCheck, text: "Full protocol decentralization — no single point of failure", status: "pending" },
      ],
      highlight: "🖥️ Infrastructure Layer",
      stats: [
        { label: "Storage Nodes", value: "10K+" },
        { label: "AI Daemons", value: "∞" },
      ],
    },
    {
      phase: "PHASE VI",
      title: t("roadmap.phase6.title"),
      subtitle: "2029 & Beyond",
      icon: Globe,
      status: "future" as const,
      color: "from-indigo-500 to-blue-600",
      glowColor: "shadow-indigo-500/50",
      description: t("roadmap.phase6.desc"),
      milestones: [
        { icon: Globe, text: "Network State — digital citizenship and economic sovereignty", status: "pending" },
        { icon: Fingerprint, text: "Cross-chain reputation portability", status: "pending" },
        { icon: Store, text: "Physical supply chain verification (IoT integration)", status: "pending" },
        { icon: Crown, text: "Self-sovereign community governance — full DAO", status: "pending" },
      ],
      highlight: "🌍 The Civilization",
      stats: [
        { label: "Global Bakers", value: "1M+" },
        { label: "Vision", value: "∞" },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      case "in-progress":
        return <Timer className="w-4 h-4 text-yellow-400 animate-pulse" />;
      default:
        return <Circle className="w-4 h-4 text-cream/25" />;
    }
  };

  const getPhaseStatus = (status: string) => {
    switch (status) {
      case "active":
        return (
          <span className="flex items-center gap-2 text-green-400 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            ACTIVE
          </span>
        );
      case "upcoming":
        return (
          <span className="flex items-center gap-2 text-blue-400 text-sm font-medium">
            <span className="w-2 h-2 bg-blue-400 rounded-full" />
            UPCOMING
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-2 text-gold/50 text-sm font-medium">
            <span className="w-2 h-2 bg-gold/50 rounded-full" />
            FUTURE
          </span>
        );
    }
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden" id="roadmap">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/4 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/4 rounded-full blur-[150px]" />
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
            ✨ {t("roadmap.subtitle")}
          </motion.span>

          <h2 className="font-cinzel text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold to-cream">
              {t("roadmap.title")}
            </span>
          </h2>

          <p className="font-inter text-cream/50 max-w-3xl mx-auto text-lg">
            Six phases. From a single jar to a digital civilization.
            Philosophy → Token → Marketplace → Intelligence → Community → Infrastructure.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent transform md:-translate-x-1/2" />

          {phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-8 mb-14 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center ${phase.glowColor} shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  animate={
                    phase.status === "active"
                      ? {
                          boxShadow: [
                            "0 0 20px rgba(74, 222, 128, 0.3)",
                            "0 0 40px rgba(74, 222, 128, 0.5)",
                            "0 0 20px rgba(74, 222, 128, 0.3)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <phase.icon className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-14" : "md:pl-14"}`}>
                <motion.div
                  className="relative p-7 rounded-2xl glass-gold border border-gold/15 hover:border-gold/30 transition-all duration-500"
                  whileHover={{ y: -4 }}
                >
                  {/* Phase Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-sm font-bold tracking-wider bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                          {phase.phase}
                        </span>
                        {getPhaseStatus(phase.status)}
                      </div>
                      <h3 className="font-cinzel text-2xl font-bold text-cream">
                        {phase.title}
                      </h3>
                      <p className="text-cream/40 text-sm mt-1">{phase.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-cream/60 mb-5 leading-relaxed text-sm">
                    {phase.description}
                  </p>

                  {/* Milestones */}
                  <div className="space-y-2.5 mb-5">
                    {phase.milestones.map((milestone, mIndex) => (
                      <motion.div
                        key={mIndex}
                        className="flex items-start gap-3 group"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + mIndex * 0.08 }}
                      >
                        <div className="mt-0.5">{getStatusIcon(milestone.status)}</div>
                        <div className="flex items-center gap-2">
                          <milestone.icon className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors" />
                          <span className={`text-sm ${
                            milestone.status === "completed"
                              ? "text-cream/85"
                              : milestone.status === "in-progress"
                              ? "text-cream/70"
                              : "text-cream/45"
                          }`}>
                            {milestone.text}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlight */}
                  <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${phase.color} bg-opacity-10 border border-white/10`}>
                    <span className="text-sm font-medium text-cream">{phase.highlight}</span>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6 mt-5 pt-5 border-t border-gold/10">
                    {phase.stats.map((stat, sIndex) => (
                      <div key={sIndex} className="text-center">
                        <p className="font-cinzel text-xl font-bold text-gold">{stat.value}</p>
                        <p className="text-xs text-cream/40">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty space */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
