import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ProjectSection from "@/components/project/ProjectSection";
import Skills from "@/components/Skills";
export default function Home() {
  return (
  <div className=" bg-gray-900 text-white">
    <Nav />
    <Hero />
    <Skills />
   <ProjectSection />
   <Education />
   <Contact />
   <Footer />
  </div>
  );
}
