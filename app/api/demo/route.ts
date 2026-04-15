import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { firstName, company, email, phone, role, comments } = await req.json()

    await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `🔥 *New demo request*\n*Name:* ${firstName}\n*Company:* ${company}\n*Email:* ${email}\n*Phone:* ${phone}\n*Role:* ${role}\n*Comments:* ${comments}`,
      }),
    })

    await resend.emails.send({
      from: "boilerroom <sadid@boilerroom.ai>",
      to: "sadid@boilerroom.ai",
      subject: `New demo request from ${firstName} at ${company}`,
      html: `
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Comments:</strong> ${comments}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Demo form error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
