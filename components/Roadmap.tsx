"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplet, TrendingUp, Flame, Crown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const phases = [
    {
      icon: Droplet,
      title: t("roadmap.phase1.title"),
      subtitle: t("roadmap.phase1.subtitle"),
      description: t("roadmap.phase1.desc"),
      status: t("roadmap.phase1.status"),
      isActive: true,
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: t("roadmap.phase2.title"),
      subtitle: t("roadmap.phase2.subtitle"),
      description: t("roadmap.phase2.desc"),
      status: t("roadmap.phase2.status"),
      isActive: false,
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Flame,
      title: t("roadmap.phase3.title"),
      subtitle: t("roadmap.phase3.subtitle"),
      description: t("roadmap.phase3.desc"),
      status: t("roadmap.phase3.status"),
      isActive: false,
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Crown,
      title: t("roadmap.phase4.title"),
      subtitle: t("roadmap.phase4.subtitle"),
      description: t("roadmap.phase4.desc"),
      status: t("roadmap.phase4.status"),
      isActive: false,
      color: "from-gold to-amber"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], x: [-50, 0, -50] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.5, ease: [0.22, 0.61, 0.36, 1] }}
        className="max-w-6xl w-full relative z-10"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber to-gold mb-4">
            {t("roadmap.title")}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
          />
          <p className="text-cream/70 text-lg font-playfair max-w-2xl mx-auto">
            {t("roadmap.subtitle")}
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Horizontal Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          
          <div className="grid grid-cols-4 gap-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + index * 0.15,
                    ease: [0.22, 0.61, 0.36, 1]
                  }}
                  className="relative"
                >
                  {/* Connector Node */}
                  <div className="flex justify-center mb-6">
                    <motion.div
                      className={`relative w-20 h-20 rounded-2xl flex items-center justify-center ${
                        phase.isActive ? 'pulse-glow' : ''
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      style={{
                        background: `linear-gradient(135deg, ${phase.isActive ? 'rgba(212, 175, 55, 0.3)' : 'rgba(212, 175, 55, 0.1)'} 0%, rgba(0, 0, 0, 0.5) 100%)`,
                        border: `2px solid ${phase.isActive ? 'rgba(212, 175, 55, 0.8)' : 'rgba(212, 175, 55, 0.3)'}`,
                      }}
                    >
                      <Icon className={`w-10 h-10 ${phase.isActive ? 'text-gold' : 'text-gold/60'}`} />
                      
                      {/* Active indicator */}
                      {phase.isActive && (
                        <motion.div
                          className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Arrow */}
                  {index < phases.length - 1 && (
                    <div className="absolute top-[4.5rem] right-0 translate-x-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-gold/30" />
                    </div>
                  )}

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group relative rounded-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0 glass-gold" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                    
                    <div className="relative p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-gold/60 uppercase tracking-wider">
                          {phase.subtitle}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          phase.isActive 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-gold/10 text-gold/70'
                        }`}>
                          {phase.status}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-cinzel font-bold text-gold mb-3">
                        {phase.title}
                      </h3>
                      
                      <p className="text-cream/70 font-playfair text-sm leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/50 via-gold/30 to-gold/10" />
          
          <div className="space-y-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + index * 0.15,
                    ease: [0.22, 0.61, 0.36, 1]
                  }}
                  className="relative flex gap-6"
                >
                  {/* Node */}
                  <motion.div
                    className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${
                      phase.isActive ? 'pulse-glow' : ''
                    }`}
                    whileHover={{ scale: 1.1 }}
                    style={{
                      background: `linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%)`,
                      border: `2px solid ${phase.isActive ? 'rgba(212, 175, 55, 0.8)' : 'rgba(212, 175, 55, 0.3)'}`,
                    }}
                  >
                    <Icon className={`w-8 h-8 ${phase.isActive ? 'text-gold' : 'text-gold/60'}`} />
                  </motion.div>

                  {/* Card */}
                  <div className="flex-1 p-5 rounded-xl glass-gold">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gold/60 uppercase">
                        {phase.subtitle}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        phase.isActive 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-gold/10 text-gold/70'
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-cinzel font-bold text-gold mb-2">
                      {phase.title}
                    </h3>
                    
                    <p className="text-cream/70 font-playfair text-sm">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
