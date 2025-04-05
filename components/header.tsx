"use client";

import Link from "next/link";
import { useMemo, useState, useCallback } from "react";
import { Menu, X, Rocket, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dbClient } from "@/lib/db-client";
import { useRouter } from "next/navigation";
import { GoogleButton } from "./google-button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLoading, user } = dbClient.useAuth();
  const router = useRouter();

  const email = useMemo(() => user?.email?.split("@")[0] ?? "", [user]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const signOut = useCallback(async () => {
    await dbClient.auth.signOut();
    router.refresh();
  }, [router]);

  const signIn = useCallback(async () => {
    const url = dbClient.auth.createAuthorizationURL({
      clientName: "google",
      redirectURL: window.location.href,
    });
    router.push(url);
  }, [router]);

  const isLoggedIn = useMemo(() => !!user, [user]);

  return (
    <header className="border-b border-orange-light/30 bg-gradient-to-r from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between h-[40px]">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold mr-8 flex items-center"
            >
              <Rocket className="h-6 w-6 text-orange-dark mr-2 animate-bounce-slight" />
              <span className="gradient-text">KaryaID</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="text-sm font-medium hover:text-orange-dark transition-colors"
              >
                Home
              </Link>
              {/* <Link
                href="/products"
                className="text-sm font-medium hover:text-orange-dark transition-colors"
              >
                Products
              </Link> */}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <Loader2Icon className="h-4 w-4 animate-spin" />
              </div>
            ) : isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">{email}</span>
                <Button
                  onClick={signOut}
                  className="bg-orange-dark hover:bg-orange-dark/90"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <GoogleButton onClick={signIn} />
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-orange-light/20"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm font-medium py-2 hover:text-orange-dark transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium py-2 hover:text-orange-dark transition-colors"
              >
                Products
              </Link>
            </nav>
            <div className="pt-2 flex flex-col space-y-2">
              {isLoggedIn ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{email}</span>
                  <Button
                    onClick={signOut}
                    className="bg-orange-dark hover:bg-orange-dark/90"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <GoogleButton onClick={signIn} />
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
