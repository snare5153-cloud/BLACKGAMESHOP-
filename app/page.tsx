import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { CartButton } from "@/components/cart-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">BLACKGAMINGSHOP</h1>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/diamonds" className="text-muted-foreground hover:text-primary transition-colors">
                Diamonds
              </Link>
              <Link href="/weekly-pass" className="text-muted-foreground hover:text-primary transition-colors">
                Weekly Pass
              </Link>
              <CartButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">Mobile Legends Bang Bang</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                  Premium <span className="text-primary">Diamond</span> Shop
                </h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  Get your Mobile Legends diamonds instantly. Fast, secure, and trusted by thousands of players
                  worldwide.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Secure PayPal Payment</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>Instant Delivery</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Star className="w-4 h-4 text-primary" />
                  <span>5-Star Rated</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/diamonds">Shop Diamonds</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/weekly-pass">View Weekly Pass</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3cf0aae04c3914e9d409943efaed9534.jpg-hX8y1fO5oQH6y0aNSYNvJjk8UJVpke.jpeg"
                alt="Mobile Legends Characters"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="diamonds" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Diamond Packages</h2>
            <p className="text-muted-foreground">Choose your perfect diamond package</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Starter Package */}
            <Card className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/51837684d7181119a1a4f0a38f206f81.jpg-6NEVW2QN3734pl8qyTAqHgfASyDtTC.jpeg"
                    alt="Diamond"
                    className="w-12 h-12 rounded-lg"
                  />
                  <Badge variant="secondary">Popular</Badge>
                </div>
                <CardTitle>11 Diamonds</CardTitle>
                <CardDescription>Perfect for beginners</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="text-2xl font-bold text-primary mb-4">$0.22</div>
                <Button className="w-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>

            {/* More packages can be added here */}
            <Card className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/51837684d7181119a1a4f0a38f206f81.jpg-6NEVW2QN3734pl8qyTAqHgfASyDtTC.jpeg"
                    alt="Diamond"
                    className="w-12 h-12 rounded-lg"
                  />
                  <Badge variant="outline">Best Value</Badge>
                </div>
                <CardTitle>50 Diamonds</CardTitle>
                <CardDescription>Great for regular players</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="text-2xl font-bold text-primary mb-4">$1.00</div>
                <Button className="w-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/51837684d7181119a1a4f0a38f206f81.jpg-6NEVW2QN3734pl8qyTAqHgfASyDtTC.jpeg"
                    alt="Diamond"
                    className="w-12 h-12 rounded-lg"
                  />
                  <Badge variant="outline">Premium</Badge>
                </div>
                <CardTitle>100 Diamonds</CardTitle>
                <CardDescription>For serious gamers</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="text-2xl font-bold text-primary mb-4">$2.00</div>
                <Button className="w-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Weekly Pass Section */}
      <section id="weekly-pass" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 to-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <CardHeader className="relative text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9a398c14feafb948f5863934081ce727.jpg-Pq4fRq2NjU1tuYooIKmxLIBRQcadGN.jpeg"
                    alt="Weekly Pass"
                    className="w-24 h-24 rounded-xl"
                  />
                </div>
                <CardTitle className="text-3xl">Weekly Diamond Pass</CardTitle>
                <CardDescription className="text-lg">
                  Unlock exclusive rewards and bonus diamonds every week
                </CardDescription>
              </CardHeader>
              <CardContent className="relative text-center">
                <div className="text-4xl font-bold text-primary mb-6">$1.45</div>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">7</div>
                    <div className="text-sm text-muted-foreground">Days Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Bonus Diamonds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">∞</div>
                    <div className="text-sm text-muted-foreground">Exclusive Items</div>
                  </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/weekly-pass">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Get Weekly Pass
                  </Link>
                </Button>
              </CardContent>
            </Card>
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
