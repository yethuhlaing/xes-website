"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

const ABOUT_CHUNKS = [
    "XES Helsinki is Haaga-Helia's entrepreneurship society where ambitious students turn ideas into reality.",
    "We're a community of founders, dreamers, and doers who believe that the best way to learn entrepreneurship is by doing it.",
    "Whether you're working on your first startup, looking for a co-founder, or just curious about the entrepreneurial journey, XES is your launchpad.",
    "We bring together students from all backgrounds to collaborate, learn from each other, and build the skills that turn side projects into real ventures.",
] as const;

export function AboutSection() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="scroll-mt-20 overflow-x-clip py-24 md:py-32"
        >
            <div className="mx-auto flex w-full max-w-[95vw] flex-col gap-16 px-4 md:gap-24 md:px-8">
                <h2 id="about-heading" className="sr-only">
                    About XES Helsinki
                </h2>

                {ABOUT_CHUNKS.map((text, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                        <div
                            key={i}
                            className={
                                isLeft
                                    ? "mr-auto w-full max-w-[min(100%,36rem)] md:max-w-[min(100%,42rem)]"
                                    : "ml-auto w-full max-w-[min(100%,36rem)] text-right md:max-w-[min(100%,42rem)] text-secondary"
                            }
                        >
                            <ScrollReveal
                                as="div"
                                id={i === 0 ? "about-statement" : `about-chunk-${i + 1}`}
                                baseOpacity={0}
                                enableBlur
                                baseRotation={isLeft ? 4 : -4}
                                blurStrength={10}
                                wordOffsetY={40}
                                wordStagger={0.05}
                                rotationTransformOrigin={isLeft ? "0% 50%" : "100% 50%"}
                                rotationEnd="center center-=220"
                                wordAnimationEnd="center center"
                                containerClassName="text-balance"
                                
                            >
                                {text}
                            </ScrollReveal>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
