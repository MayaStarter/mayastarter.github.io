"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative mb-8"
        >
          <h1 className="text-[150px] md:text-[200px] font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold via-gold/50 to-transparent leading-none">
            404
          </h1>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-20 h-20 text-gold/30" />
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-gold mb-4">
            {t("404.title")}
          </h2>
          <p className="text-cream/70 text-lg font-playfair mb-8">
            {t("404.description")}
            <br />
            {t("404.back")}
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 overflow-hidden rounded-xl text-lg font-bold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-amber to-gold" />
              <span className="relative text-black flex items-center gap-2">
                <Home className="w-5 h-5" />
                {t("404.home")}
              </span>
            </motion.button>
          </Link>
          
          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 overflow-hidden rounded-xl text-lg font-bold"
          >
            <div className="absolute inset-0 gradient-border rounded-xl" />
            <div className="absolute inset-[1px] bg-black/80 rounded-xl" />
            <span className="relative text-gold flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              {t("404.goBack")}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}
