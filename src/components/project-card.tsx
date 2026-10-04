"use client";

import { useRef } from "react";
import { ArrowUpRight, Code } from "lucide-react";
import type { Project } from "@/lib/site";

function NetworkArt() {
  // Small decorative node graph for the featured card
  const nodes = [
    [60, 40],
    [150, 30],
    [240, 70],
    [110, 110],
    [200, 140],
    [290, 120],
    [60, 170],
  ];
  const edges = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 4],
    [2, 4],
    [2, 5],
    [4, 5],
    [3, 6],
    [0, 6],
  ];
  return (
    <svg viewBox="0 0 340 200" className="h-full w-full" aria-hidden>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="var(--accent)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle
            cx={x}
            cy={y}
            r="10"
            fill="var(--accent)"
            fillOpacity="0.12"
          />
          <circle
            cx={x}
            cy={y}
            r="4.5"
            fill={i === 2 ? "var(--accent-2)" : "var(--accent)"}
          >
            {i === 2 && (
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="1.8s"
                repeatCount="indefinite"
              />
            )}
          </circle>
        </g>
      ))}
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/70 ${
        project.featured ? "md:p-10" : ""
      }`}
    >
      {/* Cursor spotlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(400px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent)_16%,transparent),transparent_70%)]" />

      <div
        className={`relative ${project.featured ? "grid items-center gap-10 md:grid-cols-5" : ""}`}
      >
        <div className={project.featured ? "md:col-span-3" : ""}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-accent-2/40 bg-accent-2/10 px-3 py-1 font-mono text-xs text-accent-2">
              {project.status}
            </span>
            {project.featured && (
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                Featured
              </span>
            )}
          </div>

          <h3
            className={`mt-4 font-display font-bold tracking-tight ${
              project.featured ? "text-4xl" : "text-2xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-1 text-accent">{project.tagline}</p>
          <p className="mt-4 leading-relaxed text-muted">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2 text-sm text-muted">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <li
                key={t}
                className="rounded-md bg-bg px-2.5 py-1 font-mono text-xs text-muted ring-1 ring-border"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-5 text-sm">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-accent"
              >
                <Code size={16} /> Source <ArrowUpRight size={14} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-muted">
                <Code size={16} />
              </span>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-accent"
              >
                Live demo <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>

        {project.featured && (
          <div className="hidden h-52 rounded-2xl border border-border bg-bg/60 p-4 md:col-span-2 md:block">
            <NetworkArt />
          </div>
        )}
      </div>
    </div>
  );
}
