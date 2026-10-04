"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, Zap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { education, experience } from "@/lib/site";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  // The glowing line grows as the timeline scrolls through the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading label="experience" title="Where I've worked" />

      <div ref={ref} className="relative">
        {/* Track + animated progress line */}
        <div className="absolute bottom-0 left-[11px] top-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
        <motion.div
          style={{ scaleY }}
          className="absolute bottom-0 left-[11px] top-2 w-px origin-top bg-gradient-to-b from-accent to-accent-2 md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-14">
          {experience.map((job, i) => {
            const left = i % 2 === 0; // alternate sides on desktop
            return (
              <div
                key={job.id}
                className="relative pl-10 md:grid md:grid-cols-2 md:gap-14 md:pl-0"
              >
                {/* Node */}
                <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-accent bg-bg md:left-1/2 md:-translate-x-1/2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {job.current && (
                    <span className="absolute h-6 w-6 animate-ping rounded-full bg-accent/40" />
                  )}
                </span>

                <Reveal className={left ? "md:col-start-1" : "md:col-start-2"}>
                  <article className="rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_0_30px_-12px_var(--accent)]">
                    <p className="font-mono text-xs text-accent-2">
                      {job.period}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold tracking-tight">
                      {job.role}
                    </h3>
                    <p className="text-accent">{job.company}</p>
                    <p className="text-sm text-muted">{job.location}</p>

                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {job.story && (
                      <div className="mt-5 rounded-xl border border-accent/30 bg-accent/5 p-4">
                        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                          <Zap size={14} /> {job.story.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {job.story.body}
                        </p>
                      </div>
                    )}

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {job.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-md bg-bg px-2.5 py-1 font-mono text-xs text-muted ring-1 ring-border"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>

      {/* Education */}
      <div className="mt-24">
        <Reveal>
          <h3 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight">
            <GraduationCap className="text-accent" /> Education
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={0.1 * i}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:border-accent/60">
                <p className="font-mono text-xs text-accent-2">{e.period}</p>
                <p className="mt-2 font-display text-lg font-semibold">
                  {e.school}
                </p>
                <p className="text-muted">{e.credential}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
