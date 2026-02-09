"use client";

import { motion } from "framer-motion";
import { experiences, education } from "@/lib/data";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/animations/variants";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Heading */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-violet-400 font-medium">
              Experience & Education
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              My Journey
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-neutral-800" />

            {/* Education entry */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative mb-12 md:mb-16"
            >
              <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
                {/* Content (left side on desktop) */}
                <div className="ml-12 md:ml-0 md:text-right">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300">
                    <div className="flex items-center gap-2 md:justify-end mb-2">
                      <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full">
                        Education
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {education.school}
                    </h3>
                    <p className="text-violet-400 text-sm font-medium mb-1">
                      {education.degree}
                    </p>
                    <p className="text-neutral-500 text-sm mb-3">
                      {education.location} · GPA: {education.gpa} · {education.graduation}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:justify-end">
                      {education.coursework.slice(0, 4).map((course) => (
                        <span
                          key={course}
                          className="px-2 py-1 text-xs text-neutral-400 bg-neutral-800/50 rounded-md"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Empty right column on desktop */}
                <div className="hidden md:block" />
              </div>
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 top-8 w-3 h-3 -translate-x-1/2 bg-violet-400 rounded-full border-4 border-neutral-950 z-10" />
            </motion.div>

            {/* Experience entries */}
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                variants={i % 2 === 0 ? slideInRight : slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative mb-12 md:mb-16 last:mb-0"
              >
                <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
                  {/* Spacer for alternating sides */}
                  {i % 2 === 0 && <div className="hidden md:block" />}

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 ${
                      i % 2 !== 0 ? "md:text-right" : ""
                    }`}
                  >
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300">
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          i % 2 !== 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="px-3 py-1 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                          Work
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-violet-400 text-sm font-medium mb-1">
                        {exp.role}
                      </p>
                      <p className="text-neutral-500 text-sm mb-3">
                        {exp.location} · {exp.period}
                      </p>
                      <ul className="space-y-1.5">
                        {exp.description.map((point, j) => (
                          <li
                            key={j}
                            className={`text-neutral-400 text-sm leading-relaxed flex gap-2 ${
                              i % 2 !== 0 ? "md:flex-row-reverse md:text-right" : ""
                            }`}
                          >
                            <span className="text-violet-400 mt-0.5 flex-shrink-0">
                              ▹
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating sides */}
                  {i % 2 !== 0 && <div className="hidden md:block" />}
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-8 w-3 h-3 -translate-x-1/2 bg-violet-400 rounded-full border-4 border-neutral-950 z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
