"use client";

import { KineticMarquee } from "@/components/kinetic-marquee";

const items = [
  { value: "12.4M", label: "Impulses" },
  { value: "0.08s", label: "Latch time" },
  { value: "48", label: "Channels" },
  { value: "∞", label: "Loops" },
  { value: "240%", label: "Overprint" },
];

export function StatMarquee() {
  return (
    <KineticMarquee
      speed={85}
      className="bg-accent text-accent-foreground"
      trackClassName="text-accent-foreground"
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-baseline gap-3 pr-4 text-accent-foreground md:pr-8"
        >
          <span className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-none tracking-tighter">
            {item.value}
          </span>
          <span className="text-sm font-bold uppercase tracking-widest md:text-base">
            {item.label}
          </span>
          <span className="pl-6 text-2xl font-black md:pl-10 md:text-3xl">✶</span>
        </div>
      ))}
    </KineticMarquee>
  );
}
