"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 bg-blue-500 rounded-full"
          animate={{
            x: [Math.random() * 300, Math.random() * 300],
            y: [Math.random() * 300, Math.random() * 300],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}
