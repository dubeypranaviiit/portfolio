"use client";

import { motion } from "framer-motion";

// Font Awesome
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaServer,
  FaDocker,
  FaAws,
  FaLayerGroup,
} from "react-icons/fa";

// Simple Icons
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiShadcnui,
  SiVercel,
  SiKubernetes,
  SiPostman,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiMongoose,
  SiGoogle,
  SiStripe,
  SiRazorpay,
  SiZod,
} from "react-icons/si";

// Tabler Icons
import {
  TbBrain,
  TbPhotoScan,
  TbScan,
  TbApi,
  TbHierarchy,
} from "react-icons/tb";

const skills = [
  { name: "MERN Stack", icon: <FaServer /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "shadcn/ui", icon: <SiShadcnui /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Mongoose", icon: <SiMongoose /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },,
  { name: "Google Gemini API", icon: <SiGoogle /> },
  { name: "REST APIs", icon: <TbApi /> },
  { name: "Stripe", icon: <SiStripe /> },
  { name: "Razorpay", icon: <SiRazorpay /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Zustand (State Management)", icon: <FaLayerGroup /> },
  { name: "Zod (Validation)", icon: <SiZod /> },
  { name: "High-Level Design (HLD)", icon: <TbHierarchy /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-[#0f172a] transition-colors duration-500"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-950 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-2 text-blue-400">
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-white text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
