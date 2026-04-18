"use client";

import { useEffect, useMemo, useRef, type ReactNode, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@/styles/scroll-reveal.css";

gsap.registerPlugin(ScrollTrigger);

export type ScrollRevealProps = {
    children: ReactNode;
    /** Applied to the outer `h2` for anchors and `aria-labelledby`. */
    id?: string;
    scrollContainerRef?: RefObject<HTMLElement | null>;
    enableBlur?: boolean;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    /** Vertical offset (px) words start at; animates to 0 for a clearer slide-in. */
    wordOffsetY?: number;
    /** Scrub stagger between words; higher = more scroll between each word resolving. */
    wordStagger?: number;
    containerClassName?: string;
    textClassName?: string;
    rotationEnd?: string;
    wordAnimationEnd?: string;
    /**
     * Pin this block until the scrubbed timeline finishes (stack-style section),
     * then release and let the page scroll normally. Uses one timeline + ScrollTrigger `pin`.
     */
    pin?: boolean;
    /**
     * ScrollTrigger `start` when `pin` is true.
     * Avoid `"top top"` if the headline should sit lower while pinned (e.g. under a sticky header).
     */
    pinStart?: string;
    /**
     * ScrollTrigger `end` when `pin` is true (e.g. `"+=2400"`).
     * If omitted, length scales with viewport height and word count.
     */
    pinScrollEnd?: string;
    /** Scrub smoothing when `pin` is true. */
    pinScrub?: number | boolean;
};

export function ScrollReveal({
    children,
    id,
    scrollContainerRef,
    enableBlur = true,
    baseOpacity = 0.1,
    baseRotation = 3,
    blurStrength = 4,
    wordOffsetY = 48,
    wordStagger = 0.12,
    containerClassName = "",
    textClassName = "",
    rotationEnd = "bottom bottom",
    wordAnimationEnd = "bottom bottom",
    pin = false,
    pinStart = "top top+=112",
    pinScrollEnd,
    pinScrub = 0.55,
}: ScrollRevealProps) {
    const pinRootRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLHeadingElement>(null);

    const splitText = useMemo(() => {
        const text = typeof children === "string" ? children : "";
        return text.split(/(\s+)/).map((word, index) => {
            if (word.match(/^\s+$/)) return word;
            return (
                <span className="word" key={index}>
                    {word}
                </span>
            );
        });
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller =
            scrollContainerRef?.current != null ? scrollContainerRef.current : window;

        const pinRoot = pin ? pinRootRef.current : null;
        if (pin && !pinRoot) return;

        const ctx = gsap.context(() => {
            if (pin && pinRoot) {
                const wordElements = el.querySelectorAll<HTMLElement>(".word");
                const n = wordElements.length;

                const scrollerHeight =
                    scroller === window
                        ? window.innerHeight
                        : scroller instanceof HTMLElement
                          ? scroller.clientHeight
                          : window.innerHeight;

                const endStr =
                    pinScrollEnd ??
                    (() => {
                        const baseMult = 2.1;
                        const perWord = Math.min(1.35, n * 0.042);
                        return `+=${Math.round(scrollerHeight * (baseMult + perWord))}`;
                    })();

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: pinRoot,
                        scroller,
                        start: pinStart,
                        end: endStr,
                        pin: true,
                        pinSpacing: true,
                        scrub: pinScrub,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                tl.fromTo(
                    el,
                    { transformOrigin: "0% 50%", rotate: baseRotation },
                    { rotate: 0, ease: "none", duration: 0.36 },
                    0,
                );

                if (n > 0) {
                    const staggerEach = Math.max(0.026, Math.min(0.095, wordStagger * 0.36));
                    tl.fromTo(
                        wordElements,
                        {
                            opacity: baseOpacity,
                            y: wordOffsetY,
                            ...(enableBlur ? { filter: `blur(${blurStrength}px)` } : {}),
                        },
                        {
                            opacity: 1,
                            y: 0,
                            ease: "none",
                            duration: 0.54,
                            stagger: { each: staggerEach, ease: "none" },
                            ...(enableBlur ? { filter: "blur(0px)" } : {}),
                        },
                        0.02,
                    );
                }

                return;
            }

            gsap.fromTo(
                el,
                { transformOrigin: "0% 50%", rotate: baseRotation },
                {
                    ease: "none",
                    rotate: 0,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: "top bottom",
                        end: rotationEnd,
                        scrub: true,
                    },
                },
            );

            const wordElements = el.querySelectorAll<HTMLElement>(".word");
            if (wordElements.length === 0) return;

            gsap.fromTo(
                wordElements,
                {
                    opacity: baseOpacity,
                    y: wordOffsetY,
                    willChange: "opacity, transform",
                },
                {
                    ease: "none",
                    opacity: 1,
                    y: 0,
                    stagger: wordStagger,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: "top bottom-=20%",
                        end: wordAnimationEnd,
                        scrub: true,
                    },
                },
            );

            if (enableBlur) {
                gsap.fromTo(
                    wordElements,
                    { filter: `blur(${blurStrength}px)` },
                    {
                        ease: "none",
                        filter: "blur(0px)",
                        stagger: wordStagger,
                        scrollTrigger: {
                            trigger: el,
                            scroller,
                            start: "top bottom-=20%",
                            end: wordAnimationEnd,
                            scrub: true,
                        },
                    },
                );
            }
        }, pin && pinRoot ? pinRoot : el);

        return () => {
            ctx.revert();
        };
    }, [
        scrollContainerRef,
        enableBlur,
        baseRotation,
        baseOpacity,
        rotationEnd,
        wordAnimationEnd,
        blurStrength,
        wordOffsetY,
        wordStagger,
        children,
        pin,
        pinStart,
        pinScrollEnd,
        pinScrub,
    ]);

    const heading = (
        <h2
            ref={containerRef}
            id={id}
            className={`scroll-reveal ${containerClassName}`.trim()}
        >
            <span className={`scroll-reveal-text ${textClassName}`.trim()}>{splitText}</span>
        </h2>
    );

    if (pin) {
        return <div className="scroll-reveal-pin-root" ref={pinRootRef}>{heading}</div>;
    }

    return heading;
}
