import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajanta Ghosh – Senior Software Developer",
  description:
    "Portfolio of Ajanta Ghosh — 8.5+ years Full Stack Developer specializing in PHP, Laravel, React.js, Next.js, Node.js, Shopify, and Python/Django.",
  openGraph: {
    title: "Ajanta Ghosh – Senior Software Developer",
    description:
      "8.5+ years Full Stack Developer — Laravel, React, Next.js, Shopify & more. Immediate joiner.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
