"use client";

import { useEffect } from "react";

/** Fires a lightweight custom event so existing analytics hooks can listen. */
export function PricingViewTracker() {
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("sumero_analytics", { detail: { event: "pricing_view" } }),
    );
  }, []);
  return null;
}
