import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const scope = String(body.scope ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid name, email, and message." }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_PORT = "587", SMTP_USER, SMTP_PASSWORD } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
      return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
    }

    const port = Number(SMTP_PORT);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM ?? SMTP_USER,
      to: process.env.CONTACT_TO ?? "suraj.gaire.03@gmail.com",
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nScope: ${scope}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}
