# Mortgage Broker Website Template

A modern, clean one-page website built for mortgage brokers. Features a Stripe/Apple-inspired design with Shadcn UI components.

## Features

- **AI Pre-Qualification Assistant** - Embed section for AI-powered pre-qual
- **Rate Quote Calculator** - Embed section for rate quotes
- **ADA Compliant** - Full accessibility support
- **Mobile Optimized** - Responsive design for all devices
- **Lightbox Modals** - Contact, Terms, Privacy popouts
- **Clean Typography** - Inter (body) + Montserrat (headings)

## Customization

### Embed URLs
Update the iframe sources in `src/app/page.tsx`:
```tsx
<IframeSection
  iframeSrc="https://your-prequal-embed-url.com"
  // ...
/>
```

### Branding
- Colors: Edit CSS variables in `src/app/globals.css`
- Logo: Update in `src/components/Header.tsx`
- Footer: Update company info in `src/components/Footer.tsx`

### Legal Pages
- Terms: `src/components/modals/TermsModal.tsx`
- Privacy: `src/components/modals/PrivacyModal.tsx`

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI
- Radix UI Primitives

## Getting Started

```bash
npm install
npm run dev
```

## Deployment

Deploy to Vercel with one click or run:
```bash
vercel
```

## License

Built by TraceAOS
