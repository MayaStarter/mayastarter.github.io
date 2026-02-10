'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Crown,
  Shield,
  TrendingUp,
  Flame,
  Clock,
  Star,
  BadgeCheck,
  Lock,
  DollarSign,
  Percent,
  ChevronRight,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

interface HolderTier {
  name: string;
  emoji: string;
  requirement: string;
  holdTime: string;
  color: string;
  borderColor: string;
  bgGlow: string;
  benefits: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export default function HolderBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const tiers: HolderTier[] = [
    {
      name: "Fresh Dough",
      emoji: "🫓",
      requirement: "Hold any amount",
      holdTime: "Day 1",
      color: "text-stone-400",
      borderColor: "border-stone-500/30",
      bgGlow: "from-stone-500/10 to-stone-600/5",
      icon: Star,
      benefits: [
        "Marketplace access (when live)",
        "Community channels",
        "Reputation NFT minting",
      ],
    },
    {
      name: "Rising Baker",
      emoji: "🍞",
      requirement: "30 days + 100$ held",
      holdTime: "30 Days",
      color: "text-amber-600",
      borderColor: "border-amber-600/30",
      bgGlow: "from-amber-600/10 to-amber-700/5",
      icon: Shield,
      benefits: [
        "Early beta access to marketplace",
        "Reputation NFT starting boost",
        "Escrow fee: 2.5% (instead of 3%)",
        "Bond creation rights",
      ],
    },
    {
      name: "Master Baker",
      emoji: "👨‍🍳",
      requirement: "90 days + 500$ held",
      holdTime: "90 Days",
      color: "text-amber-400",
      borderColor: "border-amber-400/30",
      bgGlow: "from-amber-400/10 to-amber-500/5",
      icon: BadgeCheck,
      benefits: [
        "Escrow fee: 2% (instead of 3%)",
        "Higher bond limits ($2,000)",
        "Guild creation & leadership rights",
        "Revenue share eligibility",
        "DAO voting rights (Commons Treasury)",
      ],
    },
    {
      name: "Genesis Baker",
      emoji: "👑",
      requirement: "Held since launch",
      holdTime: "Since Genesis",
      color: "text-gold",
      borderColor: "border-gold/40",
      bgGlow: "from-gold/15 to-amber-500/5",
      icon: Crown,
      benefits: [
        "All Master Baker benefits",
        "Exclusive Genesis Badge (never issued again)",
        "Priority Commons Treasury funding",
        "Escrow fee: 1.5%",
        "Bond limit: $5,000+",
        "Launchpad proposal rights",
        "Platform governance veto (critical decisions)",
      ],
    },
  ];

  const revenueBreakdown = [
    { label: "Operations", value: "50%", color: "bg-green-500", width: "w-[50%]" },
    { label: "Commons Treasury", value: "15%", color: "bg-purple-500", width: "w-[15%]" },
    { label: "Holder Revenue Share", value: "15%", color: "bg-gold", width: "w-[15%]" },
    { label: "Buyback & Burn", value: "20%", color: "bg-orange-500", width: "w-[20%]" },
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden" id="holder-benefits">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[150px]" />
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
            💎 WHY HOLD $MAYA
          </motion.span>

          <h2 className="font-cinzel text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold to-cream">
              LOYALTY HAS REAL VALUE
            </span>
          </h2>

          <p className="font-inter text-cream/60 max-w-3xl mx-auto text-lg">
            We don&apos;t bribe you with airdrops. We don&apos;t inflate your holdings with fake staking rewards.
            Instead, loyal holders earn <span className="text-gold font-semibold">real revenue share</span>,{" "}
            <span className="text-gold font-semibold">lower fees</span>, and{" "}
            <span className="text-gold font-semibold">exclusive access</span> — all growing as the marketplace grows.
          </p>
        </motion.div>

        {/* Tier Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${tier.bgGlow} border ${tier.borderColor} hover:border-gold/40 transition-all duration-500`}
            >
              {/* Tier Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{tier.emoji}</span>
                <div>
                  <h3 className={`font-cinzel text-lg font-bold ${tier.color}`}>{tier.name}</h3>
                  <p className="text-cream/40 text-xs font-medium">{tier.requirement}</p>
                </div>
              </div>

              {/* Hold Time Badge */}
              <div className="flex items-center gap-2 mb-5 px-3 py-1.5 rounded-lg bg-black/30 w-fit">
                <Clock className="w-3 h-3 text-cream/40" />
                <span className="text-cream/50 text-xs font-medium">{tier.holdTime}</span>
              </div>

              {/* Benefits */}
              <ul className="space-y-2.5">
                {tier.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-2 text-sm text-cream/60">
                    <ChevronRight className={`w-3 h-3 mt-1 flex-shrink-0 ${tier.color}`} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Glow effect for Genesis */}
              {index === 3 && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Revenue Share Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16 p-8 md:p-10 rounded-2xl glass-gold border border-gold/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-6 h-6 text-gold" />
            <h3 className="font-cinzel text-2xl font-bold text-cream">Revenue Share Model</h3>
          </div>

          <p className="text-cream/50 text-sm mb-8 max-w-2xl">
            Every escrow trade generates 1-3% fee revenue. This real income is split between operations,
            community, holders, and permanent burn. <span className="text-gold">No tokens are minted — ever.</span>
          </p>

          {/* Revenue Bar */}
          <div className="mb-6">
            <div className="flex w-full h-8 rounded-full overflow-hidden">
              {revenueBreakdown.map((item, i) => (
                <div
                  key={i}
                  className={`${item.color} ${item.width} flex items-center justify-center text-xs font-bold text-black/80`}
                >
                  {item.value}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {revenueBreakdown.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-cream/50 text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Holder Revenue Example */}
          <div className="mt-8 p-5 rounded-xl bg-gold/5 border border-gold/10">
            <div className="flex items-center gap-2 mb-3">
              <Percent className="w-4 h-4 text-gold" />
              <p className="text-gold font-semibold text-sm">Holder Revenue Share — Paid in USDC</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-cream/40 text-xs mb-1">Early Stage (10K$/mo GMV)</p>
                <p className="text-cream/70 font-medium">~$15/month pool</p>
              </div>
              <div>
                <p className="text-cream/40 text-xs mb-1">Growth (1M$/mo GMV)</p>
                <p className="text-cream/70 font-medium">~$3,000/month pool</p>
              </div>
              <div>
                <p className="text-cream/40 text-xs mb-1">Scale (100M$/mo GMV)</p>
                <p className="text-cream/70 font-medium">~$180,000/month pool</p>
              </div>
            </div>
            <p className="text-cream/40 text-xs mt-3">
              Distributed proportionally by tier weight. Higher tier = larger share. Sell = reset to Fresh Dough.
            </p>
          </div>
        </motion.div>

        {/* Burn Math Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="p-8 md:p-10 rounded-2xl glass-gold border border-gold/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Flame className="w-6 h-6 text-orange-400" />
            <h3 className="font-cinzel text-2xl font-bold text-cream">Deflationary Math</h3>
          </div>

          <p className="text-cream/50 text-sm mb-8 max-w-2xl">
            20% of all revenue buys MAYA from the open market and burns it permanently.
            Your share of the total supply goes up — <span className="text-gold">without you doing anything</span>.
          </p>

          {/* Supply Reduction Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[
              { year: "Launch", supply: "1,000,000,000", pct: "100%", your: "0.10%" },
              { year: "Year 1", supply: "~997,600,000", pct: "99.76%", your: "0.1002%" },
              { year: "Year 3", supply: "~760,000,000", pct: "76%", your: "0.1316%" },
              { year: "Year 5", supply: "~600,000,000", pct: "60%", your: "0.1667%" },
            ].map((item, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-black/30 border border-cream/5">
                <p className="text-cream/40 text-xs mb-1">{item.year}</p>
                <p className="text-cream/70 font-mono text-sm font-medium">{item.supply}</p>
                <div className="my-2">
                  <div className="w-full bg-cream/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all"
                      style={{ width: item.pct }}
                    />
                  </div>
                </div>
                <p className="text-xs">
                  <span className="text-cream/40">Your share: </span>
                  <span className="text-gold font-medium">{item.your}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/10">
            <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
            <p className="text-cream/60 text-sm">
              With 1M MAYA held: your ownership grows from <span className="text-green-400 font-semibold">0.10%</span> to{" "}
              <span className="text-green-400 font-semibold">0.1667%</span> — a{" "}
              <span className="text-green-400 font-semibold">67% increase</span> just by holding.
              No staking. No locking. No inflation. Just math.
            </p>
          </div>
        </motion.div>

        {/* Sell = Reset Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 p-6 rounded-xl border border-red-500/20 bg-red-500/5 flex items-start gap-4"
        >
          <Lock className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-red-400 font-bold text-sm mb-1">Sell = Reset</h4>
            <p className="text-cream/50 text-sm">
              If you sell your MAYA, your tier resets to Fresh Dough. Hold time restarts from zero.
              Revenue share stops. Genesis Badge? Gone forever — it will never be issued again.
              Loyalty is rewarded. Paper hands pay the price.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
