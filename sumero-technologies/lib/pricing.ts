/** Shared HealthOS public pricing — keep figures consistent site-wide. */

export const PRICING = {
  essential: {
    id: "essential",
    name: "Essential",
    monthly: 149,
    annual: 1490,
    currency: "MYR",
    per: "clinic",
  },
  professional: {
    id: "professional",
    name: "Professional",
    monthly: 299,
    annual: 2990,
    currency: "MYR",
    per: "clinic",
  },
  founding: {
    monthly: 199,
    months: 12,
    onboarding: 390,
    professionalOnboardingStandard: 890,
  },
  onboarding: {
    essential: 390,
    professional: 890,
    migrationFrom: 750,
    onsiteDay: 800,
    prioritySupportFrom: 250,
  },
} as const;

export type BillingPeriod = "monthly" | "annual";

export function formatRm(amount: number): string {
  return `RM${amount.toLocaleString("en-MY")}`;
}

export function contactPlanHref(
  plan: "essential" | "professional" | "group" | "founding-clinic" | "not-sure",
): string {
  const map = {
    essential: "Essential",
    professional: "Professional",
    group: "Group",
    "founding-clinic": "Founding Clinic Programme",
    "not-sure": "Not sure",
  } as const;
  const interest =
    plan === "founding-clinic"
      ? "founding-clinic"
      : plan === "essential"
        ? "essential"
        : plan === "professional"
          ? "professional"
          : plan === "group"
            ? "group"
            : "not-sure";
  const params = new URLSearchParams({
    plan: map[plan],
    interest,
  });
  return `/contact?${params.toString()}`;
}
