import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { Header } from "@/components/header";
import { Rocket, Zap, TrendingUp } from "lucide-react";

export default function Home() {
  // In a real app, this would come from a database
  const products = [
    {
      id: "1",
      name: "Nusantara AI",
      description: "Bahasa Indonesia focused AI assistant for local businesses",
      tagline: "AI assistant built for Indonesians",
      upvotes: 423,
      thumbnail: "/placeholder.svg?height=80&width=80",
      url: "https://nusantara.ai",
      maker: {
        name: "Budi Santoso",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "Jakarta",
      },
    },
    {
      id: "2",
      name: "Batik Patterns",
      description: "Generate unique batik patterns with AI for your designs",
      tagline: "Modern batik designs with a click",
      upvotes: 387,
      thumbnail: "/placeholder.svg?height=80&width=80",
      url: "https://batikpatterns.id",
      maker: {
        name: "Dewi Putri",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "Yogyakarta",
      },
    },
    {
      id: "3",
      name: "LocalEats",
      description: "Connect with local warung and food vendors for delivery",
      tagline: "Support local food businesses",
      upvotes: 352,
      thumbnail: "/placeholder.svg?height=80&width=80",
      url: "https://localeats.id",
      maker: {
        name: "Arief Wijaya",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "Bandung",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 confetti-bg"></div>
        <main className="container mx-auto px-4 py-6 relative">
          <div className="flex flex-col items-center text-center mb-12 pt-6">
            <div className="inline-flex items-center justify-center p-2 bg-orange-light/30 rounded-full mb-4">
              <Rocket className="h-6 w-6 text-orange-dark" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Karya Indonesia
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-6">
              Discover amazing products built by indie developers from
              Indonesia.
              <span className="block mt-2 text-lg">
                Temukan produk-produk keren buatan developer Indonesia!
              </span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/submit">
                <Button
                  size="lg"
                  className="bg-orange-dark hover:bg-orange-dark/90 gap-2"
                >
                  <Zap className="h-4 w-4" />
                  Submit your product
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange hover:bg-orange-light/20 hover:text-orange-dark gap-2"
                >
                  <TrendingUp className="h-4 w-4" />
                  View all products
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                Today&apos;s Featured Products
              </h2>
              <Link
                href="/products"
                className="text-sm font-medium text-orange-dark hover:underline"
              >
                View all →
              </Link>
            </div>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
