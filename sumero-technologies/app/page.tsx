"use client";
import Image from "next/image";
import { useState } from "react";



export default function Home() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Toast (frontend-only): shown after form submit */}
      <div
        aria-live="polite"
        className={`pointer-events-none fixed inset-x-0 bottom-4 z-50 px-4 transition sm:bottom-6 ${
          success ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`mx-auto w-full max-w-md transform-gpu transition duration-200 ${
            success ? "translate-y-0" : "translate-y-3"
          }`}
        >
          <div className="pointer-events-auto flex items-start gap-3 rounded-2xl border border-emerald-400/25 bg-slate-950/80 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.75)] backdrop-blur">
            <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30">
              <span className="text-base">✓</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-50">
                Message sent
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-300">
                Thanks for reaching out — we&apos;ll get back to you soon.
              </p>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-full origin-left animate-[toast_2.5s_linear_forwards] rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="ml-auto inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl text-slate-300 transition hover:bg-slate-800/60 hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>
        </div>
      </div>

      {/* Page container */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        {/* Navigation */}
        <nav className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/icon.png"
              alt="Sumero Technologies"
              width={40}
              height={40}
              className="rounded-lg shadow-lg shadow-sky-500/30"
            />
            <span className="text-sm font-semibold tracking-tight sm:text-base">
              Sumero Technologies
            </span>
          </a>
          <div className="hidden items-center gap-6 text-xs text-slate-300 sm:flex">
            <a href="#services" className="hover:text-sky-400">
              Services
            </a>
            <a href="#process" className="hover:text-sky-400">
              Process
            </a>
            <a href="#about" className="hover:text-sky-400">
              About
            </a>
            <a href="#contact" className="hover:text-sky-400">
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-full bg-sky-500 px-4 py-1.5 text-xs font-medium text-slate-950 shadow-[0_0_16px_rgba(56,189,248,0.7)] hover:bg-sky-400"
            >
              Let&apos;s talk
            </a>
          </div>
        </nav>

        {/* Hero */}
        <header className="relative mt-8 flex flex-1 flex-col justify-center gap-10 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-4 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.9)] sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          {/* gradient orbs */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-sky-500/30 blur-3xl" />
            <div className="absolute bottom-0 right-[-6rem] h-64 w-64 rounded-full bg-purple-500/25 blur-3xl" />
          </div>

          <div className="relative max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Premium tech agency
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              We build premium software that grows your business.
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Sumero Technologies designs and engineers modern web and mobile
              products—fast, secure, and scalable. From MVPs to enterprise
              platforms, we ship software your customers love.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-[0_0_25px_rgba(56,189,248,0.7)] transition hover:bg-sky-400"
              >
                Contact Us
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2 text-xs text-slate-300 sm:text-sm">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-3">
                <p className="text-slate-400">Delivery</p>
                <p className="mt-1 font-semibold text-slate-50">2–6 weeks</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-3">
                <p className="text-slate-400">Focus</p>
                <p className="mt-1 font-semibold text-slate-50">UX + Speed</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-3">
                <p className="text-slate-400">Quality</p>
                <p className="mt-1 font-semibold text-slate-50">Production-ready</p>
              </div>
            </div>
          </div>

          {/* Simple hero card */}
          <div className="relative mt-8 w-full max-w-md rounded-3xl border border-slate-700/70 bg-slate-900/70 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.7)] backdrop-blur-xl lg:mt-0">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              What you get
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-100">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Pixel-perfect UI with a premium feel.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Clean architecture and scalable codebase.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                <span>Fast performance, SEO, and best practices.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" />
                <span>Clear communication and weekly progress updates.</span>
              </li>
            </ul>
          </div>
        </header>

        {/* Main content sections */}
        <main className="mt-10 space-y-12 border-t border-slate-800 pt-10 text-sm sm:text-base">
          {/* About */}
          <section id="about" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-3">
                <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                  About Us
                </h2>
                <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  We’re a small, senior team focused on building modern products
                  with excellent UX, strong engineering, and measurable results.
                  We move fast without breaking quality—so you can launch with
                  confidence.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-xs font-semibold text-slate-100">Product mindset</p>
                  <p className="mt-1 text-xs text-slate-400">
                    We design for outcomes: conversion, retention, and speed.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-xs font-semibold text-slate-100">Modern stack</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Next.js, React Native, APIs, and cloud-ready architecture.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-xs font-semibold text-slate-100">Quality first</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Clean code, testing discipline, and security hygiene.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-xs font-semibold text-slate-100">Transparent delivery</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Weekly demos and clear milestones—no surprises.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                  Services
                </h2>
                <p className="text-xs text-slate-400 sm:text-sm">
                  Strategy, design, and engineering—end to end.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
                  <span className="text-lg">{"</>"}</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Web Development
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Fast, SEO-friendly websites and web apps built for conversion
                  and maintainability.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <span className="text-lg">📱</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Mobile Apps
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Native-feeling apps with smooth performance and great UX across
                  iOS and Android.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                  <span className="text-lg">🎨</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-100">
                  UI/UX Design
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Design systems, flows, and UI that feel premium and work
                  flawlessly on mobile.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300">
                  <span className="text-lg">⚡</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Automation
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Streamline operations with integrations, workflows, and
                  dashboards that save time.
                </p>
              </div>
            </div>
          </section>

          {/* Portfolio removed */}

          {/* Testimonials removed */}

          {/* Process */}
          <section id="process" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                Our process
              </h2>
              <p className="text-xs text-slate-400 sm:text-sm">
                A simple, reliable workflow that keeps delivery predictable.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "We clarify goals, users, scope, and success metrics.",
                },
                {
                  step: "02",
                  title: "Design",
                  desc: "We map flows, craft UI, and define a design system.",
                },
                {
                  step: "03",
                  title: "Build",
                  desc: "We implement features with clean architecture and QA.",
                },
                {
                  step: "04",
                  title: "Launch & iterate",
                  desc: "We ship, monitor, and improve based on real feedback.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5"
                >
                  <p className="text-xs font-semibold text-sky-400">
                    {s.step}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-50">
                    {s.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] sm:p-8"
          >
            <div className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                Let&apos;s talk
              </h2>
              <p className="text-sm text-slate-300 sm:text-base">
                Share your plans, and we&apos;ll help you translate them into a
                clear technical roadmap.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-[0.7rem] text-slate-300">
                <span className="rounded-full border border-slate-800 bg-slate-950/40 px-2 py-1">
                  Response in 24–48h
                </span>
                <span className="rounded-full border border-slate-800 bg-slate-950/40 px-2 py-1">
                  Free consultation
                </span>
              </div>
              <div className="space-y-2 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-slate-100">Email:</span>{" "}
                  <a
                    href="mailto:contact@sumerotech.com"
                    className="text-sky-400 hover:text-sky-300"
                  >
                    contact@sumerotech.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-100">Phone:</span>{" "}
                  <a
                    href="tel:+6016 4740406"
                    className="text-sky-400 hover:text-sky-300"
                  >
                    +6 (016) 4740406
                  </a>
                </p>
              </div>
            </div>

            <form
  className="space-y-4 text-sm"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);
      form.reset();
      setTimeout(() => setSuccess(false), 2500);
    } else {
      alert("Failed to send message");
      console.log(data);
    }
  }}
>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-sky-500/0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/60"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Company
                  </label>
                  <input
                    name="company"
                    id="company"
                    type="text"
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-sky-500/0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/60"
                    placeholder="Your company"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-sky-500/0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/60"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-300"
                >
                  Project details
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 w-full resize-none rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-sky-500/0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/60"
                  placeholder="Tell us about your goals, timeline, and budget."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-4 py-2.5 text-sm font-medium text-slate-950 shadow-[0_0_18px_rgba(56,189,248,0.7)] transition hover:bg-sky-400 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Footer */}
          <footer className="pt-6 text-xs text-slate-500">
            <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
              <p>
                © {new Date().getFullYear()} Sumero Technologies. All rights
                reserved.
              </p>
              <p className="text-[0.7rem] text-slate-600">
                Powered by Sumero Technologies.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
