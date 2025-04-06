"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Grid2X2,
  List,
  Search,
  Filter,
  Sparkles,
  Zap,
  Clock,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

// In a real app, this would come from a database
const allProducts = [
  {
    id: "1",
    name: "Nusantara AI",
    slug: "nusantara-ai",
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
    category: "AI",
    date: "2023-02-22",
  },
  {
    id: "2",
    name: "Batik Patterns",
    slug: "batik-patterns",
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
    category: "Design",
    date: "2022-07-12",
  },
  {
    id: "3",
    name: "LocalEats",
    slug: "localeats",
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
    category: "Food",
    date: "2022-11-14",
  },
  {
    id: "4",
    name: "Jelajah",
    slug: "jelajah",
    description:
      "Discover hidden travel gems across Indonesia's 17,000 islands",
    tagline: "Explore Indonesia like a local",
    upvotes: 298,
    thumbnail: "/placeholder.svg?height=80&width=80",
    url: "https://jelajah.id",
    maker: {
      name: "Rini Sulistiani",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Bali",
    },
    category: "Travel",
    date: "2021-05-18",
  },
  {
    id: "5",
    name: "KodeKita",
    slug: "kodekita",
    description: "Programming tutorials and courses in Bahasa Indonesia",
    tagline: "Learn to code in your language",
    upvotes: 412,
    thumbnail: "/placeholder.svg?height=80&width=80",
    url: "https://kodekita.com",
    maker: {
      name: "Agus Purnomo",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Surabaya",
    },
    category: "Education",
    date: "2020-08-25",
  },
  {
    id: "6",
    name: "Wayang Chat",
    slug: "wayang-chat",
    description: "Chat app with Indonesian cultural themes and stickers",
    tagline: "Express yourself, Indonesian style",
    upvotes: 521,
    thumbnail: "/placeholder.svg?height=80&width=80",
    url: "https://wayangchat.id",
    maker: {
      name: "Dian Sastro",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Solo",
    },
    category: "Social",
    date: "2022-11-30",
  },
  {
    id: "7",
    name: "Tokopintar",
    slug: "tokopintar",
    description: "Smart inventory management for small Indonesian businesses",
    tagline: "Manage your toko with ease",
    upvotes: 345,
    thumbnail: "/placeholder.svg?height=80&width=80",
    url: "https://tokopintar.id",
    maker: {
      name: "Hendra Wijaya",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Jakarta",
    },
    category: "Business",
    date: "2021-03-10",
  },
  {
    id: "8",
    name: "Cakrawala",
    slug: "cakrawala",
    description: "Indonesian news aggregator with fact-checking features",
    tagline: "Stay informed, avoid hoaxes",
    upvotes: 378,
    thumbnail: "/placeholder.svg?height=80&width=80",
    url: "https://cakrawala.news",
    maker: {
      name: "Putri Maharani",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Medan",
    },
    category: "News",
    date: "2021-01-15",
  },
];

export default function AllProducts() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [sortBy, setSortBy] = useState("popular");
  const [filterCategory, setFilterCategory] = useState("all");
  const [products, setProducts] = useState(allProducts);

  const handleSort = (value: string) => {
    setSortBy(value);
    let sortedProducts = [...allProducts];

    if (value === "popular") {
      sortedProducts.sort((a, b) => b.upvotes - a.upvotes);
    } else if (value === "newest") {
      sortedProducts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (value === "oldest") {
      sortedProducts.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }

    if (filterCategory !== "all") {
      sortedProducts = sortedProducts.filter(
        (product) =>
          product.category.toLowerCase() === filterCategory.toLowerCase()
      );
    }

    setProducts(sortedProducts);
  };

  const handleFilter = (value: string) => {
    setFilterCategory(value);

    if (value === "all") {
      handleSort(sortBy); // Re-sort all products
    } else {
      const filteredProducts = allProducts.filter(
        (product) => product.category.toLowerCase() === value.toLowerCase()
      );

      // Apply current sort to filtered products
      if (sortBy === "popular") {
        filteredProducts.sort((a, b) => b.upvotes - a.upvotes);
      } else if (sortBy === "newest") {
        filteredProducts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      } else if (sortBy === "oldest") {
        filteredProducts.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      }

      setProducts(filteredProducts);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 confetti-bg"></div>
        <main className="container mx-auto px-4 py-8 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-2 bg-orange-light/30 rounded-full mb-4">
                <Sparkles className="h-6 w-6 text-orange-dark" />
              </div>
              <h1 className="text-3xl font-bold mb-2 gradient-text">
                Produk Karya Anak Bangsa
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover amazing products created by talented indie developers
                from across Indonesia
              </p>
            </div>

            <div className="bg-white rounded-xl border border-orange-light/30 shadow-md mb-8">
              <div className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
                  <Tabs defaultValue="all" className="w-full md:w-auto">
                    <TabsList className="bg-orange-light/20">
                      <TabsTrigger
                        value="all"
                        onClick={() => handleFilter("all")}
                        className="data-[state=active]:bg-orange data-[state=active]:text-white"
                      >
                        All
                      </TabsTrigger>
                      <TabsTrigger
                        value="ai"
                        onClick={() => handleFilter("ai")}
                        className="data-[state=active]:bg-orange data-[state=active]:text-white"
                      >
                        AI
                      </TabsTrigger>
                      <TabsTrigger
                        value="business"
                        onClick={() => handleFilter("business")}
                        className="data-[state=active]:bg-orange data-[state=active]:text-white"
                      >
                        Business
                      </TabsTrigger>
                      <TabsTrigger
                        value="education"
                        onClick={() => handleFilter("education")}
                        className="data-[state=active]:bg-orange data-[state=active]:text-white"
                      >
                        Education
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="flex items-center border rounded-md overflow-hidden border-orange-light/50">
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`rounded-none h-9 w-9 ${
                          viewMode === "grid" ? "bg-orange-light/20" : ""
                        }`}
                        onClick={() => setViewMode("grid")}
                      >
                        <Grid2X2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`rounded-none h-9 w-9 ${
                          viewMode === "list" ? "bg-orange-light/20" : ""
                        }`}
                        onClick={() => setViewMode("list")}
                      >
                        <List className="h-4 w-4" />
                      </Button>
                    </div>

                    <Select defaultValue="popular" onValueChange={handleSort}>
                      <SelectTrigger className="w-[180px] border-orange-light/50">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="popular">
                          <div className="flex items-center">
                            <TrendingUp className="mr-2 h-4 w-4" />
                            <span>Most Popular</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="newest">
                          <div className="flex items-center">
                            <Zap className="mr-2 h-4 w-4" />
                            <span>Newest First</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="oldest">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4" />
                            <span>Oldest First</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Cari produk..."
                    className="pl-10 border-orange-light/50 focus-visible:ring-orange-light"
                  />
                </div>
              </div>

              <div className="border-t border-orange-light/30 p-4 flex items-center justify-between bg-orange-50/50">
                <div className="flex items-center">
                  <Filter className="h-4 w-4 mr-2 text-orange-dark" />
                  <span className="text-sm font-medium">Filters Applied:</span>
                  <span className="ml-2 text-sm text-muted-foreground capitalize">
                    {filterCategory === "all"
                      ? "All Categories"
                      : filterCategory}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-orange-dark hover:text-orange-dark/80 hover:bg-orange-light/20"
                >
                  Clear Filters
                </Button>
              </div>
            </div>

            <div
              className={cn("space-y-4", {
                "grid grid-cols-2 gap-4": viewMode === "list",
                "grid grid-cols-1 gap-4": viewMode === "grid",
              })}
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}

              {products.length === 0 && (
                <div className="text-center py-12 bg-white rounded-xl border border-orange-light/30">
                  <div className="inline-flex items-center justify-center p-3 bg-orange-light/30 rounded-full mb-4">
                    <Search className="h-6 w-6 text-orange-dark" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search terms
                  </p>
                  <Button
                    onClick={() => {
                      setFilterCategory("all");
                      handleSort("popular");
                    }}
                    className="bg-orange-dark hover:bg-orange-dark/90"
                  >
                    View All Products
                  </Button>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-center">
              <Button className="bg-orange hover:bg-orange-dark">
                Load More Products
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
