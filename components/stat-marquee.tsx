"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const valueClass =
    "text-[clamp(2rem,6vw,4rem)] font-black leading-none tracking-tighter";

const labelClass = "text-xs font-bold uppercase tracking-widest md:text-sm";

function Diamond() {
    return (
        <span className="select-none text-xl font-black md:text-2xl" aria-hidden>
            ♦
        </span>
    );
}

function StatItem({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex items-baseline gap-2 md:gap-3">
            <span className={valueClass}>{value}</span>
            <span className={labelClass}>{label}</span>
        </div>
    );
}

const stats = [
    { value: "5", label: "ECTS for volunteers" },
    { value: "100%", label: "Student-led" },
    { value: "All", label: "Backgrounds welcome" },
    { value: "∞", label: "Ideas welcome" },
    { value: "Build", label: "Learn by doing" },
    { value: "360°", label: "Events & excursions" },
];

function Track({ speed = 60 }: { speed?: number }) {
    const trackRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    useAnimationFrame((_, delta) => {
        const trackWidth = trackRef.current?.scrollWidth ?? 0;
        const halfWidth = trackWidth / 2;
        if (halfWidth === 0) return;
        let next = x.get() - (speed * delta) / 1000;
        if (Math.abs(next) >= halfWidth) next = 0;
        x.set(next);
    });

    const items = (
        <div className="flex shrink-0 items-center gap-8 py-6 md:gap-12 md:py-8">
            {stats.map((stat, i) => (
                <div key={i} className="flex shrink-0 items-center gap-8 md:gap-12">
                    <StatItem value={stat.value} label={stat.label} />
                    <Diamond />
                </div>
            ))}
        </div>
    );

    return (
        <div className="overflow-hidden">
            <motion.div ref={trackRef} style={{ x }} className="flex w-max">
                {items}
                {/* duplicate for seamless loop */}
                {items}
            </motion.div>
        </div>
    );
}

export function StatMarquee({ speed = 60 }: { speed?: number }) {
    return (
        <div className="bg-primary text-primary-foreground">
            <Track speed={speed} />
        </div>
    );
}
