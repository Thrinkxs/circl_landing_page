import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/next"



const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Circl - Building connections that matter",
  description: "Transform chance encounters into lasting relationships with elegant QR exchanges and intelligent follow-ups that keep your network alive.",
  keywords: ["networking app", "Circl", "connections", "relationships"],
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
      <body className={`${hankenGrotesk.variable} antialiased font-sans`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
