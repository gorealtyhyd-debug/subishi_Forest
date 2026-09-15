import "./globals.css";
import { Playfair_Display, Jost } from "next/font/google";
import { EnquiryProvider } from "@/components/EnquiryProvider";
import { jsonLd, siteUrl } from "@/lib/seo";
import { project } from "@/lib/content";

const display = Playfair_Display({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-display", display: "swap" });
const sans = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans", display: "swap" });

const title = "Forest Edge \u2014 Luxury Villas in Kompally, Hyderabad | Subishi";
const description =
  "Subishi Forest Edge: 215 independent 4 BHK luxury villas across 43 acres at Pudur, Kompally, Hyderabad. 580 Sq. Yds plots, 3,425\u20134,620 SFT, HMDA approved, RERA P02200003514.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Subishi Forest Edge" },
  description: description,
  applicationName: "Subishi Forest Edge",
  keywords: [
    "luxury villas in Kompally",
    "villas for sale Hyderabad",
    "Forest Edge Subishi",
    "4 BHK villas Pudur",
    "gated villa community Hyderabad",
    "HMDA approved villas ORR Exit 6"
  ],
  authors: [{ name: "Subishi Engineers" }],
  creator: "Subishi Engineers",
  publisher: "Subishi Engineers",
  alternates: { canonical: "/", languages: { "en-IN": "/", "x-default": "/" } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Subishi Forest Edge",
    title: title,
    description: description,
    images: [{ url: project.hero, width: 1200, height: 630, alt: "Forest Edge luxury villa, day view" }]
  },
  twitter: { card: "summary_large_image", title: title, description: description, images: [project.hero] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
  },
  category: "real estate",
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Kompally, Hyderabad",
    "geo.position": project.geo.lat + ";" + project.geo.lng,
    ICBM: project.geo.lat + ", " + project.geo.lng
  }
};

export const viewport = { themeColor: "#0E2E22", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={display.variable + " " + sans.variable}>
      <head>
        <link rel="preconnect" href="https://subishi.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
      </head>
      <body className="overflow-x-hidden">
        <EnquiryProvider>{children}</EnquiryProvider>
      </body>
    </html>
  );
}
