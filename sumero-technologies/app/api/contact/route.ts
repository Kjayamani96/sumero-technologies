import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name?: string;
  clinicName?: string;
  company?: string;
  email?: string;
  phone?: string;
  branches?: string;
  doctors?: string;
  currentSystem?: string;
  mainProblem?: string;
  interestedPlan?: string;
  preferredDemoTime?: string;
  message?: string;
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
  const doctors = String(body.doctors ?? "").trim();
  const currentSystem = String(body.currentSystem ?? "").trim();
  const mainProblem = String(body.mainProblem ?? "").trim();
  const interestedPlan = String(body.interestedPlan ?? "").trim();
  const preferredDemoTime = String(body.preferredDemoTime ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email) {
    return Response.json(
      { success: false, message: "Name and email are required." },
      { status: 400 },
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Clinic", clinicName || "—"],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Branches", branches || "—"],
    ["Doctors", doctors || "—"],
    ["Current system", currentSystem || "—"],
    ["Main problem", mainProblem || "—"],
    ["Interested plan", interestedPlan || "—"],
    ["Preferred demo time", preferredDemoTime || "—"],
    ["Message", message || "—"],
  ];

  try {
    const result = await resend.emails.send({
      from: "Sumero Technologies <support@sumerotech.com>",
      to: "support@sumerotech.com",
      subject: `HealthOS enquiry${interestedPlan ? `: ${interestedPlan}` : ""} — ${clinicName || name}`,
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

    console.log("Resend success:", result);
    return Response.json({ success: true, result });
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
