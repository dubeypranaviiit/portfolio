"use client";
import { motion } from "framer-motion";
import Tech from "./Tech";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            {project.title}
          </h2>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-80 object-cover rounded-xl mb-6 shadow"
          />
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech, index) => (
              <Tech key={index} tech={tech} />
            ))}
          </div>
          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium"
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
