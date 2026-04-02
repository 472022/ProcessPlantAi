import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const smtpConfigured =
  process.env.SMTP_HOST &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS;

const transporter = smtpConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

if (!smtpConfigured) {
  console.warn(
    "[email] SMTP env vars not set — form submissions will be logged to console only."
  );
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  app.post("/api/contact", async (req, res) => {
    const { name, email, company, message, source } = req.body;

    console.log("New Lead Received:");
    console.log(`Source: ${source}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${company}`);
    console.log(`Message: ${message}`);

    if (!transporter) {
      return res.json({
        success: true,
        message: "Submission received (email delivery not configured).",
      });
    }

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

      res.json({
        success: true,
        message:
          "Information received successfully. Our team will contact you at info@processplantai.com shortly.",
      });
    } catch (err) {
      console.error("[email] Failed to send email:", err);
      res.status(500).json({ success: false, message: "Failed to send email." });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
