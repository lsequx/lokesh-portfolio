"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { NetworkBackground } from "@/components/network-background";
import { profile, site } from "@/lib/site";

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
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <NetworkBackground />
      <div className="hero-pattern pointer-events-none absolute inset-0" />

      {/* Soft blue glow + fade into the next section */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,color-mix(in_srgb,var(--accent)_22%,transparent),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="hero-content relative mx-auto w-full max-w-6xl px-6 pt-24"
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
          {profile.heroBadge}
        </motion.a>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          Hi, I&apos;m {profile.firstName}
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 font-display text-2xl text-muted sm:text-3xl"
        >
          <span className="text-accent">{profile.role}</span>
        </motion.div>

        <motion.p
          variants={item}
          className="hero-intro mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          variants={item}
          className="hero-actions mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-on-accent shadow-[0_0_30px_-8px_var(--accent)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_-4px_var(--accent)]"
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
          className="hero-links mt-10 flex flex-wrap gap-6 font-mono text-sm text-muted"
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
