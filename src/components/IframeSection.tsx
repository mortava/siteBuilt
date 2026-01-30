"use client";

import { Bot, Calculator } from "lucide-react";

interface IframeSectionProps {
  id: string;
  title: string;
  subtitle: string;
  iframeSrc?: string;
  icon: "bot" | "calculator";
  reversed?: boolean;
}

export default function IframeSection({
  id,
  title,
  subtitle,
  iframeSrc,
  icon,
  reversed = false,
}: IframeSectionProps) {
  const IconComponent = icon === "bot" ? Bot : Calculator;

  return (
    <section
      id={id}
      className={`py-12 sm:py-16 md:py-20 ${reversed ? "bg-muted/30" : "bg-background"}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <IconComponent className="w-4 h-4" aria-hidden="true" />
            <span>{icon === "bot" ? "AI-Powered" : "Instant Quote"}</span>
          </div>

          <h2
            id={`${id}-heading`}
            className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4"
          >
            {title}
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Iframe - Full Width */}
        <div className="card-shadow rounded-xl sm:rounded-2xl overflow-hidden bg-white">
          {iframeSrc ? (
            <iframe
              src={iframeSrc}
              title={title}
              className="w-full h-[500px] sm:h-[650px] md:h-[750px] lg:h-[850px] border-0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <div className="w-full h-[400px] sm:h-[500px] flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted">
              <div className="text-center p-6 sm:p-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <IconComponent
                    className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-foreground mb-2">
                  {icon === "bot"
                    ? "AI Pre-Qual Assistant"
                    : "Rate Quote Calculator"}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Embed URL will be configured here
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
