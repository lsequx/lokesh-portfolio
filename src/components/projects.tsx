import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/site";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading label="projects" title="Things I've built" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.id}
            delay={0.08 * i}
            className={p.featured ? "md:col-span-2" : ""}
          >
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
