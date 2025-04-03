"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // This would be replaced with actual auth logic
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="border-b border-orange-light/30 bg-gradient-to-r from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
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
              <Link
                href="/products"
                className="text-sm font-medium hover:text-orange-dark transition-colors"
              >
                Products
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <Button
                onClick={toggleLogin}
                className="bg-orange-dark hover:bg-orange-dark/90"
              >
                Sign Out
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={toggleLogin}
                  className="hover:text-orange-dark hover:bg-orange-light/20"
                >
                  Masuk
                </Button>
                <Button
                  onClick={toggleLogin}
                  className="bg-orange-dark hover:bg-orange-dark/90"
                >
                  Daftar
                </Button>
              </>
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
                <Button
                  onClick={toggleLogin}
                  className="bg-orange-dark hover:bg-orange-dark/90"
                >
                  Sign Out
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={toggleLogin}
                    className="border-orange hover:bg-orange-light/20 hover:text-orange-dark"
                  >
                    Masuk
                  </Button>
                  <Button
                    onClick={toggleLogin}
                    className="bg-orange-dark hover:bg-orange-dark/90"
                  >
                    Daftar
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
