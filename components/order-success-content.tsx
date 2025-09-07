"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, Home, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useCart } from "@/lib/cart-context"

interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  diamonds?: number
}

export function OrderSuccessContent() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [orderTotal, setOrderTotal] = useState(0)
  const [orderId, setOrderId] = useState("")
  const [isProcessing, setIsProcessing] = useState(true)
  const { dispatch } = useCart()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const processOrder = async () => {
      try {
        // Get PayPal parameters from URL
        const token = searchParams.get("token")
        const payerId = searchParams.get("PayerID")

        if (!token) {
          router.push("/cart")
          return
        }

        // Get stored order data
        const storedOrderId = localStorage.getItem("paypal-order-id")
        const storedItems = localStorage.getItem("order-items")
        const storedTotal = localStorage.getItem("order-total")

        if (!storedOrderId || !storedItems || !storedTotal) {
          router.push("/cart")
          return
        }

        // Capture the PayPal payment
        const captureResponse = await fetch("/api/capture-paypal-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderId: storedOrderId,
          }),
        })

        if (!captureResponse.ok) {
          throw new Error("Failed to capture payment")
        }

        const captureData = await captureResponse.json()

        if (captureData.status === "COMPLETED") {
          // Payment successful
          setOrderItems(JSON.parse(storedItems))
          setOrderTotal(Number.parseFloat(storedTotal))
          setOrderId(storedOrderId)

          // Clear cart and stored order data
          dispatch({ type: "CLEAR_CART" })
          localStorage.removeItem("paypal-order-id")
          localStorage.removeItem("order-items")
          localStorage.removeItem("order-total")
        } else {
          throw new Error("Payment not completed")
        }
      } catch (error) {
        console.error("Order processing error:", error)
        router.push("/cart?error=payment-failed")
      } finally {
        setIsProcessing(false)
      }
    }

    processOrder()
  }, [searchParams, router, dispatch])

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Processing Your Order</h2>
          <p className="text-muted-foreground">Please wait while we confirm your payment...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">BLACKGAMINGSHOP</h1>
          </div>
        </div>
      </nav>

      {/* Success Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Successful!</h1>
            <p className="text-muted-foreground">
              Your payment has been processed and your items will be delivered instantly.
            </p>
          </div>

          {/* Order Details */}
          <Card className="border-border/50 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Order Details</span>
                <Badge variant="secondary">#{orderId.slice(-8)}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
                >
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    {item.diamonds && (
                      <Badge variant="outline" className="mt-1">
                        {item.diamonds} Diamonds
                      </Badge>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                    <div className="text-sm text-muted-foreground">Qty: {item.quantity}</div>
                  </div>
                </div>
              ))}

              <div className="border-t border-border pt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Paid</span>
                  <span className="text-primary">${orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Information */}
          <Card className="border-border/50 mb-6">
            <CardHeader>
              <CardTitle>Delivery Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-green-600 mb-2">
                  <Zap className="w-5 h-5" />
                  <span className="font-medium">Instant Delivery</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your diamonds and items have been automatically added to your Mobile Legends account. Please check
                  your in-game inventory.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/diamonds">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop More
              </Link>
            </Button>
          </div>

          {/* Support Information */}
          <div className="text-center mt-8 p-4 bg-card/30 rounded-lg">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-muted-foreground">
              If you have any issues with your order or need support, please contact us at support@blackgamingshop.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
