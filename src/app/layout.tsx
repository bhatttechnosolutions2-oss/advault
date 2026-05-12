import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdVault — Reliable Advertising Infrastructure & Growth Solutions",
  description: "Premium advertising infrastructure, Google Agency accounts, Meta Business Managers, and full-service digital marketing agency. Scale your campaigns with AdVault.",
  keywords: "ad accounts, google agency, meta business manager, digital marketing agency, performance marketing, ad infrastructure",
  openGraph: {
    title: "AdVault — Reliable Advertising Infrastructure & Growth Solutions",
    description: "Premium advertising infrastructure and full-service digital marketing. Scale your campaigns with enterprise-grade ad accounts and expert growth strategies.",
    type: "website",
    locale: "en_US",
    siteName: "AdVault",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdVault — Reliable Advertising Infrastructure & Growth Solutions",
    description: "Premium advertising infrastructure and full-service digital marketing agency.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
