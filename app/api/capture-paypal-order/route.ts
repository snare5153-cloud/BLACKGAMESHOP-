import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { orderId } = await request.json()

    // In a real implementation, you would capture the PayPal order here
    // For now, we'll simulate a successful capture
    const captureData = {
      id: orderId,
      status: "COMPLETED",
      payer: {
        email_address: "customer@example.com",
        payer_id: "PAYER123",
      },
      purchase_units: [
        {
          payments: {
            captures: [
              {
                id: `CAPTURE_${Date.now()}`,
                status: "COMPLETED",
                amount: {
                  currency_code: "USD",
                  value: "0.00", // This would be the actual amount
                },
              },
            ],
          },
        },
      ],
    }

    return NextResponse.json(captureData)
  } catch (error) {
    console.error("PayPal order capture error:", error)
    return NextResponse.json({ error: "Failed to capture PayPal order" }, { status: 500 })
  }
}
