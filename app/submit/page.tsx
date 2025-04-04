"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Rocket,
  Upload,
  LinkIcon,
  MessageSquare,
  ImageIcon,
  MapPin,
} from "lucide-react";
import MultipleSelector, { Option } from "@/components/ui/multiselect";

export default function SubmitProduct() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState<Option[]>([]);

  const categoryOptions = [
    { value: "ai", label: "AI & Machine Learning" },
    { value: "dev-tools", label: "Developer Tools" },
    { value: "productivity", label: "Productivity" },
    { value: "education", label: "Education" },
    { value: "social", label: "Social" },
    { value: "entertainment", label: "Entertainment" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect to home page after submission
      router.push("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 confetti-bg"></div>
        <main className="container mx-auto px-4 py-8 relative">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-2 bg-orange-light/30 rounded-full mb-4">
                <Rocket className="h-6 w-6 text-orange-dark" />
              </div>
              <h1 className="text-3xl font-bold mb-2 gradient-text">
                Luncurkan Produk Anda
              </h1>
              <p className="text-muted-foreground">
                Share your creation with the Indonesian developer community and
                get valuable feedback or you can share someone else&apos;s
                creation
              </p>
            </div>

            <Card className="border-orange-light/30 shadow-md">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 border-b border-orange-light/20">
                <CardTitle>Product Details</CardTitle>
                <CardDescription>
                  Great products get upvoted and featured on the homepage!
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-orange-dark font-medium"
                    >
                      Product Name
                    </Label>
                    <div className="relative">
                      <Rocket className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="e.g., Nusantara AI"
                        className="pl-10 border-orange-light/50 focus-visible:ring-orange-light"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="url"
                      className="text-orange-dark font-medium"
                    >
                      Product URL
                    </Label>
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="url"
                        type="url"
                        placeholder="https://..."
                        className="pl-10 border-orange-light/50 focus-visible:ring-orange-light"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="tagline"
                      className="text-orange-dark font-medium"
                    >
                      Tagline
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="tagline"
                        placeholder="A short, catchy description of your product"
                        maxLength={60}
                        className="pl-10 border-orange-light/50 focus-visible:ring-orange-light"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="description"
                      className="text-orange-dark font-medium"
                    >
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="What does your product do? Who is it for?"
                      rows={4}
                      className="border-orange-light/50 focus-visible:ring-orange-light"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="creatorName"
                      className="text-orange-dark font-medium"
                    >
                      Creator Name
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="creatorName"
                        placeholder="Name of the product creator"
                        className="pl-10 border-orange-light/50 focus-visible:ring-orange-light"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="creatorUrl"
                      className="text-orange-dark font-medium"
                    >
                      Creator Profile URL
                    </Label>
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="creatorUrl"
                        type="url"
                        placeholder="https://twitter.com/creator or other social media"
                        className="pl-10 border-orange-light/50 focus-visible:ring-orange-light"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="category"
                        className="text-orange-dark font-medium"
                      >
                        Categories
                      </Label>
                      <MultipleSelector
                        commandProps={{
                          label: "Select frameworks",
                        }}
                        value={categories}
                        defaultOptions={categoryOptions}
                        placeholder="Select frameworks"
                        onChange={setCategories}
                        hideClearAllButton
                        hidePlaceholderWhenSelected
                        emptyIndicator={
                          <p className="text-center text-sm">
                            No results found
                          </p>
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="location"
                        className="text-orange-dark font-medium"
                      >
                        Your Location
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="location"
                          placeholder="e.g., Jakarta, Bandung, Surabaya"
                          className="pl-10 border-orange-light/50 focus-visible:ring-orange-light"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="thumbnail"
                      className="text-orange-dark font-medium"
                    >
                      Thumbnail
                    </Label>
                    <div className="border-2 border-dashed border-orange-light/50 rounded-lg p-6 text-center hover:bg-orange-50 transition-colors cursor-pointer">
                      <ImageIcon className="h-8 w-8 mx-auto mb-2 text-orange" />
                      <p className="text-sm text-muted-foreground mb-1">
                        Drag and drop your image here, or click to browse
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Recommended: 240x240px square image
                      </p>
                      <Input
                        id="thumbnail"
                        type="file"
                        accept="image/*"
                        className="hidden"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-dark hover:bg-orange-dark/90 gap-2 py-6"
                    disabled={isSubmitting}
                  >
                    <Upload className="h-4 w-4" />
                    {isSubmitting
                      ? "Meluncurkan produk Anda..."
                      : "Luncurkan Produk"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
