"use client";

import { useVolunteerApplication } from "@/components/site-modals-provider";

export function VolunteerModal() {
    const { open } = useVolunteerApplication();

    return (
        <button
            type="button"
            onClick={open}
            className="cursor-pointer inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:px-5 md:text-sm"
        >
            Become a Member
        </button>
    );
}
