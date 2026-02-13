"use server";
import { createTransport, getTestMessageUrl } from "nodemailer";

const transporter = createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_TO,
    pass: process.env.MAIL_PASSWORD,
  },
});

export async function sendEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const { name, email, subject, message } = data;

  const info = await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.MAIL_TO,
    subject,
    text: `This message was sent from the contact form of zen2spirit.be!\n\n${message}`,
  });

  getTestMessageUrl(info);

  if (info.rejected.length > 0) {
    return {
      success: false,
      error: "Failed to send email",
      details: info.rejected,
    };
  }

  return { success: true };
}
