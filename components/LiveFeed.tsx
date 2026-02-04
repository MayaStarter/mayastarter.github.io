"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Activity, Thermometer, Users, Radio, Clock, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function LiveFeed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  // Simulated live data
  const [phLevel, setPhLevel] = useState(5.2);
  const [temperature, setTemperature] = useState(28);
  const [holders, setHolders] = useState(1247);
  const [fermentationHours, setFermentationHours] = useState(168);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhLevel(prev => +(Math.max(4.0, Math.min(6.0, prev + (Math.random() - 0.5) * 0.1))).toFixed(1));
      setTemperature(prev => +(Math.max(24, Math.min(32, prev + (Math.random() - 0.5) * 0.5))).toFixed(1));
      setHolders(prev => prev + Math.floor(Math.random() * 3));
      setFermentationHours(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { icon: Activity, label: t("live.ph"), value: phLevel.toString(), color: "from-green-400 to-emerald-500" },
    { icon: Thermometer, label: t("live.temp"), value: `${temperature}°C`, color: "from-orange-400 to-red-500" },
    { icon: Users, label: t("live.holders"), value: holders.toLocaleString(), color: "from-gold to-amber" },
    { icon: Clock, label: t("live.fermentation"), value: `${fermentationHours}h`, color: "from-purple-400 to-pink-500" },
  ];

  return (
    <section id="live-feed" ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.5, ease: [0.22, 0.61, 0.36, 1] }}
        className="max-w-7xl w-full relative z-10"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-gold mb-6">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-red-500"
            />
            <span className="text-gold font-semibold">{t("live.badge")}</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber to-gold mb-4">
            {t("live.title")}
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
          />
          
          <p className="text-cream/80 text-lg font-playfair max-w-2xl mx-auto">
            {t("live.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Feed Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden gradient-border">
              <div className="absolute inset-[1px] rounded-2xl bg-black/80" />
              <div className="relative aspect-video flex items-center justify-center p-8">
                {/* Placeholder with animated elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-32 h-32 rounded-full border-2 border-gold/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute w-24 h-24 rounded-full border border-amber/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <Radio className="absolute w-12 h-12 text-gold/50" />
                </div>
                
                <div className="relative text-center">
                  <p className="text-cream/50 font-playfair text-xl mb-2">
                    {t("live.stream")}
                  </p>
                  <p className="text-gold/70 text-sm">
                    {t("live.comingSoon")}
                  </p>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/50 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/50 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/50 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/50 rounded-br-lg" />
              </div>
            </div>
          </motion.div>

          {/* Live Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="space-y-4"
          >
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: -5 }}
                  className="group relative p-5 rounded-xl glass-gold overflow-hidden"
                >
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                  
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} bg-opacity-20 flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-cream/60 text-sm font-inter">{metric.label}</p>
                        <motion.p
                          key={metric.value}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-2xl font-bold text-cream"
                        >
                          {metric.value}
                        </motion.p>
                      </div>
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
