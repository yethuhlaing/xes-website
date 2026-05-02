import Image from "next/image";
import Link from "next/link";

const DUMMY_IMAGES = [
    "/images/1.JPG",
    "/images/2.jpg",
    "/images/3.JPG",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
] as const;

const ACCENT = "#C471ED";

type Layout = "hero" | "compact" | "wide";

type BentoItem = {
    id: string;
    title: string;
    description: string;
    imageIndex: number;
    cta?: { label: string; href: string };
    gridClass: string;
    layout: Layout;
};

const items: BentoItem[] = [
    {
        id: "events",
        title: "Events",
        description:
            "Pitch competitions, startup workshops, and speaker sessions. We bring in founders who've been through it, run hands-on sessions on everything from customer discovery to cap tables, and create stages where you can test your ideas in front of real audiences.",
        imageIndex: 0,
        cta: { label: "Learn more", href: "#events" },
        gridClass: "lg:col-span-3 lg:row-span-2 lg:col-start-1 lg:row-start-1",
        layout: "hero",
    },
    {
        id: "excursions",
        title: "Excursions",
        description:
            "Company visits, accelerator trips, and access to startup events across Helsinki. Meet founders and see what building actually looks like.",
        imageIndex: 1,
        cta: { label: "Suggest a visit", href: "#excursions" },
        gridClass: "lg:col-span-3 lg:row-span-1 lg:col-start-4 lg:row-start-1",
        layout: "compact",
    },
    {
        id: "pitch",
        title: "Pitch Coaching",
        description:
            "A program for early-stage founders — from napkin idea to confident pitch. Members only.",
        imageIndex: 2,
        cta: { label: "Become a member", href: "#pitch" },
        gridClass: "lg:col-span-3 lg:row-span-1 lg:col-start-4 lg:row-start-2",
        layout: "compact",
    },
    {
        id: "hangouts",
        title: "Community Hangouts",
        description:
            "Founder meetups, co-founder matching, casual idea feedback sessions. No agenda, no pressure — just students who get it.",
        imageIndex: 3,
        cta: { label: "Join a hangout", href: "#hangouts" },
        gridClass: "lg:col-span-3 lg:row-span-1 lg:col-start-1 lg:row-start-3",
        layout: "wide",
    },
    {
        id: "projects",
        title: "Projects",
        description:
            "Hands-on initiatives connecting forward-thinkers and creative problem-solvers. Drive change, make impact, build something real.",
        imageIndex: 4,
        cta: { label: "Explore projects", href: "#projects" },
        gridClass: "lg:col-span-3 lg:row-span-1 lg:col-start-4 lg:row-start-3",
        layout: "wide",
    },
];

function BentoCard({ item }: { item: BentoItem }) {
    const imageSrc = DUMMY_IMAGES[item.imageIndex] ?? DUMMY_IMAGES[0];

    if (item.layout === "hero") {
        return (
            <article
                id={item.id}
                className={[
                    "group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm transition-shadow hover:shadow-lg",
                    "min-h-[28rem] lg:min-h-0 lg:h-full",
                    item.gridClass,
                ].join(" ")}
            >
                <div className="relative flex-1 overflow-hidden bg-neutral-200">
                    <Image
                        src={imageSrc}
                        alt={`${item.title} — XES`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                <div className="flex flex-col gap-4 p-7 lg:p-8">
                    <h3 className="font-sans text-3xl font-bold uppercase leading-tight tracking-tight text-neutral-950 lg:text-4xl">
                        {item.title}
                    </h3>
                    <p className="max-w-prose text-sm font-medium leading-relaxed text-neutral-600 lg:text-base">
                        {item.description}
                    </p>
                    {item.cta && (
                        <Link
                            href={item.cta.href}
                            className="inline-flex w-fit items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
                            style={{ backgroundColor: ACCENT }}
                        >
                            {item.cta.label}
                        </Link>
                    )}
                </div>
            </article>
        );
    }

    if (item.layout === "compact") {
        return (
            <article
                id={item.id}
                className={[
                    "group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm transition-shadow hover:shadow-lg lg:flex-row",
                    "min-h-[22rem] lg:min-h-0 lg:h-full",
                    item.gridClass,
                ].join(" ")}
            >
                <div className="relative h-48 shrink-0 overflow-hidden bg-neutral-200 lg:h-auto lg:w-2/5">
                    <Image
                        src={imageSrc}
                        alt={`${item.title} — XES`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 25vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between gap-3 p-5 lg:p-6">
                    <div className="space-y-2">
                        <h3 className="font-sans text-xl font-bold uppercase leading-tight tracking-tight text-neutral-950 lg:text-2xl">
                            {item.title}
                        </h3>
                        <p className="text-xs font-medium leading-relaxed text-neutral-600 lg:text-sm">
                            {item.description}
                        </p>
                    </div>
                    {item.cta && (
                        <Link
                            href={item.cta.href}
                            className="inline-flex w-fit items-center justify-center rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
                            style={{ backgroundColor: ACCENT }}
                        >
                            {item.cta.label}
                        </Link>
                    )}
                </div>
            </article>
        );
    }

    // wide layout
    return (
        <article
            id={item.id}
            className={[
                "group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm transition-shadow hover:shadow-lg lg:flex-row",
                "min-h-[20rem] lg:min-h-0 lg:h-full",
                item.gridClass,
            ].join(" ")}
        >
            <div className="relative h-48 shrink-0 overflow-hidden bg-neutral-200 lg:h-auto lg:w-[44%]">
                <Image
                    src={imageSrc}
                    alt={`${item.title} — XES`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between gap-4 p-6 lg:p-8">
                <div className="space-y-3">
                    <h3 className="font-sans text-2xl font-bold uppercase leading-tight tracking-tight text-neutral-950 lg:text-3xl">
                        {item.title}
                    </h3>
                    <p className="max-w-prose text-sm font-medium leading-relaxed text-neutral-600 lg:text-base">
                        {item.description}
                    </p>
                </div>
                {item.cta && (
                    <Link
                        href={item.cta.href}
                        className="inline-flex w-fit items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
                        style={{ backgroundColor: ACCENT }}
                    >
                        {item.cta.label}
                    </Link>
                )}
            </div>
        </article>
    );
}

export default function WhatWeDo() {
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
                        className="max-w-3xl font-sans text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl"
                    >
                        What we do
                    </h2>
                    <p className="max-w-md text-base font-medium leading-relaxed text-neutral-500 md:text-lg">
                        Events, excursions, pitch coaching, community hangouts, and
                        hands-on projects — built for students and founders in the Finnish
                        ecosystem.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-6 lg:grid-rows-[300px_300px_280px] lg:gap-5">
                    {items.map((item) => (
                        <BentoCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
