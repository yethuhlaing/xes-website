import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import { AppProviders } from "@/components/app-providers";
import { CtaBand } from "@/components/footer";
import { Navbar } from "@/components/navbar/navbar";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xeshelsinki.com"),
  title: {
    default: "XES Helsinki | Haaga-Helia Entrepreneurship Society",
    template: "%s | XES Helsinki",
  },
  description:
    "XES Helsinki is Haaga-Helia's entrepreneurship society where students turn ideas into reality through startup events, founder-focused learning, and hands-on community building in Helsinki.",
  applicationName: "XES Helsinki",
  keywords: [
    "XES Helsinki",
    "Haaga-Helia",
    "entrepreneurship society",
    "student entrepreneurship",
    "startup community Helsinki",
    "founders",
    "co-founder network",
    "startup events Finland",
    "volunteer opportunities",
    "student innovation",
  ],
  authors: [{ name: "XES Helsinki" }],
  creator: "XES Helsinki",
  publisher: "XES Helsinki",
  alternates: {
    canonical: "/",
  },
  category: "education",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: "https://www.xeshelsinki.com",
    siteName: "XES Helsinki",
    title: "XES Helsinki | Haaga-Helia Entrepreneurship Society",
    description:
      "A community of student founders, dreamers, and doers in Helsinki. Join XES for startup events, practical learning, and meaningful connections.",
    locale: "en_FI",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "XES Helsinki logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XES Helsinki | Haaga-Helia Entrepreneurship Society",
    description:
      "Join XES Helsinki to build startup skills, grow your network, and turn ideas into real ventures.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        <AppProviders>
          <div className="relative isolate flex min-h-full flex-1 flex-col overflow-x-clip">
            <Navbar />
            <main id="main" className="flex min-h-0 flex-1 flex-col">
              {children}
            </main>
            <CtaBand />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
