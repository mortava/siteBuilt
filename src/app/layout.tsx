import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premier Mortgage Financial",
  description: "Your trusted mortgage partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
