"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Nav = () => {
  const navItems = [
    { label: "Home", to: "home" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Education", to: "educations" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <nav  className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm text-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            Pranav Abhimanyu
          </motion.div>

          <div className="hidden md:flex space-x-6">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
