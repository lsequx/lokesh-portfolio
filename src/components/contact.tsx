"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-fg outline-none transition placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/30";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading label="contact" title="Let's talk" />

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="space-y-6 md:col-span-2">
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m looking for a software development role and I&apos;m always
            happy to talk about projects, internships or ideas. Send a message
            and I&apos;ll get back to you.
          </p>

          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3 text-fg transition hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface">
                  <Mail size={18} />
                </span>
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface">
                <MapPin size={18} />
              </span>
              Pennsylvania, USA
            </li>
          </ul>

          <div className="flex gap-6 font-mono text-sm text-muted">
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
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <div className="relative rounded-3xl border border-border bg-surface p-6 md:p-8">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[22rem] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 size={48} className="text-accent-2" />
                  <h3 className="mt-4 font-display text-2xl font-bold">
                    Message sent
                  </h3>
                  <p className="mt-2 text-muted">
                    Thanks for reaching out. I&apos;ll reply soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-full border border-border px-5 py-2 text-sm transition hover:border-accent hover:text-accent"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm text-muted"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        minLength={2}
                        maxLength={80}
                        placeholder="Jane Smith"
                        className={field}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm text-muted"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={120}
                        placeholder="jane@company.com"
                        className={field}
                      />
                    </div>
                  </div>

                  {/* Honeypot: hidden from humans, bots fill it */}
                  <input
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm text-muted"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      maxLength={3000}
                      rows={6}
                      placeholder="Tell me a bit about what you have in mind..."
                      className={`${field} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white shadow-[0_0_30px_-8px_var(--accent)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_-4px_var(--accent)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message <Send size={16} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
