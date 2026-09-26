import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, role, slot, project, ...utmParams } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL || process.env.CONTACT_WEBHOOK_URL;

    if (webhookUrl) {
      const payload = {
        embeds: [
          {
            title: "New FOI Registration",
            color: 0xe85d5d,
            fields: [
              { name: "Name", value: fullName, inline: true },
              { name: "Email", value: email, inline: true },
              { name: "Role", value: role, inline: true },
              { name: "Time Slot", value: slot, inline: true },
              { name: "Project", value: project || "Not specified", inline: false },
              { name: "UTM Source", value: utmParams.utm_source || "Direct", inline: true },
              { name: "UTM Medium", value: utmParams.utm_medium || "None", inline: true },
              { name: "UTM Campaign", value: utmParams.utm_campaign || "None", inline: true },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      };

      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    console.log("Contact form submission:", { fullName, email, role, slot, project, ...utmParams });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}