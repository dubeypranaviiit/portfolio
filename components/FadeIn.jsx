"use client";

import { motion } from "framer-motion";

export default function FadeIn({ children, className = "", delay = 0, y = 40, x = 0, duration = 0.6 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
