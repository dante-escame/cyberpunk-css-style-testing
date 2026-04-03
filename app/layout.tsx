import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSS Style Test",
  description: "Cyberpunk style sandbox for a Next.js portfolio build."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
