"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/cn";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;

  --pill-bg-1: color-mix(in oklch, var(--foreground) 3%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--foreground) 1%, transparent);
  --pill-shadow: color-mix(in oklch, var(--background) 50%, transparent);
  --pill-highlight: color-mix(in oklch, var(--foreground) 10%, transparent);
  --pill-inset-shadow: color-mix(in oklch, var(--background) 80%, transparent);
  --pill-border: color-mix(in oklch, var(--foreground) 8%, transparent);

  --pill-bg-1-hover: color-mix(in oklch, var(--foreground) 8%, transparent);
  --pill-bg-2-hover: color-mix(in oklch, var(--foreground) 2%, transparent);
  --pill-border-hover: color-mix(in oklch, var(--foreground) 20%, transparent);
  --pill-shadow-hover: color-mix(in oklch, var(--background) 70%, transparent);
  --pill-highlight-hover: color-mix(in oklch, var(--foreground) 20%, transparent);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px color-mix(in oklch, var(--destructive) 50%, transparent)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px color-mix(in oklch, var(--destructive) 80%, transparent)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 40s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

.footer-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    color-mix(in oklch, var(--primary) 15%, transparent) 0%,
    color-mix(in oklch, var(--secondary) 15%, transparent) 40%,
    transparent 70%
  );
}

.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow:
      0 10px 30px -10px var(--pill-shadow),
      inset 0 1px 1px var(--pill-highlight),
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow:
      0 20px 40px -10px var(--pill-shadow-hover),
      inset 0 1px 1px var(--pill-highlight-hover);
  color: var(--foreground);
}

.footer-giant-bg-text {
  font-size: 26vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in oklch, var(--foreground) 5%, transparent);
  background: linear-gradient(180deg, color-mix(in oklch, var(--foreground) 10%, transparent) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

.footer-text-glow {
  background: linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklch, var(--foreground) 40%, transparent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px color-mix(in oklch, var(--foreground) 15%, transparent));
}
`;

export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        as?: React.ElementType;
    };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
    ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
        const localRef = useRef<HTMLElement>(null);

        useEffect(() => {
            if (typeof window === "undefined") return;
            const element = localRef.current;
            if (!element) return;

            const ctx = gsap.context(() => {
                const handleMouseMove = (e: MouseEvent) => {
                    const rect = element.getBoundingClientRect();
                    const h = rect.width / 2;
                    const w = rect.height / 2;
                    const x = e.clientX - rect.left - h;
                    const y = e.clientY - rect.top - w;

                    gsap.to(element, {
                        x: x * 0.4,
                        y: y * 0.4,
                        rotationX: -y * 0.15,
                        rotationY: x * 0.15,
                        scale: 1.05,
                        ease: "power2.out",
                        duration: 0.4,
                    });
                };

                const handleMouseLeave = () => {
                    gsap.to(element, {
                        x: 0,
                        y: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        ease: "elastic.out(1, 0.3)",
                        duration: 1.2,
                    });
                };

                element.addEventListener("mousemove", handleMouseMove as EventListener);
                element.addEventListener("mouseleave", handleMouseLeave);

                return () => {
                    element.removeEventListener("mousemove", handleMouseMove as EventListener);
                    element.removeEventListener("mouseleave", handleMouseLeave);
                };
            }, element);

            return () => ctx.revert();
        }, []);

        return (
            <Component
                ref={(node: HTMLElement | null) => {
                    (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
                    if (typeof forwardedRef === "function") forwardedRef(node);
                    else if (forwardedRef)
                        (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
                }}
                className={cn("cursor-pointer", className)}
                {...props}
            >
                {children}
            </Component>
        );
    },
);
MagneticButton.displayName = "MagneticButton";

const MarqueeItem = () => (
    <div className="flex items-center space-x-12 px-6">
        <span>Haaga-Helia</span> <span className="text-primary/60">✦</span>
        <span>Student founders</span> <span className="text-secondary/60">✦</span>
        <span>Co-founders & crews</span> <span className="text-primary/60">✦</span>
        <span>First customers</span> <span className="text-secondary/60">✦</span>
        <span>Ideas meet momentum</span> <span className="text-primary/60">✦</span>
    </div>
);

const FOOTER_NAV = [
    { href: "/about", label: "About" },
    { href: "/event", label: "Event" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/contact", label: "Contact" },
] as const;

export function CtaBand() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const giantTextRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (!wrapperRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                giantTextRef.current,
                { y: "10vh", scale: 0.8, opacity: 0 },
                {
                    y: "0vh",
                    scale: 1,
                    opacity: 1,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top 80%",
                        end: "bottom bottom",
                        scrub: 1,
                    },
                },
            );

            gsap.fromTo(
                [headingRef.current, linksRef.current],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top 40%",
                        end: "bottom bottom",
                        scrub: 1,
                    },
                },
            );
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const mapsUrl =
        "https://www.google.com/maps/search/?api=1&query=Ratapihantie+13,+00520+Helsinki,+Finland";

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: STYLES }} />

            <div
                ref={wrapperRef}
                className="relative h-screen w-full"
                style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
                <footer
                    id="contact"
                    aria-labelledby="cta-heading"
                    className="cinematic-footer-wrapper fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-background text-foreground"
                >
                    <div className="footer-aurora pointer-events-none absolute left-1/2 top-1/2 z-0 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px]" />
                    <div className="footer-bg-grid pointer-events-none absolute inset-0 z-0" />

                    <div
                        ref={giantTextRef}
                        className="footer-giant-bg-text pointer-events-none absolute -bottom-[5vh] left-1/2 z-[1] -translate-x-1/2 select-none whitespace-nowrap"
                    >
                        XES
                    </div>

                    <div className="absolute left-0 top-18 z-10 w-full -rotate-3 scale-110 overflow-hidden border-y border-border/50 bg-background/60 py-4 shadow-2xl backdrop-blur-md">
                        <div className="flex w-max animate-footer-scroll-marquee text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground md:text-sm">
                            <MarqueeItem />
                            <MarqueeItem />
                        </div>
                    </div>

                    <div className="relative z-10 mx-auto mt-20 flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6">
                        <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground md:text-sm">
                            XES Helsinki
                        </p>
                        <h2
                            id="cta-heading"
                            ref={headingRef}
                            className="footer-text-glow mb-6 text-center text-5xl font-black tracking-tighter md:text-8xl"
                        >
                            Build with us
                        </h2>
                        <p className="mb-12 max-w-2xl text-center text-base font-medium leading-tight tracking-tight text-muted-foreground md:text-lg">
                            Haaga-Helia&apos;s entrepreneurship society for students who want to start something real.
                            Whether you are hunting a co-founder, your first customers, or a crew to learn with, this
                            is where ideas meet momentum.
                        </p>
                    </div>

                    <div className="relative z-10 w-full px-6 pb-8 md:px-12">
                        <div className="flex w-full flex-col gap-10 pt-8 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:pt-10">
                            <div className="text-left sm:max-w-[min(100%,20rem)]">
                                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                    Support
                                </h3>
                                <ul className="flex flex-col gap-3 text-sm font-medium text-foreground/90">
                                    <li>
                                        <Link
                                            href="/association-rules/en"
                                            className="transition-colors hover:text-primary"
                                        >
                                            Association rules (ENG)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/association-rules/fi"
                                            className="transition-colors hover:text-primary"
                                        >
                                            Association rules (FIN)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/privacy-policy"
                                            className="transition-colors hover:text-primary"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-left sm:max-w-[min(100%,20rem)] sm:text-right">
                                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                    Contact info
                                </h3>
                                <address className="not-italic">
                                    <ul className="flex flex-col gap-3 text-sm font-medium text-foreground/90">
                                        <li>
                                            <a
                                                href="mailto:hello@xeshelsinki.com"
                                                className="transition-colors hover:text-primary"
                                            >
                                                hello@xeshelsinki.com
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href={mapsUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="transition-colors hover:text-primary"
                                            >
                                                Ratapihantie 13
                                                <br />
                                                00520, Helsinki
                                                <br />
                                                Finland
                                            </a>
                                        </li>
                                    </ul>
                                </address>
                            </div>
                        </div>

                        <div className="mt-10 flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
                            <p className="order-2 text-center text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:order-1 sm:text-left sm:text-xs">
                                © XES Helsinki 2024
                            </p>

                            <MagneticButton
                                as="button"
                                type="button"
                                onClick={scrollToTop}
                                aria-label="Back to top"
                                className="footer-glass-pill group order-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:text-foreground sm:order-2"
                            >
                                <svg
                                    className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-1.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                                    />
                                </svg>
                            </MagneticButton>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
