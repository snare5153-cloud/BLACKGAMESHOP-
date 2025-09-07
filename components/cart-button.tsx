"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"

export function CartButton() {
  const { state } = useCart()

  return (
    <Button variant="outline" size="sm" asChild>
      <Link href="/cart">
        <ShoppingCart className="w-4 h-4 mr-2" />
        Cart ({state.itemCount})
      </Link>
    </Button>
  )
}
