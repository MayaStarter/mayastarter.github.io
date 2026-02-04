"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Shield, Flame, Lock, Coins, Check } from "lucide-react";
import ContractAddress from "./ContractAddress";
import { useLanguage } from "@/lib/LanguageContext";

export default function Tokenomics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const tokenomicsData = [
    {
      icon: Users,
      title: t("tokenomics.community.title"),
      value: t("tokenomics.community.value"),
      suffix: t("tokenomics.community.suffix"),
      description: t("tokenomics.community.desc"),
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Shield,
      title: t("tokenomics.tax.title"),
      value: t("tokenomics.tax.value"),
      suffix: t("tokenomics.tax.suffix"),
      description: t("tokenomics.tax.desc"),
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Flame,
      title: t("tokenomics.lp.title"),
      value: t("tokenomics.lp.value"),
      suffix: "",
      description: t("tokenomics.lp.desc"),
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Lock,
      title: t("tokenomics.renounced.title"),
      value: t("tokenomics.renounced.value"),
      suffix: t("tokenomics.renounced.suffix"),
      description: t("tokenomics.renounced.desc"),
      color: "from-purple-400 to-pink-500"
    }
  ];

  const features = [
    t("tokenomics.feature1"),
    t("tokenomics.feature2"),
    t("tokenomics.feature3"),
    t("tokenomics.feature4"),
    t("tokenomics.feature5"),
    t("tokenomics.feature6")
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(212, 175, 55, 0.1) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
            <Coins className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">{t("tokenomics.badge")}</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber to-gold mb-4">
            {t("tokenomics.title")}
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
          />
          
          <p className="text-cream/70 text-lg font-playfair max-w-2xl mx-auto">
            {t("tokenomics.subtitle")}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tokenomicsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.1,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full rounded-2xl overflow-hidden">
                  {/* Card Background */}
                  <div className="absolute inset-0 glass-gold" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                  
                  {/* Gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  
                  <div className="relative p-6 flex flex-col items-center text-center h-full">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-20 flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Value */}
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cream to-gold">
                        {item.value}
                      </span>
                      {item.suffix && (
                        <span className="text-xl text-gold/70 ml-1">{item.suffix}</span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-cinzel font-bold text-gold mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-cream/60 text-sm font-inter leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contract Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <ContractAddress 
            address="MAYA...Coming Soon"
            label={t("tokenomics.contract")}
          />
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass"
            >
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-cream/80 text-sm font-inter">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative"
        >
          <div className="relative p-8 rounded-2xl gradient-border overflow-hidden max-w-3xl mx-auto">
            <div className="absolute inset-[1px] bg-black/60 rounded-2xl backdrop-blur-sm" />
            
            <div className="relative text-center">
              <p className="text-xl md:text-2xl font-playfair text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold to-cream italic leading-relaxed">
                &ldquo;{t("tokenomics.quote")}&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
