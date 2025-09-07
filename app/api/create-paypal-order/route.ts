import { type NextRequest, NextResponse } from "next/server"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

export async function POST(request: NextRequest) {
  try {
    const { items, total } = await request.json()

    // Create PayPal order data
    const orderData = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: total.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: total.toFixed(2),
              },
            },
          },
          items: items.map((item: CartItem) => ({
            name: item.name,
            unit_amount: {
              currency_code: "USD",
              value: item.price.toFixed(2),
            },
            quantity: item.quantity.toString(),
          })),
          payee: {
            email_address: "boye50469@gmail.com",
          },
        },
      ],
      application_context: {
        return_url: `${request.nextUrl.origin}/order-success`,
        cancel_url: `${request.nextUrl.origin}/cart`,
        brand_name: "BLACKGAMINGSHOP",
        user_action: "PAY_NOW",
      },
    }

    // In a real implementation, you would use PayPal SDK here
    // For now, we'll simulate the PayPal order creation
    const mockOrderId = `ORDER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Simulate PayPal approval URL
    const approvalUrl = `https://www.paypal.com/checkoutnow?token=${mockOrderId}`

    return NextResponse.json({
      id: mockOrderId,
      status: "CREATED",
      links: [
        {
          href: approvalUrl,
          rel: "approve",
          method: "GET",
        },
      ],
    })
  } catch (error) {
    console.error("PayPal order creation error:", error)
    return NextResponse.json({ error: "Failed to create PayPal order" }, { status: 500 })
  }
}
