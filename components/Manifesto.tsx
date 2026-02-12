"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wheat, Sparkles, Infinity, Fingerprint, Sprout } from "lucide-react";

export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const doctrines = [
    {
      number: "I",
      title: "Dough is Not Dust",
      subtitle: "Hamur Toz Değildir",
      icon: Wheat,
      color: "from-amber-500 to-yellow-600",
      text: "Value rises through labor and time. We don't worship speculation — we worship production.",
    },
    {
      number: "II",
      title: "The Symbiotic Sovereign",
      subtitle: "Simbiyotik Egemenlik",
      icon: Sparkles,
      color: "from-purple-500 to-violet-600",
      text: "When you earn, the protocol burns. When the protocol grows, your reputation rises. Symbiosis, not zero-sum.",
    },
    {
      number: "III",
      title: "Circular Time, Infinite Value",
      subtitle: "Döngüsel Zaman, Sonsuz Değer",
      icon: Infinity,
      color: "from-cyan-500 to-teal-500",
      text: "Earnings → Treasury → Buyback → New Work → Earnings. Value ferments within, growing richer cycle by cycle.",
    },
    {
      number: "IV",
      title: "Reputation is Soul",
      subtitle: "İtibar Ruhtur",
      icon: Fingerprint,
      color: "from-gold to-amber-500",
      text: "Tokens fly from wallet to wallet. Your Soulbound Reputation is yours alone. Trust is proven, not assumed.",
    },
    {
      number: "V",
      title: "The Eternal Starter",
      subtitle: "Ebedi Başlangıç",
      icon: Sprout,
      color: "from-emerald-500 to-green-600",
      text: "Civilization is not a destination — it's a beginning renewed every day. Every new member brings fresh culture to the colony.",
    },
  ];

  return (
    <section ref={ref} id="manifesto" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-gold/5 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <motion.span className="inline-block px-4 py-2 rounded-full glass-gold text-gold text-sm font-medium tracking-wider mb-6">
            🏛️ FERMENTALIST MANIFESTO
          </motion.span>

          <h2 className="font-cinzel text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold to-cream">
              Five Doctrines of the New Age
            </span>
          </h2>

          <p className="font-inter text-cream/50 max-w-2xl mx-auto text-base">
            Not a whitepaper — a belief system. Not a token — a civilization.
          </p>
        </motion.div>

        {/* Doctrines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctrines.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className="p-6 rounded-xl glass-gold border border-gold/15 hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${d.color} flex items-center justify-center`}>
                  <d.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className={`font-cinzel text-xs font-bold bg-gradient-to-r ${d.color} bg-clip-text text-transparent`}>
                    DOCTRINE {d.number}
                  </span>
                  <h3 className="font-cinzel text-base font-bold text-cream leading-tight">{d.title}</h3>
                </div>
              </div>
              <p className="text-cream/50 text-sm leading-relaxed">{d.text}</p>
              <p className="text-gold/30 text-xs mt-2 italic">{d.subtitle}</p>
            </motion.div>
          ))}

          {/* Sixth card — The Oath */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="p-6 rounded-xl border border-gold/20 bg-gradient-to-br from-gold/5 to-amber-500/5 flex flex-col justify-center text-center"
          >
            <p className="font-cinzel text-lg text-gold/80 italic mb-2">
              &ldquo;Keeper of the Starter.<br />Baker of the New Age.&rdquo;
            </p>
            <p className="text-cream/30 text-xs">The Founding Oath</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
