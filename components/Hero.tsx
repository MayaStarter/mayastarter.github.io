"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Flame } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-gold/20"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: {
                duration: 30 + i * 10,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      {/* Central Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, rgba(255, 191, 0, 0.15) 30%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* The Genesis Jar - Main Image */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative z-10 mb-8"
      >
        <motion.div
          className="relative"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Image Glow Effect */}
          <div className="absolute inset-0 blur-3xl bg-gold/30 rounded-full scale-75" />
          
          {/* Main Jar Image */}
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
            <Image
              src="/genesis-jar.png"
              alt="The Genesis Starter - Mystical Sourdough Jar"
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.5)]"
              priority
            />
          </div>
          
          {/* Floating Particles around the jar */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gold/60"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Floating Icons */}
          <motion.div
            className="absolute -top-2 -right-2 w-12 h-12 rounded-full glass-gold flex items-center justify-center"
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap className="w-6 h-6 text-gold" />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full glass-gold flex items-center justify-center"
            animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Flame className="w-6 h-6 text-amber" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Title with Animated Gradient */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber to-gold text-center mb-2">
          THE GENESIS STARTER
        </h1>
        <motion.div
          className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-cinzel font-bold text-gold/20 blur-2xl text-center pointer-events-none"
          aria-hidden="true"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          THE GENESIS STARTER
        </motion.div>
      </motion.div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
        className="w-48 h-px bg-gradient-to-r from-transparent via-gold to-transparent my-6"
      />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        className="text-xl md:text-2xl lg:text-3xl font-playfair text-cream/90 text-center mb-12 max-w-3xl"
      >
        {t("hero.subtitle1")} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber font-semibold">
          {t("hero.subtitle2")}
        </span>
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        className="flex flex-col sm:flex-row gap-6"
      >
        <motion.a
          href="https://pump.fun"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-5 overflow-hidden rounded-xl text-lg font-bold"
          aria-label="Enter the Bakery - Buy MAYA on Pump.fun"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gold via-amber to-gold transition-all duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-amber via-gold to-amber" />
          <span className="relative text-background flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            {t("hero.cta.bakery")}
          </span>
          <motion.div
            className="absolute inset-0 shimmer"
            style={{ mixBlendMode: "overlay" }}
          />
        </motion.a>
        
        <motion.a
          href="#live-feed"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-5 overflow-hidden rounded-xl text-lg font-bold"
          aria-label="Watch the fermentation ritual live"
        >
          <div className="absolute inset-0 gradient-border rounded-xl" />
          <div className="absolute inset-[1px] bg-black/80 rounded-xl backdrop-blur-sm" />
          <span className="relative text-gold flex items-center gap-2 group-hover:text-amber transition-colors">
            <Flame className="w-5 h-5" />
            {t("hero.cta.watch")}
          </span>
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-gold/50 flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-gold"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
