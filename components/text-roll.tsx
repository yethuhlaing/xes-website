"use client";

import { motion } from "framer-motion";
import type React from "react";

import { cn } from "@/lib/cn";

const navigationItems = [
    { name: "Home", href: "#main" },
    { name: "Why join", href: "#why" },
    { name: "Velocity", href: "#velocity" },
    { name: "Voices", href: "#voices" },
    { name: "Contact", href: "#contact" },
];

const STAGGER = 0.035;

export function Skiper58() {
    return (
        <nav
            aria-label="Section links"
            className="flex min-h-full w-full flex-1 flex-col items-center justify-center gap-1.5 rounded-2xl bg-background/80 px-7 py-3 backdrop-blur-sm"
        >
            <ul className="flex w-full flex-col items-center justify-center gap-1.5 py-6">
                {navigationItems.map((item) => (
                    <li
                        key={item.href}
                        className="relative flex flex-col items-center overflow-visible"
                    >
                        <a
                            href={item.href}
                            aria-label={item.name}
                            className="group flex flex-col items-center text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            <div
                                className="relative flex items-start"
                                aria-hidden
                            >
                                <TextRoll
                                    center
                                    className="text-4xl font-extrabold uppercase leading-[0.8] tracking-[-0.03em] transition-colors lg:text-5xl"
                                >
                                    {item.name}
                                </TextRoll>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

const TextRoll: React.FC<{
    children: string;
    className?: string;
    center?: boolean;
}> = ({ children, className, center = false }) => {
    return (
        <motion.span
            variants={{ initial: {}, hovered: {} }}
            initial="initial"
            whileHover="hovered"
            className={cn("relative block overflow-hidden", className)}
            style={{
                lineHeight: 0.75,
            }}
        >
            <div aria-hidden>
                {children.split("").map((l, i) => {
                    const delay = center
                        ? STAGGER * Math.abs(i - (children.length - 1) / 2)
                        : STAGGER * i;

                    return (
                        <motion.span
                            variants={{
                                initial: {
                                    y: 0,
                                },
                                hovered: {
                                    y: "-100%",
                                },
                            }}
                            transition={{
                                ease: "easeInOut",
                                delay,
                            }}
                            className="inline-block"
                            key={`${l}-${i}-a`}
                        >
                            {l === " " ? "\u00A0" : l}
                        </motion.span>
                    );
                })}
            </div>
            <div className="absolute inset-0" aria-hidden>
                {children.split("").map((l, i) => {
                    const delay = center
                        ? STAGGER * Math.abs(i - (children.length - 1) / 2)
                        : STAGGER * i;

                    return (
                        <motion.span
                            variants={{
                                initial: {
                                    y: "100%",
                                },
                                hovered: {
                                    y: 0,
                                },
                            }}
                            transition={{
                                ease: "easeInOut",
                                delay,
                            }}
                            className="inline-block"
                            key={`${l}-${i}-b`}
                        >
                            {l === " " ? "\u00A0" : l}
                        </motion.span>
                    );
                })}
            </div>
        </motion.span>
    );
};

export { TextRoll };
