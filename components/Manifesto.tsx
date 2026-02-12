"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wheat, Sparkles, Infinity, Fingerprint, Sprout, ScrollText } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] as const },
  },
} as const;

export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const doctrines = [
    {
      number: "I",
      latin: "Dough is Not Dust",
      title: "Hamur Toz Değildir",
      icon: Wheat,
      color: "from-amber-500 to-yellow-600",
      borderColor: "border-amber-500/20",
      text: "Value is not created from nothing — it rises through labor and time. Speculative economies scatter like dust in the wind. The MAYA economy is living dough: it has mass, it has volume, and it grows only when kneaded. We don't worship speculation. We worship production.",
    },
    {
      number: "II",
      latin: "The Symbiotic Sovereign",
      title: "Simbiyotik Egemenlik",
      icon: Sparkles,
      color: "from-purple-500 to-violet-600",
      borderColor: "border-purple-500/20",
      text: "No starter culture rises alone. Bacteria and yeast coexist in symbiosis. Individual success cannot be separated from protocol success. When you earn, the protocol burns. When the protocol grows, your reputation rises. This is not a zero-sum game — it is symbiosis where everyone wins.",
    },
    {
      number: "III",
      latin: "Circular Time, Infinite Value",
      title: "Döngüsel Zaman, Sonsuz Değer",
      icon: Infinity,
      color: "from-cyan-500 to-teal-500",
      borderColor: "border-cyan-500/20",
      text: "Time is not linear consumption — it is cyclical investment. Like the ancient Maya calendars, the MAYA economy is circular: Earnings → Treasury → Buyback → New Work → Earnings. Value doesn't leak out of the system. It ferments within, growing richer with every cycle.",
    },
    {
      number: "IV",
      latin: "Reputation is Soul, Token is Skin",
      title: "İtibar Ruhtur, Token Deridir",
      icon: Fingerprint,
      color: "from-gold to-amber-500",
      borderColor: "border-gold/20",
      text: "Wealth can change hands, but integrity is etched into the soul. Tokens fly from wallet to wallet, but your Soulbound Reputation is yours alone. In the Maya civilization, your word is worth more than any coin. We don't build a world where trust is unnecessary — we build a world where trust is proven.",
    },
    {
      number: "V",
      latin: "The Eternal Starter",
      title: "Ebedi Başlangıç",
      icon: Sprout,
      color: "from-emerald-500 to-green-600",
      borderColor: "border-emerald-500/20",
      text: "Civilization is not a destination — it is a beginning renewed every day. Every new member brings a fresh starter culture to the colony. Global solidarity grows stronger as each nation adds its local wisdom — its flour — to the communal dough.",
    },
  ];

  const constitutionArticles = [
    "I produce before I speculate. My value comes from work, not from waiting.",
    "I honor my commitments. Every contract signed is a promise kept.",
    "I build reputation through action. My word is my bond — on-chain and off.",
    "I contribute to the commons. What I take, I give back tenfold.",
    "I welcome all bakers. No origin, no background, no identity excludes anyone from the table.",
  ];

  return (
    <section ref={ref} id="manifesto" className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 70%)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass-gold text-gold text-sm font-medium tracking-wider mb-6"
            whileHover={{ scale: 1.05 }}
          >
            🏛️ THE FERMENTALIST MANIFESTO
          </motion.span>

          <h2 className="font-cinzel text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold to-cream">
              Five Doctrines of the New Age
            </span>
          </h2>

          <p className="font-inter text-cream/50 max-w-3xl mx-auto text-lg">
            Where ancient Maya wisdom meets biological fermentation.
            Not a whitepaper — a belief system. Not a token — a civilization.
          </p>
        </motion.div>

        {/* Doctrines */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6 mb-24"
        >
          {doctrines.map((doctrine, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className={`relative p-8 md:p-10 rounded-2xl glass-gold border ${doctrine.borderColor} hover:border-gold/30 transition-all duration-500 overflow-hidden`}>
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${doctrine.color}`} />

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Number + Icon */}
                  <div className="flex md:flex-col items-center gap-3 md:gap-2 flex-shrink-0 md:w-20">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${doctrine.color} flex items-center justify-center`}>
                      <doctrine.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`font-cinzel text-2xl font-bold bg-gradient-to-r ${doctrine.color} bg-clip-text text-transparent`}>
                      {doctrine.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-cinzel text-xl md:text-2xl font-bold text-cream mb-1">
                      &ldquo;{doctrine.latin}&rdquo;
                    </h3>
                    <p className="text-gold/60 text-sm font-medium mb-4 italic">
                      {doctrine.title}
                    </p>
                    <p className="text-cream/60 leading-relaxed">
                      {doctrine.text}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* The Sourdough Constitution */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="p-8 md:p-12 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/5 via-transparent to-amber-500/5">
            {/* Constitution Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <ScrollText className="w-6 h-6 text-gold" />
                <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber to-gold">
                  The Sourdough Constitution
                </h3>
                <ScrollText className="w-6 h-6 text-gold" />
              </div>
              <p className="text-cream/40 text-sm max-w-xl mx-auto">
                Every wallet that connects accepts these articles.
                This is not a terms of service — it is a civilization&apos;s founding oath.
              </p>
            </div>

            {/* Articles */}
            <div className="space-y-4 max-w-3xl mx-auto">
              {constitutionArticles.map((article, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <span className="font-cinzel text-sm font-bold text-gold">{i + 1}</span>
                  </div>
                  <p className="text-cream/70 font-playfair text-lg leading-relaxed pt-1.5 group-hover:text-cream/90 transition-colors">
                    &ldquo;{article}&rdquo;
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Oath */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 pt-8 border-t border-gold/10 text-center"
            >
              <p className="font-cinzel text-xl text-gold/80 italic mb-3">
                &ldquo;Keeper of the Starter. Baker of the New Age.&rdquo;
              </p>
              <p className="text-cream/30 text-sm">
                Those who sign are not users — they are citizens of a new civilization.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
