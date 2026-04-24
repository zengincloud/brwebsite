import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const FREE_DOMAINS = [
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.uk", "yahoo.fr",
  "hotmail.com", "hotmail.co.uk", "outlook.com", "live.com", "msn.com",
  "icloud.com", "me.com", "mac.com", "aol.com", "protonmail.com",
  "proton.me", "mail.com", "gmx.com", "yandex.com", "zoho.com",
]

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, email, company, phone } = await req.json()

    const domain = email.split("@")[1]?.toLowerCase()
    if (!domain || FREE_DOMAINS.includes(domain)) {
      return NextResponse.json({ error: "Please use a company email address." }, { status: 400 })
    }

    await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `📥 *New playbook download*\n*Name:* ${name}\n*Company:* ${company}\n*Email:* ${email}\n*Phone:* ${phone}`,
      }),
    })

    await resend.emails.send({
      from: "boilerroom <sadid@boilerroom.ai>",
      to: "sadid@boilerroom.ai",
      subject: `Playbook download: ${name} at ${company}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Playbook gate error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
