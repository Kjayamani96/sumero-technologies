/**
 * Live HealthOS workspace (staff sign-in). Marketing "Log in" sends people here.
 * Override: NEXT_PUBLIC_HEALTHOS_WORKSPACE_ORIGIN=https://your-clinic-app.example
 */
export const HEALTHOS_WORKSPACE_ORIGIN =
  process.env.NEXT_PUBLIC_HEALTHOS_WORKSPACE_ORIGIN ??
  "https://clinic.sumero.health";

export function healthosLoginUrl(): string {
  const base = HEALTHOS_WORKSPACE_ORIGIN.replace(/\/$/, "");
  return `${base}/login`;
}
