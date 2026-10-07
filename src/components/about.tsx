import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const stats = [
  { value: "4+", label: "Years in IT & network operations" },
  { value: "12 hr", label: "Solo shifts owning incident response" },
  { value: "15–20", label: "Tickets handled per shift" },
  { value: "2", label: "Analysts trained and onboarded" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading label="about" title="About me" />

      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-5 text-lg leading-relaxed text-muted md:col-span-3">
          <Reveal>
            <p>
              I&apos;m a software developer who started on the operations side.
              Years in a NOC taught me how real systems fail, and how much it
              matters to communicate clearly while they do.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Today I build full-stack applications with{" "}
              <span className="text-fg">
                Python, FastAPI, React, Next.js and TypeScript
              </span>
              , backed by PostgreSQL and MongoDB. My most recent project,{" "}
              <span className="text-fg">NEXUS</span>, is a network incident
              intelligence platform that correlates events, maps affected
              devices and supports root-cause investigation.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              I like short feedback loops: build a working demo, put it in front
              of the people who will use it, and iterate. I&apos;m studying
              Computer Science &amp; Engineering at Miami University and looking
              for a software development role where I can keep doing exactly
              that.
            </p>
          </Reveal>
        </div>

        <div className="space-y-6 md:col-span-2">
          {/* Photo */}
          <Reveal>
            <div className="group relative mx-auto max-w-xs md:max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent to-accent-2 opacity-40 blur-xl transition duration-500 group-hover:opacity-70" />
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-accent/50 transition duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface">
                <Image
                  src="/images/lokesh.png"
                  alt="Portrait of Lokesh Sequeira"
                  fill
                  sizes="(min-width: 768px) 400px, 80vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i}>
                <div className="h-full rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_30px_-10px_var(--accent)]">
                  <div className="font-display text-3xl font-bold text-accent">
                    {s.value}
                  </div>
                  <p className="mt-2 text-sm leading-snug text-muted">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
