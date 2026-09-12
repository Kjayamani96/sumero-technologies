import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BRANCH_PATTERN = /^\d+$/;
const ALLOWED_CONTACT_METHODS = new Set(["Email", "Phone call", "WhatsApp"]);
const ALLOWED_INTERESTS = new Set([
  "Clinic workflow",
  "Plans and pricing",
  "Panel and TPA operations",
  "MyInvois e-Invoice workflows",
  "Inventory and purchasing",
  "Workforce and attendance",
  "Data migration",
  "Multi-branch rollout",
  "Not sure yet",
]);

type ContactPayload = {
  name?: string;
  clinicName?: string;
  company?: string;
  email?: string;
  phone?: string;
  branches?: string;
  currentSystem?: string;
  primaryInterest?: string;
  preferredContact?: string;
  consent?: boolean;
};

function esc(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(req: Request) {
  const body = (await req.json()) as ContactPayload;

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const clinicName = String(body.clinicName ?? body.company ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const branches = String(body.branches ?? "").trim();
  const currentSystem = String(body.currentSystem ?? "").trim();
  const primaryInterest = String(body.primaryInterest ?? "").trim();
  const preferredContact = String(body.preferredContact ?? "").trim();
  const consent = body.consent === true;

  if (
    !name ||
    !clinicName ||
    !email ||
    !phone ||
    !branches ||
    !currentSystem ||
    !primaryInterest ||
    !preferredContact ||
    !consent ||
    !EMAIL_PATTERN.test(email) ||
    !BRANCH_PATTERN.test(branches) ||
    !ALLOWED_CONTACT_METHODS.has(preferredContact) ||
    !ALLOWED_INTERESTS.has(primaryInterest)
  ) {
    return Response.json(
      {
        success: false,
        message: "Please complete all required fields and confirm your consent.",
      },
      { status: 400 },
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Clinic", clinicName || "—"],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Branches", branches || "—"],
    ["Current system", currentSystem],
    ["Primary interest", primaryInterest],
    ["Preferred contact", preferredContact],
    ["Consent", "Confirmed"],
  ];

  try {
    const { data, error } = await resend.emails.send({
      from: "Sumero HealthOS <onboarding@resend.dev>",
      to: "kathikgesu.j@gmail.com",
      subject: `HealthOS enquiry: ${primaryInterest} — ${clinicName}`,
      replyTo: email,
      html: `
        <h2>New HealthOS enquiry</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          ${rows
            .map(
              ([label, value]) =>
                `<tr><td style="vertical-align:top;font-weight:600;padding-right:12px">${esc(label)}</td><td style="white-space:pre-wrap">${esc(value)}</td></tr>`,
            )
            .join("")}
        </table>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        {
          success: false,
          message: "We could not send your enquiry. Please email support@sumerotech.com.",
        },
        { status: 502 },
      );
    }

    console.log("Resend success:", data);
    return Response.json({ success: true, data });
  } catch (error: unknown) {
    console.error("Resend error:", error);
    const messageText =
      error instanceof Error ? error.message : "Unknown error";
    return Response.json(
      {
        success: false,
        message: messageText,
      },
      { status: 500 },
    );
  }
}
