import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Zap, ArrowLeft, Calendar, Gift, Crown, Gem } from "lucide-react"
import Link from "next/link"
import { CartButton } from "@/components/cart-button"
import { AddToCartButton } from "@/components/add-to-cart-button"

const weeklyPassBenefits = [
  {
    icon: Gem,
    title: "50+ Bonus Diamonds",
    description: "Get extra diamonds throughout the week",
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Access to special items and skins",
  },
  {
    icon: Crown,
    title: "VIP Status",
    description: "Premium player privileges",
  },
  {
    icon: Star,
    title: "Daily Bonuses",
    description: "Special rewards every day",
  },
]

const dailyRewards = [
  { day: 1, reward: "10 Diamonds", type: "diamonds" },
  { day: 2, reward: "Hero Fragment", type: "fragment" },
  { day: 3, reward: "15 Diamonds", type: "diamonds" },
  { day: 4, reward: "Skin Fragment", type: "skin" },
  { day: 5, reward: "20 Diamonds", type: "diamonds" },
  { day: 6, reward: "Battle Points", type: "bp" },
  { day: 7, reward: "Premium Chest", type: "chest" },
]

export default function WeeklyPassPage() {
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
              <Link href="/diamonds" className="text-muted-foreground hover:text-primary transition-colors">
                Diamonds
              </Link>
              <CartButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">Mobile Legends Bang Bang</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                  Weekly <span className="text-primary">Diamond</span> Pass
                </h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  Unlock exclusive rewards, bonus diamonds, and premium benefits for an entire week. The ultimate Mobile
                  Legends experience awaits.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>7 Days Active</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Gem className="w-4 h-4 text-primary" />
                  <span>50+ Bonus Diamonds</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Crown className="w-4 h-4 text-primary" />
                  <span>VIP Benefits</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-5xl font-bold text-primary">$1.45</div>
                <AddToCartButton
                  item={{
                    id: "weekly-pass",
                    type: "weekly-pass",
                    name: "Weekly Diamond Pass",
                    price: 1.45,
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9a398c14feafb948f5863934081ce727.jpg-Pq4fRq2NjU1tuYooIKmxLIBRQcadGN.jpeg",
                    description: "7 days of premium benefits and exclusive rewards",
                  }}
                  className="bg-primary hover:bg-primary/90"
                  variant="default"
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/20 to-card rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9a398c14feafb948f5863934081ce727.jpg-Pq4fRq2NjU1tuYooIKmxLIBRQcadGN.jpeg"
                  alt="Weekly Diamond Pass"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What You Get</h2>
            <p className="text-muted-foreground">Unlock premium benefits and exclusive rewards</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {weeklyPassBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Rewards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">7-Day Reward Calendar</h2>
            <p className="text-muted-foreground">Collect amazing rewards every single day</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {dailyRewards.map((reward) => (
              <Card
                key={reward.day}
                className="text-center border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/30 transition-colors">
                    <span className="text-primary font-bold">{reward.day}</span>
                  </div>
                  <CardTitle className="text-sm">Day {reward.day}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-xs text-muted-foreground">{reward.reward}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 to-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <CardContent className="relative p-12 text-center">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">Ready to Upgrade?</h3>
                    <p className="text-muted-foreground">
                      Join thousands of players enjoying premium Mobile Legends benefits
                    </p>
                  </div>

                  <div className="flex justify-center items-center space-x-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">$1.45</div>
                      <div className="text-sm text-muted-foreground">One-time payment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">7</div>
                      <div className="text-sm text-muted-foreground">Days of benefits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Bonus diamonds</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>Secure PayPal Payment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span>Instant Activation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span>24/7 Support</span>
                    </div>
                  </div>

                  <AddToCartButton
                    item={{
                      id: "weekly-pass-purchase",
                      type: "weekly-pass",
                      name: "Weekly Diamond Pass",
                      price: 1.45,
                      image:
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9a398c14feafb948f5863934081ce727.jpg-Pq4fRq2NjU1tuYooIKmxLIBRQcadGN.jpeg",
                      description: "7 days of premium benefits and exclusive rewards",
                    }}
                    className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
                    variant="default"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">How long does the Weekly Pass last?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The Weekly Pass is active for exactly 7 days (168 hours) from the moment of purchase and activation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">When do I receive my rewards?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Daily rewards are automatically added to your account every 24 hours. Bonus diamonds and exclusive
                    items are delivered instantly upon purchase.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Is payment secure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, all payments are processed securely through PayPal, ensuring your financial information is
                    protected with industry-standard encryption.
                  </p>
                </CardContent>
              </Card>
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
