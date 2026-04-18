"use client";

import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";

import { cn } from "@/lib/cn";

const statBackdrop = ["08", "16", "32", "64"];

export function KineticHero() {
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll();

    const scale = useTransform(
        scrollYProgress,
        [0, 0.18],
        reduceMotion ? [1, 1] : [1, 1.14],
    );
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.28],
        reduceMotion ? [1, 1] : [1, 0],
    );

    return (
        <section className="relative overflow-hidden border-b-2 border-border py-24 md:py-32">
            <div className="pointer-events-none absolute inset-0 select-none">
                {statBackdrop.map((n, i) => (
                    <span
                        key={n}
                        aria-hidden
                        className={cn(
                            "absolute font-bold leading-none tracking-tighter text-muted",
                            "text-[clamp(6rem,28vw,14rem)] md:text-[clamp(8rem,32vw,18rem)]",
                            i % 2 === 0
                                ? "-left-[6%] top-[6%]"
                                : "right-[-10%] bottom-[2%]",
                        )}
                        style={{ opacity: 0.35 - i * 0.05 }}
                    >
                        {n}
                    </span>
                ))}
            </div>

            <div className="relative mx-auto flex w-full max-w-[95vw] flex-col gap-10 px-4 md:px-8">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground md:text-sm">
                    Placeholder runway · kinetic type study
                </p>

                <motion.div
                    style={{ scale, opacity }}
                    className="relative z-10 origin-top-left"
                >
                    <h1 className="max-w-[22ch] text-[clamp(3rem,12vw,9rem)] font-bold uppercase leading-[0.82] tracking-tighter text-foreground md:max-w-none">
                        Nothing sits <span className="text-accent">still</span>
                    </h1>
                    <p className="mt-8 max-w-2xl text-lg font-medium leading-tight tracking-tight text-muted-foreground md:text-xl lg:text-2xl">
                        This is placeholder kinetic copy. Swap headlines, stats,
                        and bands when your brand system lands—tokens already
                        live in globals.css.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                        href="#signal"
                        className={cn(
                            "inline-flex h-14 items-center justify-center bg-accent px-8 text-sm font-bold uppercase tracking-tighter text-accent-foreground",
                            "rounded-none transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        )}
                    >
                        Enter the loop
                    </a>
                    <a
                        href="#archive"
                        className={cn(
                            "inline-flex h-14 items-center justify-center border-2 border-border bg-transparent px-8 text-sm font-bold uppercase tracking-tighter text-foreground",
                            "rounded-none transition-colors duration-200",
                            "hover:bg-foreground hover:text-background",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        )}
                    >
                        Read the archive
                    </a>
                </div>
            </div>
        </section>
    );
}
