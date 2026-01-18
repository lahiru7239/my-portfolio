"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faTimes,
  faExternalLinkAlt,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Marketing Website",
    description:
      "Modern marketing website with engaging content, smooth animations, and optimized user experience for maximum conversion",
    image: "/web.png",
    hoverImage: "/web2.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
    details: {
      challenge:
        "Design and develop a high-converting marketing website for a complex SaaS product (Trading Journal) that effectively communicates value proposition to traders while maintaining exceptional performance and visual appeal.",
      solution:
        "Built a comprehensive marketing platform using Next.js with multiple landing pages, featuring smooth scroll animations with Framer Motion, optimized SEO, and a clean, professional design that converts visitors into beta testers. Implemented responsive layouts ensuring perfect display across all devices.",
      features: [
        "Multiple optimized landing pages with clear CTAs",
        "Smooth scroll animations and micro-interactions using Framer Motion",
        "SEO optimized with Next.js metadata and SSR for better search rankings",
        "Lightning-fast performance with image optimization and code splitting",
        "Responsive design ensuring seamless experience across all devices",
        "Integrated contact forms with validation",
        "Built-in analytics integration for tracking user behavior",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
      ],
      link: "https://trading-journal-website-bice.vercel.app/",
      github: "https://trading-journal-website-bice.vercel.app/",
    },
  },
  {
    id: 2,
    title: "SaaS Dashboard - Trading Journal",
    description:
      "Full-stack Trading Journal SaaS application with AI-powered analytics, real-time data visualization, and comprehensive trade management system",
    image: "/dashboard.png",
    hoverImage: "/dashboard2.png",
    tags: ["TypeScript", "Next.js", "Supabase"],
    details: {
      challenge:
        "Build a complete full-stack Trading Journal SaaS application from scratch in 7 days - including AI-powered screenshot analysis, real-time analytics dashboard, database architecture, authentication, and complex data visualizations. As a frontend specialist, implementing the entire backend infrastructure was a significant challenge.",
      solution:
        "Leveraged AI-assisted development to rapidly build a production-ready SaaS platform. Implemented AI-powered screenshot analysis for automatic trade data extraction, designed and built complete backend with Supabase, created real-time analytics with advanced visualizations, and optimized performance using React Virtualization for handling large datasets and Optimistic UI Updates for instant user feedback.",
      features: [
        "AI-Powered Screenshot Analysis - Automatic trade data extraction from screenshots",
        "Real-time Analytics Dashboard with performance metrics and visualizations",
        "Complete Journal System with customizable trade entry templates",
        "React Virtualization for efficient handling of thousands of trades",
        "Optimistic UI Updates for instant, responsive user experience",
        "User Authentication & Authorization with role-based access",
        "Advanced Data Filtering and Search capabilities",
        "Interactive Charts using Chart.js for trade performance insights",
        "Export functionality for trade data and reports",
        "Responsive design optimized for desktop and mobile trading",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "TanStack Query",
        "Chart.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "PostgreSQL",
        "Vercel",
      ],
      link: "https://trading-journal-lyart-iota.vercel.app/",
      github: "https://trading-journal-lyart-iota.vercel.app/",
    },
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  return (
    <section
      id="work"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-32 px-6"
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
          <span className="text-sm font-light tracking-[0.3em] text-gray-500 uppercase">
            Portfolio
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-light text-gray-900">
            Selected Work
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Project Image */}
                <div className="relative h-72 overflow-hidden bg-gray-200">
                  {/* Base Image */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-in-out"
                    style={{
                      transform:
                        hoveredProject === project.id
                          ? "translateX(-100%)"
                          : "translateX(0)",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Hover Image */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-in-out"
                    style={{
                      transform:
                        hoveredProject === project.id
                          ? "translateX(0)"
                          : "translateX(100%)",
                    }}
                  >
                    <Image
                      src={project.hoverImage}
                      alt={`${project.title} - alternate view`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-light bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-gray-900 font-light group-hover:gap-4 transition-all">
                    <span>View Project</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-sm group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Project Image */}
                  <div className="relative h-80 bg-gray-200">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-8 md:p-12">
                    {/* Title and Tags */}
                    <div className="mb-8">
                      <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                        {selectedProject.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 text-sm font-light bg-gray-100 text-gray-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Overview */}
                    <div className="mb-8">
                      <h4 className="text-xl font-light text-gray-900 mb-3">
                        Overview
                      </h4>
                      <p className="text-gray-600 font-light leading-relaxed text-lg">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Challenge */}
                    <div className="mb-8">
                      <h4 className="text-xl font-light text-gray-900 mb-3">
                        Challenge
                      </h4>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {selectedProject.details.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-8">
                      <h4 className="text-xl font-light text-gray-900 mb-3">
                        Solution
                      </h4>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {selectedProject.details.solution}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-xl font-light text-gray-900 mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.details.features.map(
                          (feature, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-gray-600 font-light"
                            >
                              <span className="text-gray-900 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-xl font-light text-gray-900 mb-4">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.details.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gray-900 text-white text-sm font-light rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                      <motion.a
                        href={selectedProject.details.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gray-900 text-white font-light rounded-full hover:bg-gray-800 transition-colors flex items-center gap-3"
                      >
                        <span>View Live Site</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </motion.a>
                      <motion.a
                        href={selectedProject.details.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white text-gray-900 font-light rounded-full border-2 border-gray-200 hover:border-gray-300 transition-colors flex items-center gap-3"
                      >
                        <span>View Code</span>
                        <FontAwesomeIcon icon={faCode} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
