import { NextRequest, NextResponse } from "next/server"

/**
 * Waiting-list capture (section 11). Creates the lead as a recipient in rapidmail
 * (German provider, DSGVO) via its API v3, with `send_activationmail=yes` so
 * rapidmail sends the double-opt-in mail, hosts the confirm link, flips the
 * recipient to confirmed and logs consent. The API is called server-side only
 * (credentials never reach the browser, no CORS). See PROJECT-LOG "11 — Form".
 */
const RAPIDMAIL_RECIPIENTS_URL =
  "https://apiv3.emailsys.net/v1/recipients?send_activationmail=yes"

export async function POST(req: NextRequest) {
  try {
    const { email, website } = await req.json()

    // Honeypot: real users never fill `website`. If it's set, it's a bot —
    // return success so the bot learns nothing, but don't record anything.
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ success: true })
    }

    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "A valid email is required" }, { status: 400 })
    }

    const username = process.env.RAPIDMAIL_API_USERNAME
    const password = process.env.RAPIDMAIL_API_PASSWORD
    const recipientlistId = process.env.RAPIDMAIL_RECIPIENTLIST_ID
    if (!username || !password || !recipientlistId) {
      // Surfaced clearly so a missing var is obvious while wiring up rapidmail.
      console.error(
        "Waitlist API: RAPIDMAIL_API_USERNAME / RAPIDMAIL_API_PASSWORD / " +
          "RAPIDMAIL_RECIPIENTLIST_ID must all be set — see PROJECT-LOG '11 — Form'"
      )
      return NextResponse.json({ error: "Service not configured" }, { status: 503 })
    }

    // rapidmail API v3 auth is HTTP Basic with an API user + password pair.
    const auth = Buffer.from(`${username}:${password}`).toString("base64")

    const res = await fetch(RAPIDMAIL_RECIPIENTS_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      // status "new" = unconfirmed; combined with send_activationmail=yes this
      // starts rapidmail's double opt-in. recipientlist_id must be numeric.
      body: JSON.stringify({
        recipientlist_id: Number(recipientlistId),
        email: email.trim(),
        status: "new",
      }),
    })

    // rapidmail returns 201 Created on success.
    if (res.status === 201) {
      return NextResponse.json({ success: true })
    }

    // Re-signup of an existing recipient (409 Conflict / "already exists") is not
    // a failure from the user's point of view — they're already on the list, so
    // don't surface an error. rapidmail won't re-send the DOI mail in that case.
    const text = await res.text()
    if (res.status === 409 || /already\s*exist|bereits/i.test(text)) {
      return NextResponse.json({ success: true })
    }

    console.error("Waitlist API: rapidmail did not confirm success", res.status, text.slice(0, 200))
    return NextResponse.json({ error: "Upstream error" }, { status: 502 })
  } catch (err) {
    console.error("Waitlist API error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
