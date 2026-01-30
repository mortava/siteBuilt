"use client";

import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <Shield className="w-4 h-4" aria-hidden="true" />
            <span>Trusted by thousands of homeowners</span>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in text-balance"
            style={{ animationDelay: "0.2s" }}
          >
            Your Dream Home{" "}
            <span className="text-primary">Starts Here</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in text-pretty"
            style={{ animationDelay: "0.3s" }}
          >
            Get pre-qualified in minutes with our AI-powered assistant.
            Experience the fastest, most seamless mortgage process in the industry.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("prequal")}
              className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
            >
              Get Pre-Qualified
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("rates")}
              className="text-base px-8 py-6 w-full sm:w-auto"
            >
              Check My Rate
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">
                5-Minute Pre-Qual
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                AI-powered instant decisions
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">
                Bank-Level Security
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your data is always protected
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">
                Expert Guidance
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Personal support every step
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
