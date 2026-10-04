import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent-2">{"// error 404"}</p>
      <h1 className="mt-3 font-display text-6xl font-bold tracking-tight">
        Page not found<span className="text-accent">.</span>
      </h1>
      <p className="mt-4 max-w-md text-muted">
        This route doesn&apos;t exist. Like a good incident ticket, let&apos;s
        get you back to a known-good state.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 font-medium text-white shadow-[0_0_30px_-8px_var(--accent)] transition hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </main>
  );
}
