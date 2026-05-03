"use client";

import type { ReactNode } from "react";

import { SiteModalsProvider } from "@/components/site-modals-provider";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

export function AppProviders({ children }: { children: ReactNode }) {
    return (
        <SmoothScrollProvider>
            <SiteModalsProvider>{children}</SiteModalsProvider>
        </SmoothScrollProvider>
    );
}
