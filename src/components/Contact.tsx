"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiFileText } from "react-icons/fi";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: FiMail,
    value: personalInfo.email,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: FiLinkedin,
    value: "stephaandahdal",
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: FiGithub,
    value: "stephaandahdal",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Heading */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-emerald-400 font-medium">
              Contact
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Let&apos;s Connect
            </h2>
            <p className="text-neutral-400 text-lg max-w-lg mx-auto">
              I&apos;m currently open to new opportunities and collaborations.
              Feel free to reach out!
            </p>
          </motion.div>

          {/* Resume button */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <a
              href="/pdfs/MyResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-full font-medium text-base overflow-hidden transition-all duration-300 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              <FiFileText className="w-5 h-5" />
              View My Resume
              <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            variants={fadeInUp}
            className="grid sm:grid-cols-3 gap-4"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group relative p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <link.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-neutral-500 text-xs">{link.value}</p>
                </div>
                <FiArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-neutral-700 group-hover:text-emerald-400 transition-colors" />
              </a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={fadeInUp}
            className="text-center pt-12 border-t border-neutral-800/50"
          >
            <p className="text-neutral-600 text-sm">
              Designed & Built by{" "}
              <span className="text-neutral-400">{personalInfo.name}</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
