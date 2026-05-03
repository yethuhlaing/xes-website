"use client";

import type { ReactNode } from "react";

import { SiteModalsProvider } from "@/components/site-modals-provider";

export function AppProviders({ children }: { children: ReactNode }) {
    return <SiteModalsProvider>{children}</SiteModalsProvider>;
}
