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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full scroll-smooth`}>
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
