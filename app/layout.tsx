import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const viewport: Viewport = {
  themeColor: "#1A1714",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "KiGlads Bookstore — Premium Book Curation",
    template: "%s | KiGlads Bookstore",
  },
  description:
    "Curating the world's most impactful literature. Browse KiGlads Bookstore's premium selection of curated books and buy directly on Sellar.",
  keywords: [
    "KiGlads",
    "KiGladsBooks",
    "Bookstore",
    "Buy Books Online",
    "Sellar Books",
    "Curated Literature",
    "Academic Books",
    "Premium Bookstore",
  ],
  authors: [{ name: "KiGlads" }],
  creator: "KiGlads",
  publisher: "KiGlads",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  metadataBase: new URL("https://kigladsbooks.com"),
  openGraph: {
    title: "KiGlads Bookstore — Premium Book Curation",
    description: "Discover your next masterpiece. Curated literature, academic excellence.",
    url: "https://kigladsbooks.com",
    siteName: "KiGladsBooks",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "KiGlads Bookstore Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KiGlads Bookstore",
    description: "Curating the world's most impactful literature.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-dm-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
