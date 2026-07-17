"use client";

import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";

export default function HeroTypewriter() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span>Full-Stack Developer</span>;
  }

  return (
    <TypewriterComponent
      options={{
        strings: [
          "Full-Stack Developer",
          "Next.js Developer",
          "Crafting Scalable Web Platforms",
          "Building EdTech, SaaS & Real-World Apps",
          "Code. Architect. Deliver.",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
