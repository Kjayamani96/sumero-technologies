import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kathikgesu.j@gmail.com",
      subject: "New message from Sumero Technologies",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Resend success:", result);
    return Response.json({ success: true, result });
  } catch (error: any) {
    console.error("Resend error:", error);
    return Response.json(
      {
        success: false,
        message: error?.message || "Unknown error",
        error,
      },
      { status: 500 }
    );
  }
}