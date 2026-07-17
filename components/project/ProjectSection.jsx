import projects from "@/public/assets/project";
import FadeIn from "../FadeIn";
import ProjectGrid from "./ProjectGrid";

export default function ProjectSection() {
  return (
    <div id="projects" className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <FadeIn y={40} duration={0.6}>
          <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
        </FadeIn>

        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}