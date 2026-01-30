"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import ContactModal from "@/components/modals/ContactModal";
import TermsModal from "@/components/modals/TermsModal";
import PrivacyModal from "@/components/modals/PrivacyModal";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer
        className="bg-foreground text-background"
        role="contentinfo"
        aria-label="Site footer"
      >
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Footer Links */}
          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8"
            aria-label="Footer navigation"
          >
            <button
              onClick={() => setContactOpen(true)}
              className="text-background/80 hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 rounded px-2 py-1"
            >
              Contact Us
            </button>
            <span className="text-background/40 hidden sm:inline">|</span>
            <button
              onClick={() => setTermsOpen(true)}
              className="text-background/80 hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 rounded px-2 py-1"
            >
              Terms of Use
            </button>
            <span className="text-background/40 hidden sm:inline">|</span>
            <button
              onClick={() => setPrivacyOpen(true)}
              className="text-background/80 hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 rounded px-2 py-1"
            >
              Privacy & Security
            </button>
            <span className="text-background/40 hidden sm:inline">|</span>
            <a
              href="https://nmlsconsumeraccess.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-background/80 hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 rounded px-2 py-1"
            >
              NMLS Consumer Access
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </nav>

          {/* Company Info */}
          <div className="text-center space-y-4">
            <p className="text-background/90 text-sm">
              &copy;2026 TraceAOS the Leader in AI full stack solutions for the
              lending industry. All rights reserved.
            </p>

            <div className="text-background/80 text-sm leading-relaxed">
              <p className="mb-2">
                This site was built for:{" "}
                <strong className="text-background">
                  Premier Mortgage Financial, LLC
                </strong>{" "}
                NMLS#64073
              </p>
              <p>
                2645 Appling STE 241 Memphis, TN 38133 | Need Help? Contact:{" "}
                <strong className="text-background">Vivian Marlar</strong> |
                NMLS#97598 |{" "}
                <a
                  href="tel:901-606-3832"
                  className="hover:text-background underline underline-offset-2"
                >
                  901-606-3832
                </a>{" "}
                |{" "}
                <a
                  href="mailto:processor@pmfmemphis.com"
                  className="hover:text-background underline underline-offset-2"
                >
                  processor@pmfmemphis.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-background/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-background/60 text-xs text-center leading-relaxed">
              By using this site, you authorize us to contact you by phone,
              email, or text (message/data rates may apply), including
              AI-assisted communications, even if you are on a Do Not Call list.
              You may opt out anytime via the Contact Us form. Rates and
              programs may change without notice. Nothing on this site is an
              offer, approval, or commitment to lend or sell any financial
              instrument. This site is for informational purposes only.
            </p>
          </div>
        </div>

        {/* Equal Housing Logo */}
        <div className="border-t border-background/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center gap-4">
            <div
              className="flex items-center gap-2 text-background/60 text-xs"
              aria-label="Equal Housing Lender"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 3L2 9v12h20V9L12 3zm0 2.3l7 4.2v9.5H5V9.5l7-4.2zM11 13h2v4h-2v-4zm0-4h2v2h-2V9z" />
              </svg>
              <span>Equal Housing Lender</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
      <TermsModal open={termsOpen} onOpenChange={setTermsOpen} />
      <PrivacyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </>
  );
}
