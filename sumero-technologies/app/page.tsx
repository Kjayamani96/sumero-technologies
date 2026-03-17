"use client";
import Image from "next/image";




export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
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
              Sumero Technologies
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Building modern web and mobile solutions.
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Sumero Technologies partners with forward-thinking companies to
              design, build, and scale reliable digital products across web,
              mobile, and cloud platforms.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-[0_0_25px_rgba(56,189,248,0.7)] transition hover:bg-sky-400"
              >
                Contact Us
              </a>
              <span className="text-xs text-slate-400">
                Available for web, mobile, and product consultations.
              </span>
            </div>
          </div>

          {/* Simple hero card */}
          <div className="relative mt-8 w-full max-w-md rounded-3xl border border-slate-700/70 bg-slate-900/70 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.7)] backdrop-blur-xl lg:mt-0">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              What we do
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-100">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Design and develop high-quality web applications.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Ship native-feeling mobile apps for iOS and Android.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                <span>Integrate complex systems and modernize legacy stacks.</span>
              </li>
            </ul>
          </div>
        </header>

        {/* Main content sections */}
        <main className="mt-10 space-y-12 border-t border-slate-800 pt-10 text-sm sm:text-base">
          {/* Services */}
          <section id="services" className="space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                  Services
                </h2>
                <p className="text-xs text-slate-400 sm:text-sm">
                  End-to-end delivery for modern digital products.
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
                  Modern, responsive web applications built with robust
                  front-end and back-end architectures.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <span className="text-lg">📱</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Mobile App Development
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Native and cross-platform experiences tailored for mobile
                  users on iOS and Android.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                  <span className="text-lg">🔗</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-100">
                  System Integration
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Connect services, APIs, and data sources into unified,
                  reliable systems.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300">
                  <span className="text-lg">💡</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-100">
                  IT Consulting
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Strategic guidance on architecture, performance, and technology
                  roadmaps.
                </p>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              About Sumero Technologies
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              We believe technology should be simple to use and powerful behind
              the scenes. Sumero Technologies combines technical depth with
              product thinking to help teams ship software that is reliable,
              secure, and delightful to use. From early-stage prototypes to
              large-scale systems, we focus on solutions that can evolve with
              your business.
            </p>
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

            <form className="space-y-4 text-sm"
            onSubmit={async (e) => {
              e.preventDefault();
              
              const formData = new FormData(e.currentTarget);
              
              const res = await fetch("/api/contact", {
              method: "POST",
              headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify({
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message"),
              }),
              });
              
              const data = await res.json();
              console.log(data);
              
              alert("Message sent!");
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
className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2"
placeholder="Your name"
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
              <p>Powered by Sumero Technologies.</p>
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
