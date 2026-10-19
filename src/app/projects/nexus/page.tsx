import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NEXUS Case Study",
  description: "How network operations experience informed a full-stack incident intelligence platform with explainable analysis.",
};

const steps = [
  { title: "Ingest", detail: "Network events arrive through an authenticated API or scripted simulations." },
  { title: "Correlate", detail: "Related events are grouped into incidents rather than handled as isolated alerts." },
  { title: "Investigate", detail: "Device dependencies help identify likely causes and distinguish observed impact from potential downstream impact." },
  { title: "Explain", detail: "Named scoring factors show the evidence behind a diagnosis; analysis revisions preserve how it changed." },
  { title: "Act", detail: "Operators review incidents, add notes and record lifecycle transitions." },
];

export default function NexusCaseStudy() {
  return (
    <main id="main" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <Link href="/#projects" className="text-sm text-accent hover:underline">← Back to portfolio</Link>
      <p className="mt-12 font-mono text-sm uppercase tracking-wider text-accent-2">Independent full-stack project</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">NEXUS</h1>
      <p className="mt-4 max-w-3xl text-xl leading-relaxed text-muted">Turning a stream of network alerts into an incident an operator can investigate.</p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <a href="https://github.com/lsequx/nexus-network-intelligence" target="_blank" rel="noreferrer" className="rounded-full bg-accent px-5 py-3 font-medium text-on-accent">Explore source code ↗</a>
        <a href="https://github.com/lsequx/nexus-network-intelligence#how-it-works" target="_blank" rel="noreferrer" className="rounded-full border border-border px-5 py-3 hover:border-accent">Architecture & setup ↗</a>
      </div>
      <figure className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface">
        <Image src="/images/nexus-dashboard.png" alt="NEXUS operations dashboard" width={3832} height={2102} sizes="(min-width: 1024px) 976px, 100vw" className="h-auto w-full" priority />
        <figcaption className="p-4 text-sm text-muted">Operations overview from the project. Telemetry and scripted scenarios support demonstration of the incident workflow.</figcaption>
      </figure>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <section className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-display text-2xl font-semibold">The operational problem</h2>
          <p className="mt-4 leading-relaxed text-muted">An upstream failure can trigger alerts from multiple downstream devices. During my NOC work, understanding those relationships and communicating the scope of an incident were central to investigation. NEXUS brings that context into one workflow.</p>
        </section>
        <section className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-display text-2xl font-semibold">What I built</h2>
          <p className="mt-4 leading-relaxed text-muted">A Next.js and TypeScript interface backed by a Python/FastAPI intelligence engine and PostgreSQL. The project combines event correlation, topology-aware analysis, explainable confidence scoring and incident history.</p>
        </section>
      </div>
      <section className="mt-14">
        <h2 className="font-display text-3xl font-semibold">From alert to investigation</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-border bg-surface p-5">
              <p className="font-mono text-sm text-accent-2">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-14">
        <h2 className="font-display text-3xl font-semibold">Engineering decisions</h2>
        <div className="mt-6 space-y-6 leading-relaxed text-muted">
          <p><strong className="text-fg">Explainable rules.</strong> Confidence scores use named factors rather than an opaque prediction. Operators can inspect the evidence, and deterministic rules make behavior testable. The tradeoff is that the rules need deliberate refinement as scenarios become more complex.</p>
          <p><strong className="text-fg">Separate symptoms from causes.</strong> Topology analysis distinguishes an upstream failure from downstream symptoms, and separates observed impact from potential impact. Its conclusions depend on accurate device relationships.</p>
          <p><strong className="text-fg">Keep backend credentials on the server.</strong> Browser requests use an authenticated Next.js proxy to the internal FastAPI service. Signed sessions and viewer/operator/admin roles support access control.</p>
        </div>
      </section>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[
          { src: "/images/nexus-incident.png", alt: "NEXUS incident detail with analysis and confidence scoring", caption: "Incident analysis and confidence scoring" },
          { src: "/images/nexus-topology.png", alt: "NEXUS network topology and device dependency map", caption: "Network topology and dependencies" },
        ].map((image) => (
          <figure key={image.src} className="overflow-hidden rounded-2xl border border-border bg-surface">
            <a href={image.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${image.caption}`}>
              <Image src={image.src} alt={image.alt} width={3832} height={2102} sizes="(min-width: 768px) 480px, 100vw" className="h-auto w-full" />
            </a>
            <figcaption className="p-4 text-sm text-muted">{image.caption} · Open image for detail</figcaption>
          </figure>
        ))}
      </div>
      <section className="mt-14 rounded-2xl border border-border bg-surface p-6 md:p-8">
        <h2 className="font-display text-3xl font-semibold">Validation and scope</h2>
        <p className="mt-4 leading-relaxed text-muted">The repository includes backend tests for correlation, confidence scoring, topology, security and incident APIs, plus frontend tests. Nine scripted failure scenarios support repeatable exploration of the analysis workflow. These are project capabilities, not a claim of production deployment or measured business impact.</p>
        <p className="mt-4 leading-relaxed text-muted">The next validation priorities are representative telemetry, comparison against known incident outcomes and measured performance under load. A topology-aware diagnosis remains an aid to operator investigation.</p>
        <a href="https://github.com/lsequx/nexus-network-intelligence/tree/main/backend/tests" target="_blank" rel="noreferrer" className="mt-5 inline-block text-accent hover:underline">Inspect backend tests ↗</a>
      </section>
      <div className="mt-14 flex flex-wrap gap-6 text-accent">
        <Link href="/#contact" className="hover:underline">Discuss the project →</Link>
        <Link href="/#projects" className="hover:underline">More projects →</Link>
      </div>
    </main>
  );
}
