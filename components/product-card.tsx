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
  slug: string;
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
        <div className="flex flex-col md:flex-row items-start p-4 md:p-6">
          <div className="flex gap-4 items-center md:flex-shrink-0 mr-4 mb-4 md:mb-0">
            <div className="relative">
              <Image
                src={product.thumbnail}
                alt={product.name}
                width={80}
                height={80}
                className="w-20 h-20 md:w-24 md:h-24 rounded-xl border object-contain border-orange-light/30"
              />
              {product.id === "1" && (
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-1.5 py-0.5 rounded-full flex items-center">
                  <Sparkles className="h-3 w-3 mr-0.5" />
                  HOT
                </div>
              )}
            </div>
            <div className="block md:hidden">
              <Link
                href={`/products/${product.slug}`}
                className="text-lg md:text-xl font-semibold hover:text-orange-dark transition-colors"
              >
                {product.name}
              </Link>
              <div>
                <span className="text-xs text-muted-foreground">
                  {product.tagline}
                </span>
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <div className="hidden md:flex flex-col md:flex-row items-start md:items-center mb-1">
              <Link
                href={`/products/${product.slug}`}
                className="text-lg md:text-xl font-semibold hover:text-orange-dark transition-colors"
              >
                {product.name}
              </Link>
              <span className="ml-0 md:ml-2 text-xs text-muted-foreground">
                - {product.tagline}
              </span>
            </div>
            <Link href={`/products/${product.slug}`}>
              <p className="text-sm md:text-base text-muted-foreground mb-2">
                {product.description}
              </p>
            </Link>
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
          <div className="flex-shrink-0 ml-0 md:ml-4 self-end md:self-center mt-4 md:mt-0">
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
