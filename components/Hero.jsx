"use client";

import React from "react";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="home" className="min-h-screen bg-gray-900 text-white transition-all duration-300">
      <div className="relative overflow-hidden">
      
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

        <div className="container mx-auto px-6 py-20 relative z-10 mt-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
        
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Pranav Abhimanyu
              </h1>
              <div className="text-xl md:text-2xl text-blue-400 mb-6">
                <TypewriterComponent
                  options={{
                     strings: [
        "MERN Stack Developer",
        "Crafting Scalable Web Platforms",
        "Building EdTech, SaaS & Real-World Apps",
        "Code. Architect. Deliver.",
      ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="text-gray-300 text-lg mb-8">
              More than just code — I craft experiences. From idea to deployment, I transform vision into high-performance products users love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <Link to="projects"
                    smooth={true}
                    duration={600}
                    offset={-80} 
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 cursor-pointer"
                    >
                 View Projects
                   </Link>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  target="_blank"
                  className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Download Resume
                </motion.a>
              </div>
             
            </motion.div>

          
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 mt-12 lg:mt-0"
            >
              <div className="relative w-full h-[400px] flex items-center justify-center">
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
