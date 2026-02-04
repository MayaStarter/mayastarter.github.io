"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Wheat, DollarSign, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const manifestoItems = [
    {
      icon: Wheat,
      question: t("manifesto.why.sourdough.q"),
      answer: t("manifesto.why.sourdough.a"),
      highlight: t("manifesto.why.sourdough.h")
    },
    {
      icon: DollarSign,
      question: t("manifesto.why.now.q"),
      answer: t("manifesto.why.now.a"),
      highlight: t("manifesto.why.now.h")
    },
    {
      icon: Sparkles,
      question: t("manifesto.why.maya.q"),
      answer: t("manifesto.why.maya.a"),
      highlight: t("manifesto.why.maya.h")
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255, 191, 0, 0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.5, ease: [0.22, 0.61, 0.36, 1] }}
        className="max-w-5xl relative z-10"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber to-gold mb-4">
            {t("manifesto.title")}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
          />
        </motion.div>

        {/* Manifesto Cards */}
        <div className="space-y-8">
          {manifestoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 1, delay: 0.3 + index * 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl glass-gold overflow-hidden">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                  
                  {/* Icon */}
                  <div className="flex items-start gap-6">
                    <motion.div
                      className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-amber/10 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon className="w-7 h-7 text-gold" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-cinzel font-bold text-gold mb-3">
                        {item.question}
                      </h3>
                      <p className="text-cream/80 font-playfair text-lg leading-relaxed">
                        {item.answer}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber font-semibold italic">
                          {item.highlight}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-16 relative"
        >
          <div className="relative p-10 rounded-2xl gradient-border overflow-hidden">
            <div className="absolute inset-[1px] bg-black/60 rounded-2xl backdrop-blur-sm" />
            
            <div className="relative flex items-start gap-4">
              <Quote className="w-12 h-12 text-gold/50 flex-shrink-0" />
              <div>
                <p className="text-2xl md:text-3xl font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-gold via-cream to-gold italic leading-relaxed">
                  &ldquo;{t("manifesto.quote")}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
