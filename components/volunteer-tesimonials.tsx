"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

export interface AboutTestimonial {
    img: string;
    quote: string;
    name: string;
    role: string;
}

const defaultTestimonials: AboutTestimonial[] = [
    {
        img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=112&h=112&fit=crop&q=80",
        quote: "Xes opened opportunities to me that I never even expected to get. Joining Xes was definitely the best decision of 2023 for me!",
        name: "Tamara Verenich",
        role: "Head of Communications 2023",
    },
    {
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=112&h=112&fit=crop&q=80",
        quote: "XES offers a welcoming and fun environment you wouldn't want to miss out on. Being a volunteer has been a big help in finding my strengths while meeting new people and trying new things.",
        name: "Tara Martin",
        role: "Photographer",
    },
    {
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=112&h=112&fit=crop&q=80",
        quote: "Xes helped me build my professional network and fostered a sense of belonging. It was a stepping stone for my entrepreneurial career!",
        name: "Nihal Koymatli",
        role: "Vice-Chairperson of Board 2023",
    },
    {
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=112&h=112&fit=crop&q=80",
        quote: "Joining Xes has been a personal adventure where I met amazing people, became part of the ecosystem and discovered a multitude of opportunities.",
        name: "Asma Al Abbasi",
        role: "Project Manager 2023",
    },
    {
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=112&h=112&fit=crop&q=80",
        quote: "Being a XES volunteer has been my ticket to cool and boundless opportunities. Joining XES has personally enriched my journey, offering new skills, valuable connections, and experiences beyond my expectations.",
        name: "Xenia Thoma",
        role: "Partnership Lead 2023",
    },
];

export function VolunteerTestimonialsCarousel({
    testimonials = defaultTestimonials,
}: {
    testimonials?: AboutTestimonial[];
}) {
    const [active, setActive] = useState<number>(0);
    const [autorotate, setAutorotate] = useState<boolean>(true);
    const autorotateTiming: number = 7000;

    useEffect(() => {
        if (!autorotate) return;
        const interval = setInterval(() => {
            setActive((prev) =>
                prev + 1 === testimonials.length ? 0 : prev + 1,
            );
        }, autorotateTiming);
        return () => clearInterval(interval);
    }, [autorotate, testimonials.length]);

    const renderNameButton = (index: number) => {
        const testimonial = testimonials[index];
        if (!testimonial) return null;
        const isActive = active === index;
        return (
            <button
                key={index}
                type="button"
                className={`flex min-w-[10.5rem] max-w-[11rem] flex-col items-center gap-1 rounded-xl border px-4 py-3 text-center transition-[color,box-shadow,background-color,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-fuchsia-500/50 dark:focus-visible:ring-offset-zinc-950 ${
                    isActive
                        ? "border-fuchsia-400/80 bg-fuchsia-500/[0.08] shadow-sm shadow-fuchsia-900/5"
                        : "border-zinc-200/90 bg-white hover:border-fuchsia-200 hover:bg-fuchsia-50/40 dark:border-zinc-700 dark:bg-zinc-900/40 dark:hover:border-fuchsia-600/50 dark:hover:bg-fuchsia-950/20"
                }`}
                onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                }}
            >
                <span
                    className={`text-sm font-semibold leading-tight ${
                        isActive
                            ? "text-fuchsia-950 dark:text-fuchsia-100"
                            : "text-zinc-900 dark:text-zinc-100"
                    }`}
                >
                    {testimonial.name}
                </span>
            </button>
        );
    };

    const firstRow = testimonials.slice(0, 3);
    const secondRow = testimonials.slice(3);

    return (
        <div className="mx-auto grid min-h-[min(88vh,40rem)] w-full max-w-3xl grid-rows-[auto_1fr_auto] text-center sm:min-h-[min(85vh,42rem)]">
            <div className="relative h-32 shrink-0">
                <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-fuchsia-500/25 before:via-fuchsia-500/5 before:via-25% before:to-fuchsia-500/0 before:to-75%">
                    <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,white_20%,white)]">
                        {testimonials.map((testimonial, index) => (
                            <Transition
                                as="div"
                                key={index}
                                show={active === index}
                                className="absolute inset-0 -z-10 h-full"
                                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-500"
                                enterFrom="z-10 opacity-0 -rotate-[60deg]"
                                enterTo="z-10 opacity-100 rotate-0"
                                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-400"
                                leaveFrom="z-0 opacity-100 rotate-0"
                                leaveTo="z-0 opacity-0 rotate-[60deg]"
                            >
                                <Image
                                    className="relative left-1/2 top-11 -translate-x-1/2 rounded-full"
                                    src={testimonial.img}
                                    width={56}
                                    height={56}
                                    alt={testimonial.name}
                                />
                            </Transition>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex min-h-[12rem] w-full flex-col items-center justify-center self-stretch px-2 py-6 sm:min-h-[14rem] sm:py-8">
                <div className="relative flex w-full max-w-2xl flex-col">
                    {testimonials.map((testimonial, index) => (
                        <Transition
                            key={index}
                            show={active === index}
                            enter="transition ease-out duration-300"
                            enterFrom="relative z-10 opacity-0 translate-x-3"
                            enterTo="relative z-10 opacity-100 translate-x-0"
                            leave="transition ease-in duration-200 absolute inset-x-0 top-0 z-0"
                            leaveFrom="z-0 opacity-100 translate-x-0"
                            leaveTo="z-0 opacity-0 -translate-x-3"
                        >
                            <div className="flex flex-col items-center gap-5">
                                <p className="text-2xl font-bold leading-snug text-fuchsia-900 before:content-['\201C'] after:content-['\201D']">
                                    {testimonial.quote}
                                </p>
                                <div className="flex flex-col gap-0.5 text-center">
                                    <span className="text-base font-semibold tracking-tight text-fuchsia-950">
                                        {testimonial.name}
                                    </span>
                                    <span className="text-sm font-normal text-fuchsia-800/70">
                                        {testimonial.role}
                                    </span>
                                </div>
                            </div>
                        </Transition>
                    ))}
                </div>
            </div>
            <div className="flex shrink-0 flex-col gap-2 border-t border-fuchsia-200/40 pt-5 pb-1 dark:border-fuchsia-800/30">
                <div className="flex flex-wrap justify-center gap-2 lg:hidden">
                    {testimonials.map((_, index) => renderNameButton(index))}
                </div>
                <div className="hidden w-full flex-col items-center gap-2 lg:flex">
                    <div className="flex flex-wrap justify-center gap-2">
                        {firstRow.map((_, i) => renderNameButton(i))}
                    </div>
                    {secondRow.length > 0 ? (
                        <div className="flex flex-wrap justify-center gap-2">
                            {secondRow.map((_, i) =>
                                renderNameButton(i + firstRow.length),
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
