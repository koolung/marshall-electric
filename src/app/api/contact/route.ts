import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function adminEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
      <div style="background:linear-gradient(135deg,#1172ae 0%,#3b9dd4 100%);padding:32px 40px;">
        <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">⚡ New Contact Form Submission</h1>
        <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Marshall Electric Website</p>
      </div>
      <div style="padding:32px 40px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;width:120px;vertical-align:top;">Name</td>
            <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#111827;font-size:15px;">${escapeHtml(data.name)}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Email</td>
            <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#111827;font-size:15px;"><a href="mailto:${escapeHtml(data.email)}" style="color:#1172ae;text-decoration:none;">${escapeHtml(data.email)}</a></td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Phone</td>
            <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#111827;font-size:15px;"><a href="tel:${escapeHtml(data.phone)}" style="color:#1172ae;text-decoration:none;">${escapeHtml(data.phone)}</a></td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Service</td>
            <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#111827;font-size:15px;">
              <span style="display:inline-block;background:#1172ae10;color:#1172ae;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:500;">${escapeHtml(data.service)}</span>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Message</td>
            <td style="padding:12px 0;color:#111827;font-size:15px;line-height:1.6;">${escapeHtml(data.message).replace(/\n/g, "<br/>")}</td>
          </tr>
        </table>
      </div>
    </div>
    <p style="text-align:center;margin:24px 0 0;color:#9ca3af;font-size:12px;">
      Powered by <a href="https://www.bedfordwebservices.com" style="color:#1172ae;text-decoration:none;font-weight:500;">BWS</a>
    </p>
  </div>
</body>
</html>`;
}

function confirmationEmailHtml(name: string) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
      <div style="background:linear-gradient(135deg,#1172ae 0%,#3b9dd4 100%);padding:32px 40px;text-align:center;">
        <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">⚡ Marshall Electric</h1>
        <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Professional Electrical Services</p>
      </div>
      <div style="padding:40px;">
        <h2 style="margin:0 0 16px;color:#111827;font-size:20px;font-weight:600;">Thank you, ${escapeHtml(name)}!</h2>
        <p style="margin:0 0 16px;color:#4b5563;font-size:15px;line-height:1.7;">
          We've received your message and appreciate you reaching out to Marshall Electric. A member of our team will review your inquiry and get back to you as soon as possible.
        </p>
        <p style="margin:0 0 24px;color:#4b5563;font-size:15px;line-height:1.7;">
          If your matter is urgent, please don't hesitate to call us directly.
        </p>
        <div style="background:#f9fafb;border-radius:12px;padding:20px;margin-bottom:24px;">
          <p style="margin:0 0 8px;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Contact Us Directly</p>
          <p style="margin:0 0 4px;color:#111827;font-size:15px;">📞 <a href="tel:(902)802-9044" style="color:#1172ae;text-decoration:none;">(902) 802-9044</a></p>
          <p style="margin:0;color:#111827;font-size:15px;">✉️ <a href="mailto:derrick@marshallelectrichfx.com" style="color:#1172ae;text-decoration:none;">derrick@marshallelectrichfx.com</a></p>
        </div>
        <div style="text-align:center;">
          <a href="https://marshallelectrichfx.com" style="display:inline-block;background:linear-gradient(135deg,#1172ae 0%,#3b9dd4 100%);color:#ffffff;padding:12px 32px;border-radius:30px;font-size:14px;font-weight:600;text-decoration:none;">Visit Our Website</a>
        </div>
      </div>
    </div>
    <p style="text-align:center;margin:24px 0 0;color:#9ca3af;font-size:12px;">
      Powered by <a href="https://www.bedfordwebservices.com" style="color:#1172ae;text-decoration:none;font-weight:500;">BWS</a>
    </p>
  </div>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return Response.json(
        { error: "reCAPTCHA verification failed." },
        { status: 400 }
      );
    }

    const formData = { name, email, phone: phone || "Not provided", service: service || "Not specified", message };

    // Send admin notification
    await transporter.sendMail({
      from: `"Marshall Electric" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission - ${name}`,
      html: adminEmailHtml(formData),
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: `"Marshall Electric" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting Marshall Electric",
      html: confirmationEmailHtml(name),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
