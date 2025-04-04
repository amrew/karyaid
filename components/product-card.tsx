"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  description: string;
  tagline: string;
  upvotes: number;
  thumbnail: string;
  url: string;
  maker: {
    name: string;
    avatar: string;
    location?: string;
  };
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-orange-light/30 shadow-sm">
      <CardContent className="p-0">
        <div className="flex items-start p-6">
          <div className="flex-shrink-0 mr-4">
            <div className="relative">
              <Image
                src={product.thumbnail || "/placeholder.svg"}
                alt={product.name}
                width={80}
                height={80}
                className="rounded-xl border object-contain border-orange-light/30"
              />
              {product.id === "1" && (
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-1.5 py-0.5 rounded-full flex items-center">
                  <Sparkles className="h-3 w-3 mr-0.5" />
                  HOT
                </div>
              )}
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center mb-1">
              <Link
                href={`/product/${product.id}`}
                className="text-xl font-semibold hover:text-orange-dark transition-colors"
              >
                {product.name}
              </Link>
              <span className="ml-2 text-sm text-muted-foreground">
                - {product.tagline}
              </span>
            </div>
            <p className="text-muted-foreground mb-2">{product.description}</p>
            <div className="flex items-center">
              <div className="relative mr-2">
                <div className="w-6 h-6 flex items-center justify-center bg-orange-light/30 rounded-full border border-orange-light/30 text-xs font-bold text-orange-dark">
                  {product.maker.name.charAt(0)}
                </div>
              </div>
              <span className="text-sm text-muted-foreground">
                by {product.maker.name}
              </span>
              {product.maker.location && (
                <span className="flex items-center text-xs text-orange-dark ml-2">
                  <MapPin className="h-3 w-3 mr-0.5" />
                  {product.maker.location}
                </span>
              )}
            </div>
          </div>
          <div className="flex-shrink-0 ml-4 self-center">
            <Link href={product.url} target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="border-orange-light hover:bg-orange-light/20 hover:text-orange-dark gap-2"
              >
                <ArrowRight className="h-4 w-4" />
                Kunjungi
              </Button>
            </Link>
            {/* <Button
              variant={hasUpvoted ? "default" : "outline"}
              size="sm"
              className={`flex flex-col items-center h-auto py-2 px-3 ${
                hasUpvoted
                  ? "bg-orange hover:bg-orange-dark"
                  : "border-orange-light hover:border-orange hover:bg-orange-light/20"
              }`}
              onClick={handleUpvote}
            >
              <ChevronUp className="h-4 w-4" />
              <span className="text-sm font-medium">{upvotes}</span>
            </Button> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
