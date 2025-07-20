"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaServer,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiShadcnui,
  SiVercel,
  SiKubernetes,
  SiJenkins,
  SiPostman,
  SiLinux,
  SiTerraform,
} from "react-icons/si";
import { TbHierarchy } from "react-icons/tb"; // for LLD icon

const skills = [
  // Full Stack
  { name: "MERN Stack", icon: <FaServer /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "shadcn/ui", icon: <SiShadcnui /> },

  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },

  { name: "AWS", icon: <FaAws /> },

  
  { name: "Postman", icon: <SiPostman /> },


  { name: "Vercel", icon: <SiVercel /> },


  { name: "Low-Level Design (LLD)", icon: <TbHierarchy /> },
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
            <div className="text-4xl mb-2 text-blue-400">{skill.icon}</div>
            <p className="text-sm font-medium text-white text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
