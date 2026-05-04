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
  title: "XES — kinetic type shell",
  description: "Placeholder kinetic landing — tune tokens in globals.css.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
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
