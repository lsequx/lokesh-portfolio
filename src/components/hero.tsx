"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { NetworkBackground } from "@/components/network-background";
import { site } from "@/lib/site";

const roles = [
  "Full-Stack Developer",
  "API & Backend Builder",
  "Incident Troubleshooter",
  "Python · FastAPI · React",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <NetworkBackground />

      {/* Soft blue glow + fade into the next section */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,color-mix(in_srgb,var(--accent)_22%,transparent),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-6 pt-24"
      >
        <motion.a
          variants={item}
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 font-mono text-xs text-muted backdrop-blur transition hover:border-accent hover:text-fg"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
          </span>
          Currently building NEXUS, a network incident intelligence platform
        </motion.a>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          Hi, I&apos;m Lokesh
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 h-10 font-display text-2xl text-muted sm:text-3xl"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[i]}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="inline-block bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent"
            >
              {roles[i]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        >
          I build full-stack applications with Python, FastAPI, React and
          Next.js, and I bring a NOC engineer&apos;s habits to every project:
          root-cause thinking, clear communication, and ownership from concept
          to working demo.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white shadow-[0_0_30px_-8px_var(--accent)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_-4px_var(--accent)]"
          >
            View my work
            <ArrowDown
              size={16}
              className="transition group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-6 py-3 font-medium backdrop-blur transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex gap-6 font-mono text-sm text-muted"
        >
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition hover:text-accent"
          >
            GitHub <ArrowUpRight size={14} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition hover:text-accent"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1 transition hover:text-accent"
          >
            Email <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
