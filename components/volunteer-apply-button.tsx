"use client";

import type { ReactNode } from "react";

import { useVolunteerApplication } from "@/components/site-modals-provider";

type VolunteerApplyButtonProps = {
    className?: string;
    children?: ReactNode;
};

export function VolunteerApplyButton({
    className,
    children = "Become a Volunteer",
}: VolunteerApplyButtonProps) {
    const { open } = useVolunteerApplication();

    return (
        <button type="button" onClick={open} className={className}>
            {children}
        </button>
    );
}
