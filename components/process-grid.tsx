const steps = [
    {
        title: "Scan the field",
        body: "Placeholder: map motion paths, typographic lockups, and edge cases before you ship real narratives.",
    },
    {
        title: "Amplify contrast",
        body: "Placeholder: push scale apart—display type should dwarf body copy so rhythm reads from across the room.",
    },
    {
        title: "Keep it moving",
        body: "Placeholder: marquees, scroll transforms, and hover flips should feel relentless but still respect reduced motion.",
    },
];

export function ProcessGrid() {
    return (
        <section
            id="signal"
            className="border-b-2 border-border py-24 md:py-32"
        >
            <div className="mx-auto w-full max-w-[95vw] px-4 md:px-8">
                <div className="mb-12 max-w-4xl">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground md:text-sm">
                        Protocol
                    </p>
                    <h2 className="mt-4 text-5xl font-bold uppercase leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                        Three beats, zero drift
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-px border-2 border-border bg-border md:grid-cols-3">
                    {steps.map((s) => (
            <article
              key={s.title}
              className="group bg-background p-8 transition-colors duration-300 hover:bg-accent md:p-10"
            >
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground transition-colors duration-300 group-hover:text-accent-foreground md:text-3xl lg:text-4xl">
                {s.title}
              </h3>
              <p className="mt-6 text-lg font-medium leading-tight tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-accent-foreground/80 md:text-xl">
                {s.body}
              </p>
            </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
