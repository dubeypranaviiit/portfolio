"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact=()=> {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle submission (e.g., API call)
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold  text-center mb-12">
          Get in <span className="text-blue-500">Touch</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2 bg-gray-700 rounded-lg px-3 py-2 focus-within:ring-2 ring-blue-500">
                <FaUser className="text-blue-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className=" outline-none w-full text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2 bg-gray-700 rounded-lg px-3 py-2 focus-within:ring-2 ring-blue-500">
                <FaEnvelope className="text-blue-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>

           
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone <span className="text-gray-400">(optional)</span>
              </label>
              <div className="flex items-center gap-2 bg-gray-700 rounded-lg px-3 py-2 focus-within:ring-2 ring-blue-500">
                <FaPhone className="text-blue-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message here..."
                className="w-full bg-gray-700 text-white rounded-lg p-3 outline-none placeholder-gray-400 focus:ring-2 ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact;
