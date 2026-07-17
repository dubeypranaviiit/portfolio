import FadeIn from "./FadeIn";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "ReactJS Developer Intern",
    company: "SiteCountry",
    location: "Noida, Uttar Pradesh, India (Remote)",
    duration: "Nov 2025 – Jan 2026",
    points: [
      "Developed high-quality, reusable UI components using ReactJS to speed up front-end workflows.",
      "Ensured cross-browser compatibility and responsive layout structures for flawless mobile rendering.",
      "Collaborated closely with back-end teams to execute REST API integrations.",
      "Optimized front-end application performance and conducted active code reviews to maintain coding standards."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gray-900 text-white"
    >
      <FadeIn y={40} duration={0.6}>
        <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Work Experience
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <FadeIn
            key={index}
            x={-50}
            delay={index * 0.1}
            duration={0.5}
            className="flex flex-col md:flex-row gap-6 bg-gray-800/40 backdrop-blur-md border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-400 text-2xl shrink-0">
              <FaBriefcase />
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-gray-400 font-medium">{exp.duration}</p>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2.5 text-gray-300">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
