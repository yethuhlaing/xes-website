"use client";

import TextBlockAnimation from "@/components/text-block-animation";

/** Matches `text-primary-foreground` on `bg-primary` cards — reveal reads on-brand. */
const BLOCK_COLOR = "hsl(var(--primary-foreground))";

const benefits = [
    {
        title: "Tons of networking opportunities.",
        body: "Expand your professional and personal network in Finland and beyond. Through XES, volunteers build relationships with employers, collaborators, and peers—many of which continue long after their time on the team.",
    },
    {
        title: "A killer add-on to your CV and LinkedIn.",
        body: "Grow your portfolio and receive a reference letter. We are happy to recommend our active volunteers and sing their praises!",
    },
    {
        title: "Study Credits.",
        body: "Are you a student at Haaga-Helia UAS? Fantastic! You can also gain 5 crispy credits through your active contribution to XES.",
    },
    {
        title: "Community development experience.",
        body: "Our entrepreneurship society is flexible and loves innovative ideas. This is your chance to shape the direction of XES!",
    },
    {
        title: "Decide your own responsibilities.",
        body: "We always have an extensive list of what you could do. And you have the space to take the initiative and try as many things as you want.",
    },
    {
        title: "Flexible working hours, (minimum 2h/week).",
        body: "You decide how much time you want to invest. Work remotely, or work with us on Haaga-Helia campus.",
    },
    {
        title: "Guidance.",
        body: "Our Operations team and Board members will guide and support you when needed.",
    },
];

export function WhatsInItForYou() {
    return (
        <section
            id="whats-in-it-for-you"
            aria-labelledby="whats-in-it-heading"
            className="py-24 md:py-32"
        >
            <div className="mx-auto w-full max-w-[95vw] px-4 md:px-8">
                <div className="mb-16 max-w-5xl">
                    <TextBlockAnimation
                        animateOnScroll
                        blockColor={BLOCK_COLOR}
                        duration={0.4}
                        stagger={0.03}
                    >
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground md:text-sm">
                            For volunteers
                        </p>
                    </TextBlockAnimation>
                    <TextBlockAnimation
                        animateOnScroll
                        blockColor={BLOCK_COLOR}
                        duration={0.44}
                        stagger={0.025}
                    >
                        <h2
                            id="whats-in-it-heading"
                            className="mt-4 text-[clamp(2.5rem,8vw,6rem)] font-bold uppercase leading-[0.85] tracking-tighter text-foreground"
                        >
                            What&apos;s in it for you?
                        </h2>
                    </TextBlockAnimation>
                </div>

                <div className="relative space-y-10 pb-32 md:space-y-14 md:pb-40">
                    {benefits.map((item, i) => (
                        <article
                            key={item.title}
                            className="sticky top-24 bg-primary p-8 md:top-32 md:p-12"
                            style={{ zIndex: i + 1 }}
                        >
                            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                                <div className="flex gap-4 md:max-w-xl md:gap-5">
                                    <div>
                                        <TextBlockAnimation
                                            animateOnScroll
                                            blockColor={BLOCK_COLOR}
                                            duration={0.42}
                                            stagger={0.028}
                                        >
                                            <h3 className="text-2xl font-bold uppercase tracking-tighter text-primary-foreground md:text-4xl lg:text-5xl">
                                                {item.title}
                                            </h3>
                                        </TextBlockAnimation>
                                    </div>
                                </div>
                                <TextBlockAnimation
                                    animateOnScroll
                                    blockColor={BLOCK_COLOR}
                                    duration={0.38}
                                    stagger={0.02}
                                >
                                    <p className="max-w-xl text-lg font-medium leading-tight tracking-tight text-primary-foreground/80 md:text-xl md:pt-1">
                                        {item.body}
                                    </p>
                                </TextBlockAnimation>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
