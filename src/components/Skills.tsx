"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiDotnet,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithubactions,
  SiCloudflare,
  SiVercel,
  SiLinux,
} from "react-icons/si";
import { FaJava, FaDatabase, FaPaintBrush } from "react-icons/fa";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  Python: SiPython,
  TypeScript: SiTypescript,
  Java: FaJava,
  JavaScript: SiJavascript,
  SQL: FaDatabase,
  "C/C++": SiCplusplus,
  "C#": SiDotnet,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Svelte: SiSvelte,
  "HTML/CSS": SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  Git: SiGit,
  "GitHub Actions": SiGithubactions,
  Cloudflare: SiCloudflare,
  Vercel: SiVercel,
  Linux: SiLinux,
  "UI/UX Design": FaPaintBrush,
};

function SkillCard({
  skill,
  Icon,
  index,
  categoryIndex,
}: {
  skill: string;
  Icon: IconType;
  index: number;
  categoryIndex: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      controls.start({
        scale: [1, 1.05, 1],
        borderColor: "rgba(16, 185, 129, 0.5)",
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    } else {
      controls.start({
        scale: 1,
        borderColor: "rgba(38, 38, 38, 1)",
        transition: { duration: 0.1 },
      });
    }
  }, [isHovered, controls]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: categoryIndex * 0.1 + index * 0.05,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      animate={controls}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center gap-3 p-3 bg-neutral-900/50 border border-neutral-800 rounded-xl cursor-default overflow-hidden"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ width: 0, height: 0, opacity: 0.4 }}
            animate={{
              width: "250%",
              height: "250%",
              opacity: 0,
            }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bg-emerald-500/30 rounded-full z-0 pointer-events-none"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex items-center gap-3">
        {Icon && <Icon className="w-5 h-5 text-emerald-400 flex-shrink-0" />}
        <span className="text-sm text-neutral-300 font-medium">{skill}</span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Heading */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-emerald-400 font-medium">
              Skills & Technologies
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              My Tech Stack
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skill categories */}
          <div className="grid sm:grid-cols-2 gap-8">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.category}
                variants={fadeInUp}
                custom={catIdx}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-neutral-300 border-b border-neutral-800 pb-2">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIdx) => {
                    const Icon = iconMap[skill];
                    return (
                      <SkillCard
                        key={skill}
                        skill={skill}
                        Icon={Icon}
                        index={skillIdx}
                        categoryIndex={catIdx}
                      />
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
