import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Circl - Building connections that matter",
  description: "Transform chance encounters into lasting relationships with elegant QR exchanges and intelligent follow-ups that keep your network alive.",
  keywords: ["networking", "QR code", "connections", "relationships", "contact sharing"],
  authors: [{ name: "Circl" }],
  openGraph: {
    title: "Circl - Building connections that matter",
    description: "Transform chance encounters into lasting relationships with elegant QR exchanges and intelligent follow-ups that keep your network alive.",
    url: "https://circl.app",
    siteName: "Circl",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Circl - Building connections that matter",
    description: "Transform chance encounters into lasting relationships with elegant QR exchanges and intelligent follow-ups that keep your network alive.",
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
