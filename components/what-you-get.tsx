import Image from "next/image";
import Link from "next/link";

const OFFERINGS_IMAGE = "/bento/offerings-stack.jpg";

/** Vertical composite: crop each card to its band in the shared reference image. */
const imageCrop = {
    events: { objectPosition: "50% 10%" as const },
    excursions: { objectPosition: "50% 34%" as const },
    pitch: { objectPosition: "50% 58%" as const },
    projects: { objectPosition: "50% 86%" as const },
};

const bentoAccent = "#C471ED";

type BentoItem = {
    id: string;
    title: string;
    description: string;
    imageKey: keyof typeof imageCrop;
    cta?: { label: string; href: string };
    /** Tailwind classes for grid placement on large screens */
    gridClass: string;
    /** Minimum height for the image region */
    imageMinClass: string;
};

const items: BentoItem[] = [
    {
        id: "events",
        title: "Events",
        description:
            "Are you willing to learn something new and meet goal-driven and like-minded people? At Xes, we organize community hangouts, events for students, SMEs and entrepreneurs. With Xes you can unlock your entrepreneurial potential, upgrade business skills and have fun!",
        imageKey: "events",
        cta: { label: "Learn more", href: "#events" },
        gridClass:
            "lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1 min-h-[28rem] lg:min-h-0",
        imageMinClass: "min-h-[12rem] lg:min-h-[42%]",
    },
    {
        id: "excursions",
        title: "Excursions",
        description:
            "We grow our networks and knowledge by offering excursions to essential Finnish startup scene locations.",
        imageKey: "excursions",
        cta: { label: "Suggest a place to visit", href: "#excursions" },
        gridClass: "lg:col-span-1 lg:row-span-1 lg:col-start-3 lg:row-start-1 min-h-[22rem] lg:min-h-0",
        imageMinClass: "min-h-[9rem] lg:min-h-[38%]",
    },
    {
        id: "pitch",
        title: "Pitch coaching",
        description:
            "Pitch Coaching is a program to help early-stage founders who either have started working on their fresh idea, or only have the idea written on a napkin. All you need is the motivation to learn about pitching and what it takes to be an entrepreneur. The Pitch Coaching program is only available for our members.",
        imageKey: "pitch",
        cta: { label: "Become a member", href: "#membership" },
        gridClass:
            "lg:col-span-1 lg:row-span-2 lg:col-start-4 lg:row-start-1 min-h-[26rem] lg:min-h-0",
        imageMinClass: "min-h-[10rem] lg:min-h-[32%]",
    },
    {
        id: "projects",
        title: "Projects",
        description:
            "Take part in our projects, where innovation meets collaboration! We are dedicated to cultivate a dynamic community of forward-thinkers and creative problem-solvers. Our team hosts exciting project initiatives, connecting individuals and teams passionate about driving change and making a real impact.",
        imageKey: "projects",
        cta: { label: "Explore projects", href: "#projects" },
        gridClass: "lg:col-span-4 lg:col-start-1 lg:row-start-3 min-h-[20rem] lg:min-h-0",
        imageMinClass:
            "min-h-[10rem] lg:h-auto lg:min-h-[14rem] lg:w-[42%] lg:max-w-xl lg:shrink-0 lg:self-stretch",
    },
];

function BentoCard({ item }: { item: BentoItem }) {
    const crop = imageCrop[item.imageKey];
    const isWide = item.id === "projects";

    return (
        <article
            className={[
                "group flex flex-col overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-50 shadow-sm transition-shadow hover:shadow-md",
                item.gridClass,
                isWide ? "lg:flex-row lg:items-stretch" : "",
            ].join(" ")}
        >
            <div
                className={[
                    "relative w-full overflow-hidden bg-neutral-200",
                    item.imageMinClass,
                    isWide ? "lg:h-auto" : "",
                ].join(" ")}
            >
                <Image
                    src={OFFERINGS_IMAGE}
                    alt={`${item.title} — XES`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    style={{ objectPosition: crop.objectPosition }}
                    priority={item.id === "events"}
                />
            </div>

            <div
                className={[
                    "flex flex-1 flex-col justify-between gap-4 p-6 md:p-8",
                    isWide ? "lg:py-10" : "",
                ].join(" ")}
            >
                <div className="space-y-3">
                    <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-neutral-950 md:text-3xl">
                        {item.title}
                    </h3>
                    <p className="max-w-prose text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                        {item.description}
                    </p>
                </div>
                {item.cta ? (
                    <Link
                        href={item.cta.href}
                        className="inline-flex w-fit items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-[filter,transform] hover:brightness-105 active:scale-[0.98]"
                        style={{ backgroundColor: bentoAccent }}
                    >
                        {item.cta.label}
                    </Link>
                ) : null}
            </div>
        </article>
    );
}

export default function WhatYouGet() {
    return (
        <section
            id="offerings"
            aria-labelledby="bento-heading"
            className="relative z-10 rounded-t-[3rem] bg-white px-6 py-24 text-neutral-950 lg:rounded-t-[6rem] lg:px-20 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">
                <header className="mb-14 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
                    <h2
                        id="bento-heading"
                        className="max-w-3xl font-sans text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl"
                    >
                        What you get with{" "}
                        <span className="text-neutral-300">XES.</span>
                    </h2>
                    <p className="max-w-md text-base font-medium leading-relaxed text-neutral-500 md:text-lg">
                        Events, excursions, pitch coaching, and community projects—built
                        for students and founders in the Finnish ecosystem.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-4 lg:gap-6 lg:auto-rows-[minmax(200px,260px)]">
                    {items.map((item) => (
                        <BentoCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
