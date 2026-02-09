"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import AuroraBackground from "./AuroraBackground";

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function AnimatedName({ name }: { name: string }) {
  return (
    <motion.h1
      className="text-[clamp(2.5rem,8vw,8rem)] font-bold tracking-tight whitespace-nowrap"
      initial="hidden"
      animate="visible"
      aria-label={name}
    >
      {name.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterAnimation}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function TypewriterEffect({ titles }: { titles: string[] }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseDuration = 2000;

  const tick = useCallback(() => {
    const fullText = titles[currentTitleIndex];

    if (!isDeleting) {
      setCurrentText(fullText.substring(0, currentText.length + 1));

      if (currentText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setCurrentText(fullText.substring(0, currentText.length - 1));

      if (currentText.length === 0) {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        return;
      }
    }
  }, [currentText, currentTitleIndex, isDeleting, titles]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting]);

  return (
    <motion.div
      className="text-xl sm:text-2xl md:text-3xl text-neutral-400 font-light h-10 md:h-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <span>{currentText}</span>
      <span className="animate-pulse ml-0.5 text-emerald-400">|</span>
    </motion.div>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Aurora background */}
      <AuroraBackground />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 -z-[5] opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="text-center space-y-6 max-w-4xl">
        <motion.p
          className="text-sm sm:text-base tracking-[0.3em] uppercase text-emerald-400 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hello, I&apos;m
        </motion.p>

        <AnimatedName name={personalInfo.name} />

        <TypewriterEffect titles={personalInfo.titles} />

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="group relative px-8 py-3.5 bg-emerald-600 text-white rounded-full font-medium text-base overflow-hidden transition-all duration-300 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            <span className="relative z-10">View My Work</span>
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 border border-neutral-700 text-neutral-300 rounded-full font-medium text-base transition-all duration-300 hover:border-emerald-500 hover:text-emerald-400"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span className="text-xs text-neutral-500 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 border-2 border-neutral-600 rounded-full flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-emerald-400 rounded-full mt-1.5"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
