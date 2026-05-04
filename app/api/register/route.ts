import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as XLSX from "xlsx";
import { writeFile } from "fs/promises";
import crypto from "crypto";
import os from "os";
import path from "path";
import QRCode from "qrcode";
import { ThankYouEmailHandler } from "@/app/utils/email-template";
import { AdminRegistrationEmail } from "@/app/utils/admin-email-template";

const EVENT_NAME = process.env.EVENT_NAME || "Bengaluru Plot Expo 2026";
const ALLOWED_TYPES = ["visitor", "exhibitor"] as const;

/** Basic HTML escape to prevent injection */
const escapeHtml = (str = "") =>
  str.replace(
    /[&<>"']/g,
    (m) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[m] as string,
  );

export async function POST(req: NextRequest) {
  try {
    const type =
      req.nextUrl.searchParams.get("t") ||
      req.nextUrl.searchParams.get("type") ||
      "enquiry";
    const data = await req.json();

    const {
      name,
      workEmail = "",
      phoneNumber = "",
      companyName = "",
      industry = "",
      jobTitle = "",
      businessType = "",
      message = "",
      termsAccepted,
      marketingConsent,
      location = "",
      budget = "",
      bengaluruPart = "",
      utmCampaign = "direct_campaign",
      utmMedium = "website",
      utmSource = "direct",
      leadId,
    } = data;

    console.log(data);
    // Basic validation
    if (!name || !termsAccepted) {
      return NextResponse.json(
        { error: "Name and terms acceptance are required" },
        { status: 400 },
      );
    }

    if (type === "visitor" && !workEmail) {
      return NextResponse.json(
        { error: "Email is required for visitors" },
        { status: 400 },
      );
    }

    const visitorPassId =
      type === "visitor"
        ? (leadId ??
          `BPE-${crypto.randomBytes(3).toString("hex").toUpperCase()}`)
        : "";

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST!,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

    const adminEmailHtml = AdminRegistrationEmail({
      eventName: EVENT_NAME,
      type: capitalizedType,
      visitorPassId,
      name,
      workEmail,
      phoneNumber,
      companyName,
      industry,
      jobTitle,
      businessType,
      budget,
      location,
      message,
      termsAccepted,
      marketingConsent,
      submittedAt,
      utmSource,
      utmMedium,
      utmCampaign,
    });

    await transporter.sendMail({
      from: `"${EVENT_NAME}" <${process.env.EMAIL_NOREPLY_ADDRESS}>`,
      to: process.env.TO_USER!,
      subject: `New ${capitalizedType} Registration - ${name}`,
      html: adminEmailHtml,
      attachments: [],
    });

    /* -------------------- Visitor Email + QR -------------------- */

    if (type === "visitor" && visitorPassId) {
      await transporter.sendMail({
        from: `"${EVENT_NAME}" <${process.env.EMAIL_NOREPLY_ADDRESS}>`,
        to: workEmail,
        subject: `Your Visitor Pass - ${EVENT_NAME}`,
        html: ThankYouEmailHandler({
          name,
          visitorPassId,
        }),
      });
    }

    /* -------------------- Google Sheets -------------------- */

    await fetch(process.env.GOOGLE_APPS_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        visitorPassId,
        name,
        workEmail,
        phoneNumber,
        companyName,
        industry,
        jobTitle,
        businessType,
        budget,
        location,
        message,
        termsAccepted,
        marketingConsent,
        bengaluruPart,
        submittedAt,
        utmSource,
        utmMedium,
        utmCampaign,
      }),
    });

    return NextResponse.json({ success: true, visitorPassId });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Failed to submit registration" },
      { status: 500 },
    );
  }
}
