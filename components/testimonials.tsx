"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const testimonials = [
    {
        id: 1,
        quote: "Being a proud member of XES Helsinki has been a game-changer for me, unlocking networking opportunities and a supportive community that empowers professional growth. Joining XES is not just a choice. It's a strategic investment in my future career.",
        author: "Tram Nguyen",
        role: "XES member",
        avatar: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        quote: "I made a huge step forward in my career due to XES Helsinki's community and work experience that it provided me. XES is a community that I recommend to anyone looking to start their own founder journey!",
        author: "Romeo Rinne",
        role: "XES Chairperson 2026",
        avatar: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        quote: "XES Helsinki has given me a chance to meet a lot of wonderful and talented people, participate in amazing events and feel appreciated and inspired on every step of my journey. This supportive community is something I cherish the most about my experience at XES.",
        author: "Maria Yakushkova",
        role: "XES member",
        avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote);
    const [displayedRole, setDisplayedRole] = useState(testimonials[0].role);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleSelect = (index: number) => {
        if (index === activeIndex || isAnimating) return;
        setIsAnimating(true);

        setTimeout(() => {
            setDisplayedQuote(testimonials[index].quote);
            setDisplayedRole(testimonials[index].role);
            setActiveIndex(index);
            setTimeout(() => setIsAnimating(false), 400);
        }, 200);
    };

    return (
        <div className="flex flex-col items-center gap-12 py-20 md:py-24">
            <div className="relative px-8">
                <span className="pointer-events-none absolute -left-3 -top-8 select-none font-serif text-8xl text-foreground/[0.06] md:text-9xl">
                    "
                </span>

                <p
                    className={cn(
                        "max-w-4xl text-center text-[1.55rem] font-medium leading-relaxed text-foreground transition-all duration-300 ease-out md:text-4xl md:leading-[1.25]",
                        isAnimating ? "scale-[0.98] opacity-0 blur-sm" : "scale-100 opacity-100 blur-0",
                    )}
                >
                    {displayedQuote}
                </p>

                <span className="pointer-events-none absolute -bottom-10 -right-3 select-none font-serif text-8xl text-foreground/[0.06] md:text-9xl">
                    "
                </span>
            </div>

            <div className="mt-4 flex flex-col items-center gap-7">
                <p
                    className={cn(
                        "text-sm uppercase tracking-[0.16em] text-muted-foreground transition-all duration-500 ease-out md:text-base",
                        isAnimating ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100",
                    )}
                >
                    {testimonials[activeIndex].author}, {displayedRole}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    {testimonials.map((testimonial, index) => {
                        const isActive = activeIndex === index;
                        const isHovered = hoveredIndex === index && !isActive;
                        const showName = isActive || isHovered;

                        return (
                            <button
                                key={testimonial.id}
                                onClick={() => handleSelect(index)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={cn(
                                    "relative flex cursor-pointer items-center gap-0 rounded-full",
                                    "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                    isActive ? "bg-foreground shadow-lg" : "bg-transparent hover:bg-muted/80",
                                    showName ? "py-2.5 pl-2.5 pr-5" : "p-1",
                                )}
                            >
                                <div className="relative shrink-0">
                                    <img
                                        src={testimonial.avatar || "/placeholder.svg"}
                                        alt={testimonial.author}
                                        className={cn(
                                            "h-10 w-10 rounded-full object-cover md:h-11 md:w-11",
                                            "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                            isActive ? "ring-2 ring-background/30" : "ring-0",
                                            !isActive && "hover:scale-105",
                                        )}
                                    />
                                </div>

                                <div
                                    className={cn(
                                        "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                        showName ? "ml-2 grid-cols-[1fr] opacity-100" : "ml-0 grid-cols-[0fr] opacity-0",
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        <span
                                            className={cn(
                                                "block whitespace-nowrap text-base font-semibold transition-colors duration-300 md:text-lg",
                                                isActive ? "text-background" : "text-foreground",
                                            )}
                                        >
                                            {testimonial.author}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
