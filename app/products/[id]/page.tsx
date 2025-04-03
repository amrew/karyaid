import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronUp,
  Rocket,
  Calendar,
  Tag,
  Bookmark,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";

// This would come from a database in a real app
const getProductById = (id: string) => {
  const products = {
    "1": {
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
      longDescription:
        "Nusantara AI is an AI assistant specifically designed for Indonesian businesses and users. It understands Bahasa Indonesia nuances, local slang, and cultural context. The assistant can help with customer service, content creation, and business operations - all optimized for the Indonesian market.",
      launchDate: "February 22, 2023",
      pricingType: "Freemium",
      category: "AI",
    },
    "2": {
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
      longDescription:
        "Batik Patterns uses AI to generate beautiful, unique batik designs inspired by traditional Indonesian patterns. Designers can customize colors, complexity, and regional styles (Javanese, Balinese, etc.) to create modern batik patterns for fashion, interior design, or digital art projects.",
      launchDate: "July 12, 2022",
      pricingType: "Subscription",
      category: "Design",
    },
    "3": {
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
      longDescription:
        "LocalEats connects customers with small, local food vendors and warungs that typically don't have access to major food delivery platforms. The app focuses on authentic Indonesian cuisine from family-owned businesses, helping preserve culinary traditions while providing convenient delivery options for customers.",
      launchDate: "November 14, 2022",
      pricingType: "Free (commission-based)",
      category: "Food",
    },
  };

  return products[id as keyof typeof products];
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const product = getProductById((await params).id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 confetti-bg"></div>
        <main className="container mx-auto px-4 py-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8 bg-white p-6 rounded-xl border border-orange-light/30 shadow-md">
              <div className="flex-shrink-0">
                <Image
                  src={product.thumbnail || "/placeholder.svg"}
                  alt={product.name}
                  width={120}
                  height={120}
                  className="rounded-xl border border-orange-light/30"
                />
              </div>

              <div className="flex-grow">
                <h1 className="text-3xl font-bold mb-2 gradient-text">
                  {product.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  {product.tagline}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Button
                    asChild
                    variant="outline"
                    className="gap-2 border-orange hover:bg-orange-light/20 hover:text-orange-dark"
                  >
                    <Link
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button className="flex items-center gap-2 bg-orange-dark hover:bg-orange-dark/90">
                    <ChevronUp className="h-4 w-4" />
                    <span>Upvote ({product.upvotes})</span>
                  </Button>
                </div>

                <div className="flex items-center">
                  <Image
                    src={product.maker.avatar || "/placeholder.svg"}
                    alt={product.maker.name}
                    width={32}
                    height={32}
                    className="rounded-full mr-2 border border-orange-light/30"
                  />
                  <span className="text-sm">
                    Made by{" "}
                    <span className="font-medium text-orange-dark">
                      {product.maker.name}
                    </span>
                  </span>
                  {product.maker.location && (
                    <span className="flex items-center text-xs text-orange-dark ml-2">
                      <MapPin className="h-3 w-3 mr-0.5" />
                      {product.maker.location}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-xl border border-orange-light/30 shadow-md">
                  <h2 className="text-xl font-semibold mb-3 text-orange-dark">
                    About {product.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {product.longDescription}
                  </p>
                </div>

                <div className="pt-4">
                  <h2 className="text-xl font-semibold mb-3 text-orange-dark">
                    Discussion
                  </h2>
                  <div className="bg-white rounded-xl p-6 text-center border border-orange-light/30 shadow-md">
                    <Rocket className="h-8 w-8 mx-auto mb-2 text-orange" />
                    <p className="text-muted-foreground">
                      Login to join the discussion about this product
                    </p>
                    <Button className="mt-4 bg-orange hover:bg-orange-dark">
                      Bergabung dalam diskusi
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl p-6 space-y-4 border border-orange-light/30 shadow-md">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-orange mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        LAUNCHED
                      </h3>
                      <p className="font-medium">{product.launchDate}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Tag className="h-5 w-5 text-orange mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        PRICING
                      </h3>
                      <p className="font-medium">{product.pricingType}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Bookmark className="h-5 w-5 text-orange mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        CATEGORY
                      </h3>
                      <p className="font-medium">{product.category}</p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-2 border-orange hover:bg-orange-light/20 hover:text-orange-dark"
                  >
                    Simpan ke koleksi
                  </Button>
                </div>

                <div className="bg-white rounded-xl p-6 mt-6 border border-orange-light/30 shadow-md">
                  <h3 className="font-medium mb-3">
                    More from {product.maker.location}
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="#"
                      className="block p-3 rounded-lg border border-orange-light/30 hover:bg-orange-50 transition-colors"
                    >
                      <div className="font-medium">Wayang Chat</div>
                      <div className="text-sm text-muted-foreground">
                        Express yourself, Indonesian style
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="block p-3 rounded-lg border border-orange-light/30 hover:bg-orange-50 transition-colors"
                    >
                      <div className="font-medium">Tokopintar</div>
                      <div className="text-sm text-muted-foreground">
                        Manage your toko with ease
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
