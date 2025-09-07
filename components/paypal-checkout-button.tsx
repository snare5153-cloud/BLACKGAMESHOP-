"use client"

import { Button } from "@/components/ui/button"
import { CreditCard, Loader2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function PayPalCheckoutButton() {
  const { state, dispatch } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handlePayPalCheckout = async () => {
    if (state.items.length === 0) return

    setIsLoading(true)

    try {
      // Create PayPal order
      const response = await fetch("/api/create-paypal-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: state.items,
          total: state.total,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to create PayPal order")
      }

      const orderData = await response.json()

      // Find the approval URL
      const approvalUrl = orderData.links?.find((link: any) => link.rel === "approve")?.href

      if (approvalUrl) {
        // Store order data for later use
        localStorage.setItem("paypal-order-id", orderData.id)
        localStorage.setItem("order-items", JSON.stringify(state.items))
        localStorage.setItem("order-total", state.total.toString())

        // Redirect to PayPal for payment
        window.location.href = approvalUrl
      } else {
        throw new Error("No approval URL found")
      }
    } catch (error) {
      console.error("PayPal checkout error:", error)
      alert("Failed to initiate PayPal checkout. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      size="lg"
      className="w-full bg-primary hover:bg-primary/90"
      onClick={handlePayPalCheckout}
      disabled={isLoading || state.items.length === 0}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <CreditCard className="w-5 h-5 mr-2" />
          Checkout with PayPal
        </>
      )}
    </Button>
  )
}
