"use client";

import { useState, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function ContactForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setError("");

    try {
      await axios.post("/api/contact", formData);

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Failed to send email:", err);
      setError(
        err.response?.data?.error || "Failed to send message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800/60 backdrop-blur-md rounded-3xl border border-gray-700 p-6 sm:p-8 relative overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      <motion.h3
        className="text-2xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        Send a Message <span className="text-blue-500 animate-pulse">✨</span>
      </motion.h3>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative z-10">
        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500 text-sm">
            {error}
          </div>
        )}
        <div className="grid sm:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <label htmlFor="name" className="block text-[13px] font-bold text-gray-400 mb-1.5 ml-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-2xl bg-gray-900 border border-gray-700 border-b-4 text-white 
              placeholder:text-gray-500 text-[15px] focus:outline-none focus:border-blue-500 
              transition-all duration-300 hover:border-gray-500 disabled:opacity-50"
              placeholder="Your Name"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <label htmlFor="email" className="block text-[13px] font-bold text-gray-400 mb-1.5 ml-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-2xl bg-gray-900 border border-gray-700 border-b-4 text-white 
              placeholder:text-gray-500 text-[15px] focus:outline-none focus:border-blue-500 
              transition-all duration-300 hover:border-gray-500 disabled:opacity-50"
              placeholder="your.email@gmail.com"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <label htmlFor="message" className="block text-[13px] font-bold text-gray-400 mb-1.5 ml-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-2xl bg-gray-900 border border-gray-700 border-b-4 text-white 
            placeholder:text-gray-500 text-[15px] focus:outline-none focus:border-blue-500 
            transition-all duration-300 hover:border-gray-500 resize-none disabled:opacity-50"
            placeholder="Want to collaborate on a project, chat about internships, or discuss tech? Drop your message here!"
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting || submitted}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white 
          font-bold text-[15px] rounded-2xl hover:bg-blue-700 transition-all duration-300 
          shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] shadow-blue-500/20 border-b-4 border-blue-700 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <FaCheckCircle className="w-5 h-5" />
                Message Sent! 🚀
              </motion.div>
            ) : isSubmitting ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending Message... 🚀
              </motion.div>
            ) : (
              <motion.div
                key="send"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <FaPaperPlane className="w-4 h-4" />
                Send Message
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </form>
    </div>
  );
}
