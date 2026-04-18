"use client";

import Marquee from "react-fast-marquee";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/cn";

type KineticMarqueeProps = {
    speed?: number;
    className?: string;
    trackClassName?: string;
    children: React.ReactNode;
};

export function KineticMarquee({
    speed = 60,
    className,
    trackClassName,
    children,
}: KineticMarqueeProps) {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
        return (
            <div
                className={cn(
                    "border-y-2 border-border",
                    className,
                )}
            >
                <div
                    className={cn(
                        "flex flex-wrap items-center gap-x-10 gap-y-4 px-6 py-8 md:px-10",
                        trackClassName,
                    )}
                >
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div
            className={cn("border-y-2 border-border", className)}
        >
            <Marquee
                speed={speed}
                gradient={false}
                autoFill
                pauseOnHover={false}
            >
                <div
                    className={cn(
                        "flex shrink-0 items-center gap-x-12 md:gap-x-20 px-6 md:px-10",
                        trackClassName,
                    )}
                >
                    {children}
                </div>
            </Marquee>
        </div>
    );
}
