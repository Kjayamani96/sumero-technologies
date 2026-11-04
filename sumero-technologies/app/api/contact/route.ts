import { Resend } from "resend";
import { validateContact } from "@/lib/contact";

const fallback = "Please email support@sumerotech.com.";
const esc = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
export async function POST(req: Request) {
  if (Number(req.headers.get("content-length")) > 16000)
    return Response.json(
      { success: false, message: "Your enquiry is too long." },
      { status: 413 },
    );
  let body: unknown;
  try {
    const raw = await req.text();
    if (raw.length > 16000)
      return Response.json(
        { success: false, message: "Your enquiry is too long." },
        { status: 413 },
      );
    body = JSON.parse(raw);
  } catch {
    return Response.json(
      { success: false, message: "Please send a valid enquiry." },
      { status: 400 },
    );
  }
  const { payload, error } = validateContact(body);
  if (!payload)
    return Response.json({ success: false, message: error }, { status: 400 });
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !from || !to)
    return Response.json(
      {
        success: false,
        message: `The enquiry form is not configured to send yet. ${fallback}`,
      },
      { status: 503 },
    );
  const rows = [
    ["Contact", payload.name],
    ["Clinic", payload.clinicName],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Branches", payload.branches],
    ["Main requirement", payload.requirement],
    ["Plan interest", payload.plan],
    ["Enquiry contact consent", "Confirmed"],
  ];
  try {
    const { data, error: sendError } = await new Resend(key).emails.send({
      from,
      to,
      subject: "HealthOS demo / trial enquiry",
      ...(payload.email ? { replyTo: payload.email } : {}),
      text: rows.map(([k, v]) => `${k}: ${v || "—"}`).join("\n"),
      html: `<h2>HealthOS demo / trial enquiry</h2><table>${rows.map(([k, v]) => `<tr><th align="left">${esc(k)}</th><td style="white-space:pre-wrap">${esc(v || "—")}</td></tr>`).join("")}</table>`,
    });
    if (sendError || !data?.id)
      return Response.json(
        {
          success: false,
          message: `We could not submit your enquiry. ${fallback}`,
        },
        { status: 502 },
      );
    return Response.json({
      success: true,
      message:
        "Your enquiry has been submitted. The SUMERO team will contact you using the details provided.",
    });
  } catch {
    return Response.json(
      {
        success: false,
        message: `We could not submit your enquiry. ${fallback}`,
      },
      { status: 502 },
    );
  }
}
