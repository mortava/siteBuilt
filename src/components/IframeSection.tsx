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
      className={`py-20 md:py-32 ${reversed ? "bg-muted/30" : "bg-background"}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content Side */}
          <div className={`${reversed ? "lg:order-2" : ""}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <IconComponent className="w-4 h-4" aria-hidden="true" />
              <span>{icon === "bot" ? "AI-Powered" : "Instant Quote"}</span>
            </div>

            <h2
              id={`${id}-heading`}
              className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-balance"
            >
              {title}
            </h2>

            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              {subtitle}
            </p>

            <ul className="space-y-4" role="list">
              {icon === "bot" ? (
                <>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground">
                      Answer simple questions about your finances
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground">
                      Get instant pre-qualification decision
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground">
                      No impact on your credit score
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground">
                      See today&apos;s competitive rates
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground">
                      Compare multiple loan options
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground">
                      Calculate your monthly payment
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Iframe Side */}
          <div className={`${reversed ? "lg:order-1" : ""}`}>
            <div className="card-shadow rounded-2xl overflow-hidden bg-white">
              {iframeSrc ? (
                <iframe
                  src={iframeSrc}
                  title={title}
                  className="w-full h-[600px] md:h-[900px] border-0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : (
                <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <IconComponent
                        className="w-10 h-10 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                      {icon === "bot"
                        ? "AI Pre-Qual Assistant"
                        : "Rate Quote Calculator"}
                    </h3>
                    <p className="text-muted-foreground">
                      Embed URL will be configured here
                    </p>
                    <p className="text-sm text-muted-foreground mt-4 max-w-sm mx-auto">
                      Replace the placeholder with your iframe embed URL to activate this feature.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
