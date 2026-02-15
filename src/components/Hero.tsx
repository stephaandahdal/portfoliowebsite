"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";
import LiquidEther from "./LiquidEther";

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

function TitleCycler({ titles }: { titles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [titles.length]);

  return (
    <div className="h-10 md:h-12 flex items-center justify-center overflow-hidden perspective-[400px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={titles[index]}
          initial={{ opacity: 0, rotateX: 90, y: 20 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: -90, y: -20 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="flex gap-[0.15em]"
        >
          {titles[index].split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, rotateX: 90, y: 20 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: -90, y: -20 }}
              transition={{
                duration: 0.5,
                ease: "backOut",
                delay: i * 0.03, // Stagger effect per character
              }}
              className="text-lg sm:text-xl md:text-2xl text-neutral-400 font-medium tracking-[0.15em] uppercase inline-block origin-bottom"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
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
      {/* Liquid Ether background */}
      <div className="absolute inset-0 -z-10">
        <LiquidEther
          colors={["#106a27", "#28e24d", "#dcbc18"]}
          mouseForce={30}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={19}
          resolution={0.5}
          isBounce
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 -z-[5] opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* GRADIENT FADE: Smoothes the transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none -z-[4]" />

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

        <TitleCycler titles={personalInfo.titles} />

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
