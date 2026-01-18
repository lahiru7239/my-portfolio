"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "Mar 2025 - Present",
    role: "Software Engineer",
    company: "Expernetic",
    description:
      "Leading frontend development for enterprise applications, implementing complex UI components and optimizing performance for large-scale web applications.",
  },
  {
    year: "Sep 2023 - Mar 2025",
    role: "Associate Software Engineer",
    company: "Expernetic",
    description:
      "Developed and maintained responsive web applications using React and Next.js, collaborated with cross-functional teams to deliver high-quality solutions.",
  },
  {
    year: "May 2023 - Sep 2023",
    role: "Associate Software Engineer",
    company: "Wyld Global",
    description:
      "Built modern web applications using React.js and worked with design tools like Figma to create seamless user experiences in a fast-paced environment.",
  },
  {
    year: "Oct 2022 - May 2023",
    role: "Associate UI/UX Engineer",
    company: "Explorelogy",
    description:
      "Designed and developed user interfaces with focus on usability and aesthetics, utilizing React.js and Figma to create engaging digital experiences.",
  },
  {
    year: "Feb 2022 - Aug 2022",
    role: "Software Engineer Internship",
    company: "Explorelogy",
    description:
      "Gained hands-on experience in web development, learned React.js fundamentals, and contributed to real-world projects under mentorship.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-light tracking-[0.3em] text-gray-500 uppercase">
            Career Path
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-light text-gray-900">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Left/Right Content */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                >
                  <motion.div
                    whileHover={{ x: index % 2 === 0 ? -10 : 10 }}
                    className="inline-block"
                  >
                    <span className="inline-block px-4 py-2 bg-gray-900 text-white text-xs font-light tracking-wider rounded-full mb-4">
                      {exp.year}
                    </span>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 top-8 transform md:-translate-x-1/2 -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="w-4 h-4 rounded-full bg-gray-900 ring-4 ring-white shadow-lg"
                  />
                </div>

                {/* Right/Left Content */}
                <div
                  className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                >
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-gray-600 font-light mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
