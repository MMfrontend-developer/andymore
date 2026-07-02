import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  SITE_URL,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  PHONE_1,
  PHONE_2,
  LAT,
  LNG,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} | Building Materials & Kitchen Appliances in Lagos`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "Andymore Business Concept is Lagos's trusted supplier of premium building materials and kitchen appliances — tiles, sanitary ware, bathtubs, range hoods, gas hobs, and more. Visit our showroom at Ojodu Berger.",
  keywords: [
    "building materials Lagos",
    "kitchen appliances Lagos",
    "tiles Lagos",
    "sanitary ware Lagos",
    "range hoods Nigeria",
    "gas hobs Lagos",
    "bathtubs Lagos",
    "Ojodu Berger building materials",
    "Andymore Business Concept",
  ],
  authors: [{ name: BUSINESS_NAME }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | Building Materials & Kitchen Appliances`,
    description: BUSINESS_TAGLINE,
    images: [
      {
        url: "/images/products/andymore-storefront.jpg",
        width: 1200,
        height: 630,
        alt: "Andymore Business Concept showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} | Building Materials & Kitchen Appliances`,
    description: BUSINESS_TAGLINE,
    images: ["/images/products/andymore-storefront.jpg"],
  },
  icons: {
    icon: "/images/products/logo.png",
    apple: "/images/products/logo.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#c0392b",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  name: BUSINESS_NAME,
  description: BUSINESS_TAGLINE,
  url: SITE_URL,
  telephone: PHONE_1,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_LINE1,
    addressLocality: "Ojodu Berger",
    addressRegion: "Lagos State",
    addressCountry: "NG",
    postalCode: "100283",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: LAT,
    longitude: LNG,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-neutral-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
