'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function TextAnimation() {
  return (
    <div className="flex flex-col justify-center items-start space-y-6">
      {/* Main animated text */}
      <div className="space-y-2">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="m-0 text-transparent text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold uppercase animate-text bg-[url('https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D')] bg-contain bg-clip-text opacity-80"
        >
          Utkarsh
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="m-0 text-transparent text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold uppercase animate-text-reverse bg-[url('https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D')] bg-contain bg-clip-text opacity-80"
        >
          Rajput
        </motion.p>
      </div>
      
      {/* Subtitle and description */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="space-y-4 max-w-2xl"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-accent">
          AI Researcher & Full-Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Software-developer-turned-AI-researcher specializing in NLP, Computer Vision, and ML systems. 
          Building AI-powered experiences with craft & curiosity.
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
            Machine Learning
          </span>
          <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
            Natural Language Processing
          </span>
          <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
            Computer Vision
          </span>
        </div>
      </motion.div>
    </div>
  );
}