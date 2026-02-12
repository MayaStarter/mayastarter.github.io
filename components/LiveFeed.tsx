"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Activity, Thermometer, Users, Radio, Clock, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function LiveFeed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

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
    <section id="live-feed" ref={ref} className="py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-gold mb-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-red-500"
            />
            <span className="text-gold font-semibold text-sm">{t("live.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber to-gold mb-2">
            {t("live.title")}
          </h2>
          <p className="text-cream/60 text-sm max-w-lg mx-auto">{t("live.description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden gradient-border">
              <div className="absolute inset-[1px] rounded-2xl bg-black/80" />
              <div className="relative aspect-video flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-24 h-24 rounded-full border-2 border-gold/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <Radio className="absolute w-10 h-10 text-gold/50" />
                </div>
                <div className="relative text-center">
                  <p className="text-cream/50 font-playfair text-lg">{t("live.stream")}</p>
                  <p className="text-gold/70 text-xs">{t("live.comingSoon")}</p>
                </div>
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold/50 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold/50 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold/50 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold/50 rounded-br-lg" />
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-3">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group relative p-4 rounded-xl glass-gold overflow-hidden"
                >
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${metric.color} bg-opacity-20 flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-cream/50 text-xs">{metric.label}</p>
                        <motion.p
                          key={metric.value}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xl font-bold text-cream"
                        >
                          {metric.value}
                        </motion.p>
                      </div>
                    </div>
                    <TrendingUp className="w-4 h-4 text-green-400" />
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
