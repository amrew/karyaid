import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { Header } from "@/components/header";
import { Rocket, Zap } from "lucide-react";
import { dbServer } from "@/lib/db-server";

export default async function Home() {
  const result = await dbServer.query({
    products: {
      $files: {},
      categories: {},
      creators: {
        $files: {},
      },
      $: {
        where: {
          featured: true,
        },
      },
    },
  });
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
              {/* <Link href="/products">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange hover:bg-orange-light/20 hover:text-orange-dark gap-2"
                >
                  <TrendingUp className="h-4 w-4" />
                  View all products
                </Button>
              </Link> */}
            </div>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                Today&apos;s Featured Products
              </h2>
            </div>
            {result.products.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  id: product.id,
                  name: product.title,
                  slug: product.slug,
                  description: product.description,
                  tagline: product.tagline,
                  upvotes: 0,
                  maker: {
                    name: product.creators?.name || product.title,
                    avatar:
                      product.creators?.$files?.url || product.$files?.url,
                  },
                  thumbnail: product.$files?.url,
                  url: product.productURL,
                }}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
