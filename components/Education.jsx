import FadeIn from "./FadeIn";

const educationList = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Indian Institute of Information Technology Ranchi (IIITR) ",
    duration: "2023 – 2027",
    logo: "/assets/iiitr.png",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: " Doon Senior Secondary School,Muzaffarpur,Bihar",
    duration: "2020 – 2022",
    logo: "/assets/12th.png",
  },
  {
    degree: "Secondary (10th)",
    institution: "Sri Laxmi Narayan Saraswati Vidya Mandir, Vaishali, Bihar",
    duration: "2014 – 2020",
    logo: "/assets/10th.png",
  },
];

export default function Education() {
  return (
    <section
      id="educations"
      className="py-20 px-6 bg-[#0f172a] text-white transition-colors duration-500"
    >
      <FadeIn y={40} duration={0.6}>
        <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto space-y-8">
        {educationList.map((edu, index) => (
          <FadeIn
            key={index}
            x={-50}
            delay={index * 0.1}
            duration={0.5}
            className="flex flex-col sm:flex-row items-center gap-6 bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
          >
            {edu.logo && (
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="w-24 h-24 object-cover rounded-xl shadow-md"
              />
            )}

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
              <p className="text-gray-300 mb-1">{edu.institution}</p>
              {edu.duration && (
                <p className="text-sm text-gray-400">{edu.duration}</p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
