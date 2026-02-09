import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description:
    "Portfolio of Stephaan Dahdal — Computer Science student at Arizona State University, Full-Stack Developer, and Software Engineer.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_NAME,
    description:
      "Portfolio of Stephaan Dahdal — Computer Science student at Arizona State University, Full-Stack Developer, and Software Engineer.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Stephaan Dahdal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Portfolio of Stephaan Dahdal — Computer Science student at Arizona State University, Full-Stack Developer, and Software Engineer.",
    images: ["/opengraph-image"],
  },
  verification: {
    google: "zosyrvAsr37Ar15AYwDCNnoC2rHFf2-CKQI6QxEsd9A",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  keywords: [
    "Stephaan Dahdal",
    "Software Engineer",
    "Full-Stack Developer",
    "Arizona State University",
    "Portfolio",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
