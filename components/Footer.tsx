"use client";

import { motion } from "framer-motion";
import { Twitter, Send, Github, ExternalLink, Sparkles, Heart, FileText } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Twitter,
      name: "X (Twitter)",
      url: "https://twitter.com/MayaGenesis",
      handle: "@MayaGenesis",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Send,
      name: "Telegram",
      url: "https://t.me/mayagenesis",
      handle: "t.me/mayagenesis",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/mayagenesis",
      handle: "github.com/mayagenesis",
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: FileText,
      name: "Whitepaper",
      url: "#",
      handle: t("footer.comingSoon"),
      color: "from-gold to-amber"
    }
  ];
  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-t from-gold/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-gold" />
              <h3 className="text-3xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber">
                {t("footer.title")}
              </h3>
            </div>
            
            <div className="relative p-6 rounded-2xl glass-gold mb-6">
              <p className="text-2xl font-playfair text-cream italic leading-relaxed">
                &ldquo;{t("footer.quote")}&rdquo;
              </p>
            </div>
            
            <p className="text-cream/70 font-inter leading-relaxed">
              {t("footer.description")}
            </p>
          </motion.div>

          {/* Right Column - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <h3 className="text-2xl font-cinzel font-bold text-gold mb-6">
              {t("footer.joinTitle")}
            </h3>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="group flex items-center gap-4 p-4 rounded-xl glass-gold overflow-hidden relative"
                  >
                    {/* Shimmer on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                    
                    <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="relative flex-1">
                      <p className="text-cream font-bold">{link.name}</p>
                      <p className="text-cream/50 text-sm">{link.handle}</p>
                    </div>
                    
                    <ExternalLink className="relative w-5 h-5 text-gold/30 group-hover:text-gold transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-amber flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-background" />
              </div>
              <span className="font-cinzel font-bold text-gold">MAYA</span>
            </div>
            
            {/* Copyright */}
            <p className="text-cream/50 font-inter text-sm text-center">
              © 2026 MAYA: The Genesis Starter | Decentralized & Community-Owned
            </p>
            
            {/* Made with love */}
            <div className="flex items-center gap-2 text-cream/40 text-sm">
              <span>{t("footer.madeWith")}</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>{t("footer.byBakers")}</span>
            </div>
          </div>
          
          <p className="text-center text-cream/30 font-inter text-xs mt-6">
            {t("footer.rights")}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
