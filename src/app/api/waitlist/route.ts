import { NextRequest, NextResponse } from "next/server"

/**
 * Waiting-list capture (section 11). Forwards the lead to a Google Apps Script
 * web app, which appends it as a row to the bound Google Sheet. The webhook URL
 * is called server-side only (never exposed to the browser, no CORS). See
 * PROJECT-LOG "11 — Form" for the Apps Script setup.
 */
export async function POST(req: NextRequest) {
  try {
    const { email, name, website } = await req.json()

    // Honeypot: real users never fill `website`. If it's set, it's a bot —
    // return success so the bot learns nothing, but don't record anything.
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ success: true })
    }

    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "A valid email is required" }, { status: 400 })
    }

    const url = process.env.WAITLIST_WEBHOOK_URL
    if (!url) {
      // Surfaced clearly so a missing var is obvious while wiring up the sheet.
      console.error(
        "Waitlist API: WAITLIST_WEBHOOK_URL is not set — see PROJECT-LOG '11 — Form'"
      )
      return NextResponse.json({ error: "Service not configured" }, { status: 503 })
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Apps Script returns a 302 → googleusercontent redirect; fetch follows it.
      // `secret` lets the script reject direct POSTs to its public /exec URL.
      body: JSON.stringify({
        email: email.trim(),
        name: name ?? "",
        secret: process.env.WAITLIST_WEBHOOK_SECRET ?? "",
      }),
    })

    if (!res.ok) {
      console.error(
        "Waitlist API: webhook responded",
        res.status,
        await res.text().catch(() => "")
      )
      return NextResponse.json({ error: "Upstream error" }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Waitlist API error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
