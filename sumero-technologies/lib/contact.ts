export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_PATTERN = /^\+?[\d\s().-]{7,25}$/;
export type ContactPayload = {
  name: string;
  clinicName: string;
  email: string;
  phone: string;
  branches: string;
  requirement: string;
  consent: boolean;
  plan: string;
};
export function validateContact(body: unknown): {
  payload?: ContactPayload;
  error?: string;
} {
  if (!body || typeof body !== "object" || Array.isArray(body))
    return { error: "Please enter your clinic details." };
  const input = body as Record<string, unknown>;
  const read = (key: string) =>
    typeof input[key] === "string" ? input[key].trim() : "";
  const payload = {
    name: read("name"),
    clinicName: read("clinicName"),
    email: read("email"),
    phone: read("phone"),
    branches: read("branches"),
    requirement: read("requirement"),
    consent: input.consent === true,
    plan: read("plan"),
  };
  if (
    !payload.name ||
    !payload.clinicName ||
    !payload.requirement ||
    !payload.consent
  )
    return {
      error:
        "Enter your name, clinic and main requirement, and confirm enquiry contact consent.",
    };
  if (!payload.email && !payload.phone)
    return {
      error: "Enter an email address or phone number so we can contact you.",
    };
  if (
    (payload.email && !EMAIL_PATTERN.test(payload.email)) ||
    (payload.phone && !PHONE_PATTERN.test(payload.phone))
  )
    return { error: "Please check your email address or phone number." };
  if (!/^\d{1,4}$/.test(payload.branches) || Number(payload.branches) < 1)
    return { error: "Enter a branch count between 1 and 9999." };
  if (
    payload.name.length > 120 ||
    payload.clinicName.length > 160 ||
    payload.email.length > 254 ||
    payload.requirement.length > 2000 ||
    payload.plan.length > 120
  )
    return { error: "Please shorten your details and try again." };
  return { payload };
}
