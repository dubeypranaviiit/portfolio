"use client";
import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { SiLeetcode, SiCodeforces, SiCodewars } from "react-icons/si";
import { MdBarChart } from "react-icons/md";

export default function SocialSidebar() {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/pranav-abhimanyu-830788284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "text-blue-600",
    },
  
    {
      icon: <FaGithub />,
      url: "https://github.com/dubeypranaviiit",
      color: "text-gray-100",
    },
    {
      icon: <SiLeetcode />,
      url: "https://leetcode.com/abhimanyu_pranav",
      color: "text-yellow-400",
    },
    
  ];

  return (
    <div className="fixed right-2 top-4/5 transform -translate-y-1/2 z-50 hidden sm:flex flex-col gap-3 bg-[#0a0a23] rounded-lg px-1 py-3 shadow-md">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-3xl ${link.color} hover:scale-110 transition-transform duration-200`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
