import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";
import "./globals.css";
import "./polish.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.title,
    template: `%s | ${site.shortName}`,
  },

  description: site.description,

  applicationName: "Kemal Portfolio",

  authors: [
    {
      name: site.name,
      url: site.url,
    },
  ],

  creator: site.name,
  publisher: site.name,

  keywords: [
    "Muhammad Irsyad Kemal Pasha Ramadhan",
    "Kemal Portfolio",
    "Business Administration",
    "Business Strategy",
    "Partnership Development",
    "Project Leadership",
    "Entrepreneurship",
    "Telkom University",
    "Bandung",
    "Indonesia",
  ],

  manifest: "/manifest.webmanifest",

  icons: {
  icon: [
    {
      url: "/icon.png",
      type: "image/png",
    },
  ],
  shortcut: "/icon.png",
  apple: "/icon.png",
},

  openGraph: {
  title: site.title,
  description: site.description,
  siteName: "Kemal Portfolio",
  type: "website",
  locale: "en_US",

  images: [
    {
      url: "/icon.png",
      width: 1254,
      height: 1254,
      alt: `${site.name} professional profile`,
    },
  ],
  },

  twitter: {
  card: "summary",
  title: site.title,
  description: site.description,
  images: ["/icon.png"],
},

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
