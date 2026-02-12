"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ScrollText,
  Coins,
  Handshake,
  Fingerprint,
  Users,
  Landmark,
  Server,
  ArrowUp,
} from "lucide-react";

const layers = [
  {
    level: 6,
    label: "INFRASTRUCTURE",
    title: "Maya Agora · Vault Network · Daemon AI",
    subtitle: "Your own social network. Your own servers. Your own AI.",
    icon: Server,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-500/8",
    borderColor: "border-rose-500/20",
    textColor: "text-rose-400",
    width: "w-[55%]",
    items: ["Decentralized Social Network", "Distributed Storage", "Local AI Agents", "Federated Learning"],
  },
  {
    level: 5,
    label: "INVESTMENT",
    title: "Commons Treasury · Launchpad · Revenue Finance",
    subtitle: "Community funds community. No VCs. No gatekeepers.",
    icon: Landmark,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-500/8",
    borderColor: "border-violet-500/20",
    textColor: "text-violet-400",
    width: "w-[62%]",
    items: ["Quadratic Voting Treasury", "Community Launchpad", "Revenue-Based Financing", "Cross-Border Corridors"],
  },
  {
    level: 4,
    label: "COMMUNITY",
    title: "Guilds · Insurance · Culture Vault",
    subtitle: "Loncalar kurulur. Dayanışma sigortası çalışır. Tarih yazılır.",
    icon: Users,
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-500/8",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-400",
    width: "w-[70%]",
    items: ["Guild Enterprise Protocol", "Solidarity Insurance", "Culture Vault", "Seasonal Economy"],
  },
  {
    level: 3,
    label: "TRUST",
    title: "Reputation · Proof-of-Skill · RaaS",
    subtitle: "Web3's trust layer. Portable. Soulbound. Proven.",
    icon: Fingerprint,
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-500/8",
    borderColor: "border-cyan-500/20",
    textColor: "text-cyan-400",
    width: "w-[78%]",
    items: ["Soulbound Reputation NFT", "Proof-of-Skill Credentials", "Reputation Lending", "RaaS Open API"],
  },
  {
    level: 2,
    label: "MARKETPLACE",
    title: "Escrow · Bonds · AI Agents",
    subtitle: "Trade with trust. Get funded without debt. Earn while you sleep.",
    icon: Handshake,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/8",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-400",
    width: "w-[86%]",
    items: ["AI-Verified Escrow", "Production Bonds", "AI Agent Marketplace", "Mentorship Market"],
  },
  {
    level: 1,
    label: "TOKEN",
    title: "$MAYA · Fair Launch · Revenue Share",
    subtitle: "Real revenue. Real burn. Real loyalty tiers.",
    icon: Coins,
    color: "from-gold to-amber-600",
    bgColor: "bg-gold/8",
    borderColor: "border-gold/20",
    textColor: "text-gold",
    width: "w-[93%]",
    items: ["Holder Tier System", "USDC Revenue Share", "Buyback & Burn", "Seasonal Rewards"],
  },
  {
    level: 0,
    label: "PHILOSOPHY",
    title: "Fermentalist Manifesto · Constitution",
    subtitle: "Not a whitepaper. A belief system.",
    icon: ScrollText,
    color: "from-amber-700 to-stone-700",
    bgColor: "bg-amber-900/10",
    borderColor: "border-amber-700/20",
    textColor: "text-amber-600",
    width: "w-full",
    items: ["5 Doctrines", "Sourdough Constitution", "Civilization Oath", "Community Self-Governance"],
  },
];

export default function CivilizationStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 px-4 overflow-hidden" id="civilization">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold/4 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/4 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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
            🏗️ THE CIVILIZATION STACK
          </motion.span>

          <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold to-cream">
              Seven Layers. One Living Organism.
            </span>
          </h2>

          <p className="font-inter text-cream/50 max-w-2xl mx-auto text-base">
            From philosophy to infrastructure — every layer feeds the next.
            A complete civilization protocol, built from the ground up.
          </p>
        </motion.div>

        {/* Pyramid Stack */}
        <div className="flex flex-col items-center gap-3">
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              className={`${layer.width} transition-all duration-300`}
            >
              <div className={`relative p-5 md:p-6 rounded-xl ${layer.bgColor} border ${layer.borderColor} hover:border-gold/30 transition-all duration-500 group`}>
                {/* Layer Level Badge */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0`}>
                    <layer.icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold tracking-wider ${layer.textColor}`}>
                        LAYER {layer.level}
                      </span>
                      <span className={`text-[10px] font-bold tracking-wider ${layer.textColor} opacity-60`}>
                        — {layer.label}
                      </span>
                    </div>
                    <h3 className="font-cinzel text-sm md:text-base font-bold text-cream truncate">
                      {layer.title}
                    </h3>
                  </div>
                </div>

                {/* Items */}
                <div className="flex flex-wrap gap-1.5">
                  {layer.items.map((item, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 rounded-md ${layer.bgColor} border ${layer.borderColor} text-[11px] font-medium ${layer.textColor} opacity-70 group-hover:opacity-100 transition-opacity`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growth Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col items-center mt-8 gap-2"
        >
          <ArrowUp className="w-5 h-5 text-gold/30" />
          <p className="text-cream/30 text-xs tracking-wider uppercase">
            Each layer feeds the next — fermentation never stops
          </p>
        </motion.div>
      </div>
    </section>
  );
}
