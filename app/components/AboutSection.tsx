"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Transform scroll progress to highlight intensity
  const highlightOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.3, 1, 0.3],
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-white flex items-center justify-center py-32 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <div className="relative w-64 h-64 overflow-hidden rounded-full bg-gray-200 shadow-2xl">
            <Image
              src="/myimage.png"
              alt="Lahiru Lakshitha"
              fill
              className="object-cover grayscale"
              sizes="256px"
            />
          </div>
        </motion.div>

        {/* Quoted Paragraph with Scroll-based Highlighting and Text Reveal */}
        <motion.blockquote
          style={{ opacity: highlightOpacity }}
          className="relative"
        >
          <div className="absolute -left-4 top-0 text-8xl text-gray-200 font-serif leading-none">
            "
          </div>
          <div className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed italic px-8 relative">
            {[
              "I'm a passionate frontend developer specializing in building modern, responsive web applications.",
              "I combine clean code with beautiful design to create seamless digital experiences that help",
              "businesses bring their ideas to life.",
            ].map((line, lineIndex) => (
              <span key={lineIndex} className="block mb-2">
                {line.split(" ").map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.5,
                      delay: (lineIndex * 10 + wordIndex) * 0.05,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>
          <div className="absolute -right-4 bottom-0 text-8xl text-gray-200 font-serif leading-none">
            "
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
