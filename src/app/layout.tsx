import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "./globals.css";

// Components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Infused | Premium Canna Drops",
  description: "Fast-absorbing, high-potency nano cannabinoid infusers for your favorite drinks and foods",
  keywords: ["cannabinoids", "cbd", "thc", "cannabis infuser", "canna drops", "nano technology"],
  metadataBase: new URL('https://infused-site.vercel.app'),
  openGraph: {
    title: "Infused | Premium Canna Drops",
    description: "Fast-absorbing, high-potency nano cannabinoid infusers for your favorite drinks and foods",
    url: "https://infused.co",
    siteName: "Infused",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Infused Canna Drops",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col bg-neutral-50 text-neutral-800">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
