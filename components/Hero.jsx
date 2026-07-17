import FadeIn from "./FadeIn";
import BackgroundParticles from "./BackgroundParticles";
import HeroTypewriter from "./HeroTypewriter";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <div id="home" className="min-h-screen bg-gray-900 text-white transition-all duration-300">
      <div className="relative overflow-hidden">
        <BackgroundParticles />

        <div className="container mx-auto px-6 py-20 relative z-10 mt-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <FadeIn y={20} duration={0.8} className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Pranav Abhimanyu
              </h1>
              <div className="text-xl md:text-2xl text-blue-400 mb-6">
                <HeroTypewriter />
              </div>
              <p className="text-gray-300 text-lg mb-8">
                More than just code — I craft experiences. From idea to deployment, I transform vision into high-performance products users love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 cursor-pointer text-center"
                >
                  View Projects
                </a>
                <a
                  href="/resume.pdf"
                  download="Pranav_Abhimanyu_Resume.pdf"
                  className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                >
                  Download Resume
                </a>
              </div>
            </FadeIn>

            <FadeIn x={20} duration={0.8} className="lg:w-1/2 mt-12 lg:mt-0">
              <HeroVisual />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
