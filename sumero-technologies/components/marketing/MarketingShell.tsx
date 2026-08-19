import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-white text-slate-950">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-white"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_100%_70%_at_50%_-30%,rgba(0,139,255,0.07),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(0,194,168,0.045),transparent_45%)]"
        aria-hidden
      />
      <SiteHeader />
      <main className="relative">{children}</main>
      <SiteFooter />
    </div>
  );
}
