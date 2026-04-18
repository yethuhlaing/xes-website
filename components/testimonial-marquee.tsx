"use client";

import { KineticMarquee } from "@/components/kinetic-marquee";

const quotes = [
  {
    quote:
      "Placeholder voice: the page feels like a venue, not a brochure. Everything yells in rhythm.",
    name: "Avery K.",
    role: "Creative ops",
  },
  {
    quote:
      "Placeholder voice: brutal contrast without muddy grays—finally a dark mode that actually commits.",
    name: "Milan R.",
    role: "Product design",
  },
  {
    quote:
      "Placeholder voice: motion stays on when I want chaos, and it backs off when I need calm.",
    name: "Jun S.",
    role: "Engineering",
  },
];

export function TestimonialMarquee() {
  return (
    <section id="voices" className="border-b-2 border-border py-24 md:py-32">
      <div className="mx-auto mb-12 w-full max-w-[95vw] px-4 md:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground md:text-sm">
          Voices in motion
        </p>
        <h2 className="mt-4 text-5xl font-bold uppercase leading-[0.9] tracking-tighter md:text-7xl">
          Testimonial band
        </h2>
      </div>

      <KineticMarquee speed={42} className="bg-muted" trackClassName="items-stretch">
        {quotes.map((q) => (
          <figure
            key={q.name}
            className="flex w-[min(92vw,520px)] shrink-0 flex-col justify-between border-2 border-border bg-background p-8 md:p-10"
          >
            <blockquote className="text-lg font-medium leading-tight tracking-tight text-foreground md:text-xl">
              {q.quote}
            </blockquote>
            <figcaption className="mt-8 text-xs font-bold uppercase tracking-widest text-muted-foreground md:text-sm">
              <span className="text-foreground">{q.name}</span>
              <span className="mx-2 text-accent">/</span>
              {q.role}
            </figcaption>
          </figure>
        ))}
      </KineticMarquee>
    </section>
  );
}
