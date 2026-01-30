"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm py-3" : "bg-transparent py-5"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="Premier Mortgage Financial - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-sm">
              <span className="text-white font-heading font-bold text-xs">
                PMF
              </span>
            </div>
            <span className="font-heading font-semibold text-lg text-foreground">
              Premier Mortgage Financial
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("prequal")}
              className="text-foreground/80 hover:text-foreground"
            >
              Get Pre-Qualified
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("rates")}
              className="text-foreground/80 hover:text-foreground"
            >
              Rate Quote
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-foreground"
            >
              About
            </Button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              size="lg"
              onClick={() => scrollToSection("prequal")}
              className="shadow-md"
            >
              Start Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 glass border-t border-border/50 shadow-lg animate-fade-in"
          >
            <div className="px-4 py-4 space-y-2">
              <button
                onClick={() => scrollToSection("prequal")}
                className="block w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                Get Pre-Qualified
              </button>
              <button
                onClick={() => scrollToSection("rates")}
                className="block w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                Rate Quote
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                About
              </button>
              <Button
                className="w-full mt-4"
                size="lg"
                onClick={() => scrollToSection("prequal")}
              >
                Start Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
