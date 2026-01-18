"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-light mb-4"
            >
              Lahiru Lakshitha
            </motion.h3>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              Frontend Developer & Designer crafting beautiful web experiences
              with modern technologies.
            </p>
            <div className="flex gap-4">
              {[
                { icon: faGithub, href: "https://github.com/lahiru7239" },
                {
                  icon: faLinkedin,
                  href: "https://www.linkedin.com/in/lahiru-lakshitha-4351281a1/",
                },
                { icon: faTwitter, href: "#" },
                { icon: faDribbble, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light mb-6 text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Work", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-light mb-6 text-white/90">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "UI/UX Design",
                "Frontend Engineering",
                "Consulting",
              ].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-light text-sm">
              © {currentYear} Lahiru Lakshitha. All rights reserved.
            </p>
            <p className="text-gray-400 font-light text-sm flex items-center gap-2">
              Made with{" "}
              <FontAwesomeIcon
                icon={faHeart}
                className="text-red-500 text-xs"
              />{" "}
              in Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
