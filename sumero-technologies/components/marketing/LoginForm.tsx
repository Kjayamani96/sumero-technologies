"use client";

import { useState } from "react";
import Link from "next/link";
import { healthosLoginUrl } from "@/lib/workspace";

export function LoginForm() {
  const [show, setShow] = useState(false);

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        const url = healthosLoginUrl();
        if (typeof window !== "undefined") {
          window.location.assign(url);
        }
      }}
    >
      <div>
        <label
          htmlFor="login-email"
          className="block text-sm font-medium text-zinc-700"
        >
          Email or username
        </label>
        <input
          id="login-email"
          name="email"
          type="text"
          autoComplete="username"
          placeholder="you@clinic.com"
          className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none ring-zinc-900/5 transition placeholder:text-zinc-400 focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20"
        />
      </div>
      <div>
        <label
          htmlFor="login-password"
          className="block text-sm font-medium text-zinc-700"
        >
          Password
        </label>
        <div className="relative mt-2">
          <input
            id="login-password"
            name="password"
            type={show ? "text" : "password"}
            autoComplete="current-password"
            placeholder="••••••••"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 pr-12 text-sm text-zinc-900 shadow-sm outline-none ring-zinc-900/5 transition placeholder:text-zinc-400 focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20"
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-medium text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800"
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-sky-900/20 transition hover:from-sky-500 hover:to-sky-400"
      >
        Continue to workspace sign-in
      </button>
      <p className="text-center text-xs text-zinc-500">
        You will open your live clinic workspace in a secure session.{" "}
        <Link
          href="/contact"
          className="font-medium text-sky-600 hover:text-sky-500"
        >
          Need access?
        </Link>
      </p>
    </form>
  );
}
