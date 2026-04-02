import type { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body: { name: string; email: string; company: string; message?: string; source: string };
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ success: false, message: "Invalid JSON" }) };
  }

  const { name, email, company, message, source } = body;

  if (!name || !email || !company || !source) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: "Missing required fields" }),
    };
  }

  const smtpConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

  if (!smtpConfigured) {
    console.warn("[email] SMTP env vars not set — logging submission only.");
    console.log({ source, name, email, company, message });
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Submission received (email not configured)." }),
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Process Plant AI Website" <${process.env.SMTP_USER}>`,
      to: "info@processplantai.com",
      replyTo: email,
      subject: `New ${source}: ${name} from ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">
            New Submission: ${source}
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="background: #f8fafc;">
              <td style="padding: 10px 14px; font-weight: bold; color: #475569; width: 120px;">Name</td>
              <td style="padding: 10px 14px; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; color: #475569;">Email</td>
              <td style="padding: 10px 14px; color: #0f172a;">
                <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
              </td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 10px 14px; font-weight: bold; color: #475569;">Company</td>
              <td style="padding: 10px 14px; color: #0f172a;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; color: #475569;">Message</td>
              <td style="padding: 10px 14px; color: #0f172a;">${message || "<em>No message provided</em>"}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 10px 14px; font-weight: bold; color: #475569;">Source</td>
              <td style="padding: 10px 14px; color: #0f172a;">${source}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
            Sent from the Process Plant AI website contact form.
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        success: true,
        message: "Information received successfully. Our team will contact you at info@processplantai.com shortly.",
      }),
    };
  } catch (err) {
    console.error("[email] Failed to send:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, message: "Failed to send email." }),
    };
  }
};
