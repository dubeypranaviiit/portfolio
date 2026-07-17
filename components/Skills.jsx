import FadeIn from "./FadeIn";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiShadcnui,
  SiVercel,
  SiPostman,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiMongoose,
  SiGoogle,
  SiStripe,
  SiRazorpay,
  SiZod,
  SiPrisma,
} from "react-icons/si";
import {
  TbBrain,
  TbApi,
  TbHierarchy,
  TbGitMerge,
  TbBolt,
} from "react-icons/tb";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "shadcn/ui", icon: <SiShadcnui /> },
  { name: "React Flow", icon: <TbGitMerge /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Mongoose", icon: <SiMongoose /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "REST APIs", icon: <TbApi /> },
  { name: "Google Gemini API", icon: <SiGoogle /> },
  { name: "Groq API", icon: <TbBrain /> },
  { name: "Trigger.dev", icon: <TbBolt /> },
  { name: "Stripe", icon: <SiStripe /> },
  { name: "Razorpay", icon: <SiRazorpay /> },
  { name: "Zustand (State Management)", icon: <FaLayerGroup /> },
  { name: "Zod (Validation)", icon: <SiZod /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "High-Level Design (HLD)", icon: <TbHierarchy /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-[#0f172a] transition-colors duration-500"
    >
      <FadeIn y={40} duration={0.6}>
        <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          My Skills
        </h2>
      </FadeIn>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <FadeIn
            key={index}
            x={-50}
            delay={index * 0.05}
            duration={0.5}
            className="flex flex-col items-center justify-center bg-gray-950 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-2 text-blue-400">{skill.icon}</div>
            <p className="text-sm font-medium text-white text-center">
              {skill.name}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
