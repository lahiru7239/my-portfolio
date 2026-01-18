"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-32 px-6 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <span className="text-sm font-light tracking-[0.3em] text-gray-500 uppercase">
                Get In Touch
              </span>
              <h2 className="mt-6 text-5xl md:text-6xl font-light text-gray-900">
                Let's Work
                <br />
                Together
              </h2>
            </div>

            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's create
              something amazing together.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.a
                href="mailto:lahiru7239lak@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                <span className="font-light">lahiru7239lak@gmail.com</span>
              </motion.a>

              <motion.a
                href="tel:+94703593427"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <FontAwesomeIcon icon={faPhone} className="text-xl" />
                <span className="font-light">+94 70 359 3427</span>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-700"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
                <span className="font-light">Colombo, Sri Lanka</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-8">
              {[
                { icon: faGithub, href: "https://github.com/lahiru7239" },
                {
                  icon: faLinkedin,
                  href: "https://www.linkedin.com/in/lahiru-lakshitha-4351281a1/",
                },
                { icon: faTwitter, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-6 py-4 bg-white border rounded-2xl focus:outline-none transition-colors font-light ${
                    errors.name
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-gray-400"
                  }`}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500 font-light">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full px-6 py-4 bg-white border rounded-2xl focus:outline-none transition-colors font-light ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-gray-400"
                  }`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500 font-light">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full px-6 py-4 bg-white border rounded-2xl focus:outline-none transition-colors font-light ${
                    errors.subject
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-gray-400"
                  }`}
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-500 font-light">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className={`w-full px-6 py-4 bg-white border rounded-2xl focus:outline-none transition-colors resize-none font-light ${
                    errors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-gray-400"
                  }`}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500 font-light">
                    {errors.message}
                  </p>
                )}
              </div>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 font-light text-center"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 font-light text-center"
                >
                  ✗ Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 text-white font-light rounded-2xl transition-colors ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gray-900 hover:bg-gray-800"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
