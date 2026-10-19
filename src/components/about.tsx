import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile, sections } from "@/lib/site";

// "**text**" in an about paragraph renders as highlighted text.
function renderEmphasis(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-fg">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading {...sections.about} />

      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-5 text-lg leading-relaxed text-muted md:col-span-3">
          {profile.about.map((paragraph, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <p>{renderEmphasis(paragraph)}</p>
            </Reveal>
          ))}
        </div>

        <div className="space-y-6 md:col-span-2">
          {/* Photo */}
          <Reveal>
            <div className="group relative mx-auto max-w-xs md:max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent to-accent-2 opacity-40 blur-xl transition duration-500 group-hover:opacity-70" />
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-accent/50 transition duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface">
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="(min-width: 768px) 400px, 80vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {profile.stats.map((s, i) => (
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
