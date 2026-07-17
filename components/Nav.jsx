"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Education", to: "educations" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm text-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            Pranav Abhimanyu
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div
                key={item.to}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            >
              Resume
            </motion.a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-white focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-lg hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
