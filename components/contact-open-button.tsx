"use client";

import type { ReactNode } from "react";

import { useContactApplication } from "@/components/site-modals-provider";

type ContactOpenButtonProps = {
    className?: string;
    children?: ReactNode;
};

export function ContactOpenButton({
    className,
    children = "Send a message",
}: ContactOpenButtonProps) {
    const { open } = useContactApplication();

    return (
        <button type="button" onClick={open} className={className}>
            {children}
        </button>
    );
}
