"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks like React, Next.js, and TypeScript",
  },
  {
    number: "02",
    title: "Frontend Engineering",
    description:
      "Pixel-perfect implementation of designs with focus on performance and accessibility",
  },
  {
    number: "03",
    title: "Responsive Design",
    description:
      "Mobile-first approach ensuring seamless experience across all devices and screen sizes",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces that prioritize user experience and visual aesthetics",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-light tracking-[0.3em] text-gray-400 uppercase">
            What I Do
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-light text-white">
            Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Thin line decoration */}
              <motion.div className="absolute -left-6 top-0 w-px h-0 bg-gradient-to-b from-transparent via-gray-700 to-transparent group-hover:h-full transition-all duration-500" />

              {/* Number */}
              <div className="mb-8">
                <span className="text-7xl font-extralight text-gray-800 group-hover:text-gray-700 transition-colors duration-300">
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-light text-white mb-4 group-hover:text-gray-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>

              {/* Bottom line on hover */}
              <motion.div className="mt-6 h-px w-0 bg-white group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
