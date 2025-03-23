import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  if (req.method !== "POST")
    return NextResponse.json({ status: 405, message: "Method Not Allowed" });

  const { email } = await req.json();
  console.log(email);

  // Configure your email service
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"MetaMorph Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Pre-Registration Confirmation",
      text: `Thank you for pre-registering for MetaMorph 2025!\n\nYour registration has been confirmed. We'll notify you when the event approaches.\n\nBest regards,\nMetaMorph Team`,
    });

    return NextResponse.json({
      status: 200,
      message: "Registration successful",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      error: "Failed to send confirmation email",
    });
  }
}
