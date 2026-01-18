"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link href="/" className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-200 hover:ring-blue-500 transition-all"
              >
                <Image
                  src="/myimage.png"
                  alt="Lahiru Lakshitha"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </motion.div>
            </Link>
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-xl font-light tracking-tight text-gray-900 overflow-hidden whitespace-nowrap"
                >
                  Lahiru Lakshitha
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className="text-gray-700 hover:text-black transition-colors font-light"
            >
              Home
            </Link>
            <Link
              href="#work"
              className="text-gray-700 hover:text-black transition-colors font-light"
            >
              Work
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-black transition-colors font-light"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-black transition-colors font-light"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-black transition-colors font-light"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-black text-white rounded-full font-light hover:bg-gray-800 transition-colors inline-block text-center"
          >
            Book a call
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
