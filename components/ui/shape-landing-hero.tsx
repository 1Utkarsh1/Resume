'use client';

import { motion } from "framer-motion";
import { Code, Brain, Zap, Target } from "lucide-react";

export const ShapeLandingHero = () => {
  const shapes = [
    { icon: Code, delay: 0, x: -100, y: -50 },
    { icon: Brain, delay: 0.2, x: 100, y: -30 },
    { icon: Zap, delay: 0.4, x: -80, y: 60 },
    { icon: Target, delay: 0.6, x: 120, y: 80 },
  ];

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ 
            opacity: 0.6, 
            scale: 1, 
            x: shape.x, 
            y: shape.y 
          }}
          transition={{ 
            duration: 1,
            delay: shape.delay,
            ease: "easeOut"
          }}
          className="absolute"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-16 h-16 glass-effect rounded-2xl flex items-center justify-center glossy-highlight"
          >
            <shape.icon className="w-8 h-8 text-white/80" />
          </motion.div>
        </motion.div>
      ))}
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-center z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
          Crafting Digital Experiences
        </h2>
        <p className="text-gray-400 text-lg max-w-md">
          Where artificial intelligence meets creative engineering
        </p>
      </motion.div>
    </div>
  );
};