"use client";

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

type StackItem = {
    id: string;
    heading: string;
    description: string;
    imageSrc: string;
    /** When true, image is on the right on large screens (matches previous alternating “adventure” pages). */
    imageOnRight: boolean;
    cta?: { label: string; href: string };
};

const stackItems: StackItem[] = [
    {
        id: "events",
        heading: "Events",
        description:
            "Pitch competitions, startup workshops, and speaker sessions. We bring in founders who've been through it, run hands-on sessions on everything from customer discovery to cap tables, and create stages where you can test your ideas in front of real audiences.",
        imageSrc: DUMMY_IMAGES[0],
        imageOnRight: false,
        cta: { label: "Learn more", href: "#events" },
    },
    {
        id: "excursions",
        heading: "Excursions",
        description:
            "Company visits, accelerator trips, and access to startup events across Helsinki. Meet founders and see what building actually looks like.",
        imageSrc: DUMMY_IMAGES[1],
        imageOnRight: true,
        cta: { label: "Suggest a visit", href: "#excursions" },
    },
    {
        id: "pitch",
        heading: "Pitch Coaching",
        description:
            "A program for early-stage founders — from napkin idea to confident pitch. Members only.",
        imageSrc: DUMMY_IMAGES[2],
        imageOnRight: false,
        cta: { label: "Become a member", href: "#pitch" },
    },
    {
        id: "hangouts",
        heading: "Community Hangouts",
        description:
            "Founder meetups, co-founder matching, casual idea feedback sessions. No agenda, no pressure — just students who get it.",
        imageSrc: DUMMY_IMAGES[3],
        imageOnRight: true,
        cta: { label: "Join a hangout", href: "#hangouts" },
    },
    {
        id: "projects",
        heading: "Projects",
        description:
            "Hands-on initiatives connecting forward-thinkers and creative problem-solvers. Drive change, make impact, build something real.",
        imageSrc: DUMMY_IMAGES[4],
        imageOnRight: false,
        cta: { label: "Explore projects", href: "#projects" },
    },
];

export function WhatWeDoScrollAdventure() {
    return (
        <div className="relative space-y-8 pb-28 md:space-y-12 md:pb-36">
            {stackItems.map((item, i) => (
                <article
                    key={item.id}
                    id={item.id}
                    className="sticky top-20 overflow-hidden rounded-2xl shadow-lg md:top-24 md:rounded-3xl md:shadow-2xl"
                    style={{ zIndex: i + 1 }}
                >
                    <div
                        className={[
                            "flex min-h-[min(82dvh,760px)] flex-col bg-neutral-950 lg:min-h-[min(78dvh,720px)] lg:flex-row",
                            item.imageOnRight ? "lg:flex-row-reverse" : "",
                        ].join(" ")}
                    >
                        <div className="relative h-52 shrink-0 bg-neutral-900 sm:h-64 lg:h-auto lg:w-1/2 lg:min-h-0">
                            <Image
                                src={item.imageSrc}
                                alt={`${item.heading} — XES`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-center"
                                priority={i === 0}
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/25 lg:via-transparent lg:to-transparent" />
                        </div>

                        <div className="flex flex-1 flex-col justify-center gap-5 px-6 py-10 md:gap-6 md:px-10 md:py-12 lg:px-12 lg:py-14">
                            <h3 className="font-sans text-3xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-4xl lg:text-5xl">
                                {item.heading}
                            </h3>
                            <p className="max-w-xl text-base font-medium leading-relaxed text-white/85 md:text-lg">
                                {item.description}
                            </p>
                            {item.cta && (
                                <Link
                                    href={item.cta.href}
                                    className="cursor-pointer inline-flex w-fit items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
                                    style={{ backgroundColor: ACCENT }}
                                >
                                    {item.cta.label}
                                </Link>
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
