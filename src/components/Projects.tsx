"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    if (!section || !scrollContainer) return;

    // Calculate total scroll width
    const totalWidth = scrollContainer.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(scrollContainer, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-8 px-6 py-24 md:py-32"
        style={{ width: "fit-content" }}
      >
        {/* Title card */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[35vw] h-[70vh] flex flex-col justify-center pl-4 sm:pl-8"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm tracking-[0.3em] uppercase text-emerald-400 font-medium mb-4"
          >
            Featured Work
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-neutral-400 text-lg max-w-md"
          >
            A selection of projects I&apos;ve built — from full-stack healthcare
            platforms to personal websites.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex items-center gap-2 text-neutral-500 text-sm"
          >
            <span>Scroll to explore</span>
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Project cards */}
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="group flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] h-[70vh] bg-neutral-900/70 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-500"
          >
            {/* Top: project info */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-emerald-400 text-sm font-medium mb-1">
                    {project.subtitle}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className="text-neutral-600 text-sm flex-shrink-0 ml-4">
                  {project.period}
                </span>
              </div>

              <ul className="space-y-2">
                {project.description.map((point, j) => (
                  <li
                    key={j}
                    className="text-neutral-400 text-sm leading-relaxed flex gap-2"
                  >
                    <span className="text-emerald-400 mt-1.5 flex-shrink-0">
                      ▹
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom: tech + links */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    <FiGithub className="w-4 h-4" />
                    Source Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Spacer for scroll end */}
        <div className="flex-shrink-0 w-[10vw]" />
      </div>
    </section>
  );
}
