"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const codeLines = [
    "import React from 'react';",
    "import { motion } from 'framer-motion';",
    "",
    "const Portfolio = () => {",
    "  const [isActive, setIsActive] = useState(false);",
    "",
    "  return (",
    "    <motion.div",
    "      initial={{ opacity: 0, y: 20 }}",
    "      animate={{ opacity: 1, y: 0 }}",
    "      transition={{ duration: 0.5 }}",
    "      className='portfolio-container'",
    "    >",
    "      <h1>Welcome to my Portfolio</h1>",
    "      <p>Building amazing web experiences</p>",
    "    </motion.div>",
    "  );",
    "};",
    "",
    "export default Portfolio;",
  ];

  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine < codeLines.length) {
      if (currentChar < codeLines[currentLine].length) {
        const timeout = setTimeout(() => {
          setDisplayedCode((prev) => {
            const newCode = [...prev];
            if (!newCode[currentLine]) {
              newCode[currentLine] = "";
            }
            newCode[currentLine] = codeLines[currentLine].slice(
              0,
              currentChar + 1,
            );
            return newCode;
          });
          setCurrentChar((prev) => prev + 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
          setCurrentChar(0);
        }, 100);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setDisplayedCode([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, codeLines]);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-slate-100 pt-32 pb-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="inline-block">
              <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-light tracking-wide">
                ✦ AVAILABLE FOR WORK
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight text-gray-900"
            >
              Frontend
              <br />
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Developer
              </span>
              <br />& Designer
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-xl leading-relaxed max-w-lg"
            >
              Building fast, responsive, and user-friendly web applications with
              modern technologies. Passionate about clean code and exceptional
              user experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black text-white rounded-full font-light hover:bg-gray-800 transition-colors shadow-lg shadow-black/10 inline-block text-center"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black rounded-full font-light hover:bg-gray-50 transition-colors border-2 border-gray-200 inline-block text-center"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-gray-600 text-sm font-medium mb-4">
                Tech Stack
              </p>
              <div className="flex items-center">
                {/* React */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg cursor-pointer relative z-10"
                >
                  <FontAwesomeIcon
                    icon={faReact}
                    className="text-white text-3xl"
                  />
                </motion.div>
                {/* Next.js */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center shadow-lg cursor-pointer relative -ml-3 z-20"
                >
                  <span className="text-white font-bold text-xl">N</span>
                </motion.div>
                {/* TypeScript */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg cursor-pointer relative -ml-3 z-30"
                >
                  <span className="text-white font-bold text-xl">TS</span>
                </motion.div>
                {/* Tailwind CSS */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg cursor-pointer relative -ml-3 z-40"
                >
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    className="text-white text-3xl"
                  />
                </motion.div>
                {/* Node.js */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg cursor-pointer relative -ml-3 z-50"
                >
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    className="text-white text-3xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - VS Code Editor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="w-full h-[600px] rounded-2xl shadow-2xl overflow-hidden bg-white border-2 border-gray-200"
          >
            {/* VS Code Title Bar */}
            <div className="bg-gray-50 h-9 flex items-center justify-between px-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 cursor-pointer"></div>
                </div>
                <span className="text-xs text-gray-600 ml-2">
                  Portfolio.tsx
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs text-gray-500">TypeScript React</div>
              </div>
            </div>

            {/* Editor Content */}
            <div className="flex h-[calc(100%-36px)]">
              {/* Sidebar */}
              <div className="w-12 bg-gray-50 border-r border-gray-200 flex flex-col items-center py-3 gap-3">
                <div className="w-8 h-8 flex items-center justify-center text-gray-700">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                  </svg>
                </div>
              </div>

              {/* Code Area */}
              <div className="flex-1 flex flex-col">
                {/* Tab Bar */}
                <div className="h-9 bg-gray-50 border-b border-gray-200 flex items-center px-2">
                  <div className="bg-white px-3 py-1 text-xs text-gray-800 border-t-2 border-blue-500 flex items-center gap-2">
                    <span>Portfolio.tsx</span>
                    <span className="text-gray-400 hover:text-gray-600 cursor-pointer">
                      ×
                    </span>
                  </div>
                </div>

                {/* Code Editor */}
                <div className="flex-1 overflow-hidden p-4 font-mono text-sm bg-white">
                  <div className="space-y-1">
                    {displayedCode.map((line, index) => (
                      <div key={index} className="flex">
                        <span className="text-gray-400 select-none mr-4 text-right w-6">
                          {index + 1}
                        </span>
                        <pre className="text-gray-700">
                          {line && line.includes("import") && (
                            <span>
                              <span className="text-purple-600">import</span>
                              {line.includes("from") ? (
                                <>
                                  <span className="text-gray-700">
                                    {line.split("import")[1].split("from")[0]}
                                  </span>
                                  <span className="text-purple-600"> from</span>
                                  <span className="text-orange-600">
                                    {line.split("from")[1]}
                                  </span>
                                </>
                              ) : (
                                <span className="text-gray-700">
                                  {line.split("import")[1]}
                                </span>
                              )}
                            </span>
                          )}
                          {line &&
                            line.includes("const") &&
                            !line.includes("import") && (
                              <span>
                                <span className="text-purple-600">const</span>
                                <span className="text-blue-600">
                                  {line.split("const")[1].split("=")[0]}
                                </span>
                                <span className="text-gray-700">=</span>
                                <span className="text-gray-700">
                                  {line.split("=")[1]}
                                </span>
                              </span>
                            )}
                          {line && line.includes("return") && (
                            <span>
                              <span className="text-purple-600">return</span>
                              <span className="text-gray-700">
                                {line.split("return")[1]}
                              </span>
                            </span>
                          )}
                          {line &&
                            line.includes("<") &&
                            line.includes(">") &&
                            !line.includes("import") &&
                            !line.includes("return") && (
                              <span className="text-gray-700">{line}</span>
                            )}
                          {line &&
                            !line.includes("import") &&
                            !line.includes("const") &&
                            !line.includes("return") &&
                            !line.includes("<") &&
                            line.trim() !== "" && (
                              <span className="text-gray-700">{line}</span>
                            )}
                          {(!line || line.trim() === "") && <span>&nbsp;</span>}
                          {index === displayedCode.length - 1 && (
                            <span className="inline-block w-2 h-4 bg-gray-700 animate-pulse ml-0.5"></span>
                          )}
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Bar */}
                <div className="h-6 bg-gray-900 flex items-center justify-between px-3 text-xs text-white">
                  <div className="flex items-center gap-3">
                    <span>
                      ⚡ Ln {displayedCode.length}, Col{" "}
                      {displayedCode[displayedCode.length - 1]?.length || 0}
                    </span>
                    <span>UTF-8</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>TypeScript React</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
