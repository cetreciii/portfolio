import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Igor Tarantino - iOS and visionOS indie developer",
  description: "Learn. Improve. Empower.",
  openGraph: {
    type: "website",
    url: "https://cetreciii.github.io/portfolio",
    title: "Igor Tarantino - iOS and visionOS indie developer",
    description: "Learn. Improve. Empower.",
    images: [
      {
        url: "https://cetreciii.github.io/portfolio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Igor Tarantino - iOS and visionOS indie developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Igor Tarantino - iOS and visionOS indie developer",
    description: "Learn. Improve. Empower.",
    images: ["https://cetreciii.github.io/portfolio/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-canvas">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
