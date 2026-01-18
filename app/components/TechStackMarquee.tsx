"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faCss3Alt,
  faJs,
  faGitAlt,
  faFigma,
  faNpm,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

const techStack = [
  { name: "React", icon: faReact },
  { name: "Next.js", icon: faReact },
  { name: "TypeScript", icon: faJs },
  { name: "Node.js", icon: faNodeJs },
  { name: "Tailwind CSS", icon: faCss3Alt },
  { name: "Git", icon: faGitAlt },
  { name: "Figma", icon: faFigma },
  { name: "NPM", icon: faNpm },
  { name: "Docker", icon: faDocker },
];

export default function TechStackMarquee() {
  // Triple duplication for seamless infinite loop
  const duplicatedTech = [...techStack, ...techStack, ...techStack];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 py-24 overflow-hidden z-10 isolate">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative">
        {/* Infinite Auto-scroll Marquee */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-16 items-center"
          >
            {duplicatedTech.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15 }}
                className="flex-shrink-0 flex flex-col items-center gap-6 group cursor-pointer"
              >
                <div className="relative">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <FontAwesomeIcon
                    icon={tech.icon}
                    className="relative text-7xl text-white/80 group-hover:text-white transition-all duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors tracking-wider">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Side fade gradients */}
        <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mt-20"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-light">
          Crafting with modern tools
        </p>
      </motion.div>
    </section>
  );
}
