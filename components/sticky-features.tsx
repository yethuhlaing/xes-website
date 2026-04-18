const features = [
  {
    kicker: "Layer 01",
    title: "Poster logic on the web",
    body: "Placeholder: oversized display type, hard edges, and acid yellow only where it punches—not as wallpaper.",
  },
  {
    kicker: "Layer 02",
    title: "Scroll as choreography",
    body: "Placeholder: hero zoom, sticky stacks, and marquees that never pretend to be polite background texture.",
  },
  {
    kicker: "Layer 03",
    title: "Flat, loud, legible",
    body: "Placeholder: no drop shadows, no soft radius—depth comes from overlap, borders, and inverted hovers.",
  },
];

export function StickyFeatures() {
  return (
    <section id="velocity" className="border-b-2 border-border py-24 md:py-32">
      <div className="mx-auto w-full max-w-[95vw] px-4 md:px-8">
        <div className="mb-16 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground md:text-sm">
            Sticky stack
          </p>
          <h2 className="mt-4 text-[clamp(2.5rem,8vw,6rem)] font-bold uppercase leading-[0.85] tracking-tighter">
            Cards that refuse to behave
          </h2>
        </div>

        <div className="relative space-y-10 pb-32 md:space-y-14 md:pb-40">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="group sticky top-24 border-2 border-border bg-background p-8 transition-colors duration-300 hover:border-accent hover:bg-accent md:top-32 md:p-12"
              style={{ zIndex: i + 1 }}
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors duration-300 group-hover:text-accent-foreground/70 md:text-sm">
                    {f.kicker}
                  </p>
                  <h3 className="mt-3 max-w-xl text-3xl font-bold uppercase tracking-tighter text-foreground transition-colors duration-300 group-hover:text-accent-foreground md:text-5xl lg:text-6xl">
                    {f.title}
                  </h3>
                </div>
                <p className="max-w-xl text-lg font-medium leading-tight tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-accent-foreground/80 md:text-xl">
                  {f.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
