"use client";

import { Users, Target, Heart, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Users,
      title: "Client-First Approach",
      description:
        "We put your needs at the center of everything we do, providing personalized guidance throughout your mortgage journey.",
    },
    {
      icon: Target,
      title: "Precision & Accuracy",
      description:
        "Our AI-powered tools ensure you receive accurate quotes and pre-qualifications with speed and reliability.",
    },
    {
      icon: Heart,
      title: "Trusted Partnership",
      description:
        "Building lasting relationships with our clients through transparency, honesty, and exceptional service.",
    },
    {
      icon: TrendingUp,
      title: "Industry Expertise",
      description:
        "Decades of combined experience navigating the mortgage industry to find the best solutions for you.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="about-heading"
            className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-balance"
          >
            Why Choose Premier Mortgage
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We combine cutting-edge technology with personalized service to make
            your home financing experience seamless and stress-free.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-8 rounded-2xl bg-card border border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon
                  className="w-7 h-7 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">
              20+
            </div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">
              5K+
            </div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">
              $2B+
            </div>
            <div className="text-muted-foreground">Loans Funded</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">
              4.9
            </div>
            <div className="text-muted-foreground">Client Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
