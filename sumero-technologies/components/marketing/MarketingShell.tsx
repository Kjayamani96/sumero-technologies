import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-zinc-950"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_120%_80%_at_50%_-40%,rgba(39,39,42,0.9),transparent_55%),radial-gradient(ellipse_80%_50%_at_100%_20%,rgba(14,165,233,0.06),transparent_45%),radial-gradient(ellipse_60%_40%_at_0%_60%,rgba(139,92,246,0.04),transparent_40%)]"
        aria-hidden
      />
      <SiteHeader />
      <main className="relative">{children}</main>
      <SiteFooter />
    </div>
  );
}
