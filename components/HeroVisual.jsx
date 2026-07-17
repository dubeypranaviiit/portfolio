"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full border-4 border-blue-500 rounded-full opacity-20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-4/5 h-4/5 border-4 border-blue-400 rounded-full opacity-15"
      />
      <motion.img
        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
        alt="Tech Illustration"
        className="w-2/3 h-2/3 object-contain rounded-xl shadow-lg"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
