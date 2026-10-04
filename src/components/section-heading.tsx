import { Reveal } from "@/components/reveal";

export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <Reveal className="mb-12">
      <p className="font-mono text-sm text-accent-2">{`// ${label}`}</p>
      <h2 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
        <span className="text-accent">.</span>
      </h2>
    </Reveal>
  );
}
