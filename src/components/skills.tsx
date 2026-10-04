"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/lib/site";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const chip = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading label="skills" title="Tech I work with" />

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={0.08 * i}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:border-accent/60">
              <h3 className="font-mono text-sm uppercase tracking-wider text-accent-2">
                {group.title}
              </h3>
              <motion.ul
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {group.items.map((name) => (
                  <motion.li
                    key={name}
                    variants={chip}
                    className="rounded-full border border-border bg-bg px-3.5 py-1.5 text-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    {name}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
