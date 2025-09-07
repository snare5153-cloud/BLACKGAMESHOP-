import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Zap, ArrowLeft, Gem } from "lucide-react"
import Link from "next/link"
import { CartButton } from "@/components/cart-button"
import { AddToCartButton } from "@/components/add-to-cart-button"

const diamondPackages = [
  {
    id: "diamond-11",
    diamonds: 11,
    price: 0.22,
    originalPrice: null,
    badge: "Starter",
    description: "Perfect for beginners",
    popular: false,
    savings: null,
  },
  {
    id: "diamond-28",
    diamonds: 28,
    price: 0.56,
    originalPrice: null,
    badge: "Popular",
    description: "Great value for casual players",
    popular: true,
    savings: null,
  },
  {
    id: "diamond-59",
    diamonds: 59,
    price: 1.18,
    originalPrice: 1.3,
    badge: "Best Value",
    description: "Most popular choice",
    popular: false,
    savings: "Save 9%",
  },
  {
    id: "diamond-85",
    diamonds: 85,
    price: 1.7,
    originalPrice: 1.87,
    badge: "Recommended",
    description: "Great for regular players",
    popular: false,
    savings: "Save 9%",
  },
  {
    id: "diamond-170",
    diamonds: 170,
    price: 3.4,
    originalPrice: 3.74,
    badge: "Premium",
    description: "Perfect for serious gamers",
    popular: false,
    savings: "Save 9%",
  },
  {
    id: "diamond-240",
    diamonds: 240,
    price: 4.8,
    originalPrice: 5.28,
    badge: "Elite",
    description: "Maximum value package",
    popular: false,
    savings: "Save 9%",
  },
  {
    id: "diamond-355",
    diamonds: 355,
    price: 7.1,
    originalPrice: 7.81,
    badge: "Ultimate",
    description: "For the ultimate experience",
    popular: false,
    savings: "Save 9%",
  },
  {
    id: "diamond-720",
    diamonds: 720,
    price: 14.4,
    originalPrice: 15.84,
    badge: "Mega",
    description: "Massive diamond bundle",
    popular: false,
    savings: "Save 9%",
  },
  {
    id: "diamond-1220",
    diamonds: 1220,
    price: 24.4,
    originalPrice: 26.84,
    badge: "Supreme",
    description: "Supreme diamond collection",
    popular: false,
    savings: "Save 9%",
  },
]

export default function DiamondsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold text-foreground">BLACKGAMINGSHOP</h1>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/weekly-pass" className="text-muted-foreground hover:text-primary transition-colors">
                Weekly Pass
              </Link>
              <CartButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/51837684d7181119a1a4f0a38f206f81.jpg-6NEVW2QN3734pl8qyTAqHgfASyDtTC.jpeg"
                  alt="Mobile Legends Diamond"
                  className="relative w-24 h-24 rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Mobile Legends Bang Bang</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Diamond <span className="text-primary">Shop</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Choose from our premium diamond packages. All purchases are processed securely through PayPal with instant
              delivery.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Secure PayPal Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Instant Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-primary" />
                <span>5-Star Rated Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diamond Packages Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-muted-foreground">All packages include instant delivery and 24/7 support</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {diamondPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative overflow-hidden transition-all duration-300 group hover:scale-105 ${
                  pkg.popular
                    ? "border-primary/50 bg-gradient-to-br from-primary/5 to-card"
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold transform rotate-12">
                    POPULAR
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <CardHeader className="relative text-center">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg" />
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/51837684d7181119a1a4f0a38f206f81.jpg-6NEVW2QN3734pl8qyTAqHgfASyDtTC.jpeg"
                        alt="Diamond"
                        className="relative w-16 h-16 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Gem className="w-5 h-5 text-primary" />
                    <CardTitle className="text-2xl">{pkg.diamonds}</CardTitle>
                  </div>

                  <Badge variant={pkg.popular ? "default" : "secondary"} className="mb-2">
                    {pkg.badge}
                  </Badge>

                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative text-center">
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-3xl font-bold text-primary">${pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">${pkg.originalPrice}</span>
                      )}
                    </div>
                    {pkg.savings && <div className="text-sm text-green-400 font-medium">{pkg.savings}</div>}
                  </div>

                  <AddToCartButton
                    item={{
                      id: pkg.id,
                      type: "diamond",
                      name: `${pkg.diamonds} Diamonds`,
                      price: pkg.price,
                      image:
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/51837684d7181119a1a4f0a38f206f81.jpg-6NEVW2QN3734pl8qyTAqHgfASyDtTC.jpeg",
                      description: pkg.description,
                      diamonds: pkg.diamonds,
                    }}
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
                  />

                  <div className="text-xs text-muted-foreground mt-3">
                    ${(pkg.price / pkg.diamonds).toFixed(4)} per diamond
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8">Why Choose BLACKGAMINGSHOP?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold">Secure Payments</h4>
                <p className="text-sm text-muted-foreground">
                  All transactions processed through PayPal for maximum security and buyer protection.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold">Instant Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Receive your diamonds immediately after payment confirmation. No waiting required.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold">Trusted Service</h4>
                <p className="text-sm text-muted-foreground">
                  Thousands of satisfied customers with 5-star ratings and 24/7 customer support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">BLACKGAMINGSHOP</h3>
            </div>
            <p className="text-muted-foreground mb-4">Your trusted Mobile Legends diamond provider</p>
            <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
              <span>Secure PayPal Payment</span>
              <span>•</span>
              <span>Instant Delivery</span>
              <span>•</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
