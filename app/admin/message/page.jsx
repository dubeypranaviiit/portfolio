"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("/api/contact");
        setMessages(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p className="text-center mt-20">Loading messages...</p>;

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Messages</h1>
      {messages.length === 0 && <p className="text-center">No messages yet.</p>}
      <div className="max-w-4xl mx-auto space-y-4">
        {messages.map((msg) => (
          <div key={msg._id} className=" shadow rounded p-4">
            <p><strong>Name:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            {msg.phone && <p><strong>Phone:</strong> {msg.phone}</p>}
            <p><strong>Message:</strong> {msg.message}</p>
            <p className="text-gray-400 text-sm">Submitted at: {new Date(msg.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
