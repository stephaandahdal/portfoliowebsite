"use client";

import { motion } from "framer-motion";
import { personalInfo, education } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import { FiExternalLink } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Left: text */}
          <div className="space-y-6">
            <motion.div variants={fadeInUp}>
              <p className="text-sm tracking-[0.3em] uppercase text-emerald-400 font-medium mb-2">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Turning ideas into
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400">
                  real products
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-neutral-400 text-base md:text-lg leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Awards & Honors */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-sm tracking-[0.2em] uppercase text-emerald-400 font-medium">
                Awards & Honors
              </p>

              {/* Dean's List with clickable PDF links */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-neutral-300">
                  Dean&apos;s List
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.deansListSemesters.map((semester) => (
                    <a
                      key={semester.label}
                      href={semester.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-300 text-sm hover:bg-yellow-500/20 hover:border-yellow-500/40 transition-all duration-200"
                    >
                      {semester.label}
                      <FiExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Other awards */}
              <div className="flex flex-wrap gap-3">
                {education.awards.map((award) => (
                  <span
                    key={award}
                    className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-300 text-sm"
                  >
                    {award}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: stats cards */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
            <div className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-emerald-500/30 transition-all duration-300">
              <p className="text-4xl font-bold text-white mb-1">
                {education.gpa}
              </p>
              <p className="text-neutral-500 text-sm">GPA</p>
            </div>
            <div className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-emerald-500/30 transition-all duration-300">
              <p className="text-4xl font-bold text-white mb-1">5x</p>
              <p className="text-neutral-500 text-sm">Dean&apos;s List</p>
            </div>
            <div className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-emerald-500/30 transition-all duration-300">
              <p className="text-4xl font-bold text-white mb-1">
                {education.graduation.split(" ")[1]}
              </p>
              <p className="text-neutral-500 text-sm">Graduating</p>
            </div>
            <div className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-emerald-500/30 transition-all duration-300">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400 mb-1">
                ASU
              </p>
              <p className="text-neutral-500 text-sm">Fulton Engineering</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
