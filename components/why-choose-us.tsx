const items = [
    {
        title: "Save time and resources",
        body: "Cut overhead and reclaim hours your team spends on manual work every week.",
    },
    {
        title: "Improve team productivity",
        body: "Give your team the tools they need to collaborate effectively and deliver results faster.",
    },
    {
        title: "Scale with confidence",
        body: "Build on infrastructure that grows with you—no rearchitecting required.",
    },
    {
        title: "Stay organized",
        body: "Keep every project, task, and conversation in one place so nothing slips through.",
    },
];

export function WhyChooseUs() {
    return (
        <section
            id="why"
            className="scroll-mt-20 py-24 md:py-32 "
        >
            <div className="mx-auto w-full max-w-[95vw] px-4 md:px-8">
                <p className="mb-12 text-xs font-bold uppercase tracking-widest text-accent md:text-sm">
                    Why choose us?
                </p>

                <ul className="divide-y-1 divide-border">
                    {items.map((item) => (
                        <li key={item.title} className="group">
                            <div className="relative overflow-hidden">
                                {/* hover card background */}
                                <div
                                    className="
                                        absolute inset-0 rounded-none bg-[#1a1a1a]
                                        opacity-0 transition-opacity duration-300
                                        group-hover:opacity-100
                                    "
                                />

                                {/* content row */}
                                <div
                                    className="
                                        relative flex flex-col items-start gap-4 py-7
                                        md:flex-row md:items-center md:justify-between md:gap-8 md:py-8
                                    "
                                >
                                    {/* left: title — shifts right on hover */}
                                    <h2
                                        className="
                                            text-[clamp(2rem,5.5vw,4.5rem)] font-bold
                                            uppercase leading-none tracking-tighter
                                            text-primary
                                            translate-x-0
                                            transition-transform duration-300
                                            ease-[cubic-bezier(0.22,1,0.36,1)]
                                            group-hover:translate-x-4
                                            md:group-hover:translate-x-8
                                        "
                                    >
                                        {item.title}
                                    </h2>

                                    {/* right: description — visible; subtle shift on hover */}
                                    <p
                                        className="
                                            max-w-full text-base font-medium leading-snug tracking-tight
                                            text-muted-foreground md:text-lg md:leading-relaxed
                                            transition-transform duration-300
                                            ease-[cubic-bezier(0.22,1,0.36,1)]
                                            md:max-w-sm md:text-right
                                            md:group-hover:-translate-x-8
                                            group-hover:-translate-x-1
                                        "
                                    >
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
