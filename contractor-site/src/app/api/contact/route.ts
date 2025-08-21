import { NextRequest, NextResponse } from "next/server";

// Example: send to email or webhook. Here we log and pretend to send.
export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Replace with real email or webhook integration
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  try {
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, source: "website" }),
      });
    } else {
      console.log("Contact submission:", { name, email, message });
    }
  } catch (error) {
    console.error("Failed to submit contact message:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.redirect(new URL("/contact?sent=1", request.url), {
    status: 303,
  });
}

