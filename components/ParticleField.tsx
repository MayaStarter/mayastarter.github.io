"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.id % 3 === 0 
              ? `radial-gradient(circle, rgba(0, 212, 255, 0.8) 0%, rgba(0, 212, 255, 0.3) 50%, transparent 100%)`
              : particle.id % 3 === 1
              ? `radial-gradient(circle, rgba(139, 92, 246, 0.7) 0%, rgba(139, 92, 246, 0.3) 50%, transparent 100%)`
              : `radial-gradient(circle, rgba(212, 175, 55, 0.8) 0%, rgba(255, 191, 0, 0.4) 50%, transparent 100%)`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Ambient light orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          left: "10%",
          top: "20%",
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          right: "-10%",
          top: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          left: "50%",
          bottom: "10%",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
