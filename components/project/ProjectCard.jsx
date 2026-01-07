"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiInfo } from "react-icons/fi";
import Tech from "./Tech";


const ProjectCard = ({ project, setSelectedProject }) =>{ 
      const [isExpanded, setIsExpanded] = useState(false);
    return(
  <motion.div
    whileHover={{ scale: 1.03, y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all h-[530px]"
  >
    <div className="relative group">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
        {project.title}
      </h3>

             <p
          className={`text-gray-600 dark:text-gray-300 mb-2 ${
            isExpanded ? "" : "line-clamp-2"
          }`}
        >
          {project.description}
        </p>
        {project.description.length > 50 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-blue-500 hover:underline mb-4"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <Tech key={index} tech={tech} />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
    
          {/* {[project.github, project.demo].map((link, idx) => (
  <motion.button
    key={idx}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => window.open(link, "_blank")}
    className={`${
      idx === 0
        ? "text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 cursor-pointer"
        : "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 cursor-pointer"
    } transition`}
    aria-label={idx === 0 ? "GitHub" : "Demo"}
  >
    {idx === 0 ? <FiGithub size={20} /> : <FiExternalLink size={20} />}
  </motion.button>
))} */}
{[
  { url: project.github, label: "GitHub" },
  { url: project.demo, label: "Demo" },
]
  .filter(item => item.url && item.url.trim() !== "")
  .map(item => (
    <motion.button
      key={item.label}
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        window.open(item.url, "_blank", "noopener,noreferrer");
      }}
      className={`${
        item.label === "GitHub"
          ? "text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
          : "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
      } transition cursor-pointer`}
      aria-label={item.label}
    >
      {item.label === "GitHub" ? (
        <FiGithub size={20} />
      ) : (
        <FiExternalLink size={20} />
      )}
    </motion.button>
  ))}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedProject(project)}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
            aria-label="Details"
          >
            <FiInfo size={20} />
          </motion.button>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
          {project.year}
        </span>
      </div>
    </div>
  </motion.div>
);
}

export default ProjectCard;