// app/api/chat/route.ts
import { NextResponse } from "next/server";

// Static answers for free chatbot
const answers: Record<string, string> = {
  pricing: `
Premium Interior: $89-$149
Ultimate Interior: $179-$249
Premium Exterior: $99-$179
Ultimate Exterior: $119-$199
Cut & Polish (1 stage): $249-$399
Paint Correction (2 stage): $399-$549
Ceramic Coating: +$350 on top of Cut & Polish or Paint Correction
  `,
  packages: `
We offer these packages: Interior, Exterior, Full Detail, Paint Correction, Ceramic Coating.
Each package can be customized based on your car type and size.
  `,
  "book a detail": `
You can book a service or get a quick quote:
- 📅 Book Now: /booking
- 📩 Get a Quote: /contact
  `,
};

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message || message.trim() === "") {
      return NextResponse.json({ reply: "Please type a question or choose an option." });
    }

    const lower = message.toLowerCase();

    // Match static answers
    let reply = "Sorry, I didn’t understand that. You can choose Pricing, Packages, or Book a detail.";

    if (lower.includes("pricing")) reply = answers.pricing;
    else if (lower.includes("package")) reply = answers.packages;
    else if (lower.includes("book")) reply = answers["book a detail"];
    else if (lower.includes("quote")) reply = answers["book a detail"];
    else if (lower.includes("paint correction")) reply = "Paint Correction (2 stage) typically ranges from $399-$549 based on vehicle size.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({
      reply: "Oops! Something went wrong. Please try again later.",
    });
  }
}
