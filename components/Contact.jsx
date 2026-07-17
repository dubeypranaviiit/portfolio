import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 overflow-hidden bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto">
        <FadeIn y={30} duration={0.5} className="mb-14 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">Contact Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
        </FadeIn>

        <div className="w-full">
          <FadeIn y={30} delay={0.2} duration={0.6} className="flex flex-col gap-6">
            <ContactForm />

            <div className="bg-gray-800/60 backdrop-blur-md rounded-3xl border border-gray-700 p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative flex items-center justify-center w-16 h-16 mb-4">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full z-10 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
              </div>

              <h3 className="text-xl font-bold text-green-600 dark:text-green-500 mb-2 tracking-wide">Available for Work</h3>
              <p className="text-gray-400 text-sm mb-5">Open to new opportunities and exciting projects</p>

              <div className="px-4 py-1.5 border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 font-semibold text-xs rounded-full cursor-default hover:bg-green-500/20 transition-colors">
                Accepting Projects
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
