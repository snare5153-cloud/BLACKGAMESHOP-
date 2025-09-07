"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, Check } from "lucide-react"
import { useCart, type CartItem } from "@/lib/cart-context"
import { useState } from "react"

interface AddToCartButtonProps {
  item: Omit<CartItem, "quantity">
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

export function AddToCartButton({ item, className, variant = "outline" }: AddToCartButtonProps) {
  const { dispatch } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: item })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Button onClick={handleAddToCart} className={className} variant={variant} disabled={isAdded}>
      {isAdded ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </>
      )}
    </Button>
  )
}
