import { ScrollReveal } from "@/components/scroll-reveal";

const MANIFESTO =
    "Motion is memory. We build interfaces that move with intent—sharp typography, deliberate rhythm, and zero filler—so your brand lands the first time and stays there.";

export function ScrollRevealSection() {
    return (
        <section
            id="manifesto"
            className="scroll-mt-20 overflow-x-clip py-24 md:py-32"
        >
            <div className="mx-auto w-full max-w-[95vw] px-4 md:px-8">

                <ScrollReveal
                    id="manifesto-statement"
                    baseOpacity={0}
                    enableBlur
                    baseRotation={4}
                    blurStrength={10}
                    wordOffsetY={40}
                    wordStagger={0.05}
                    wordAnimationEnd="center center"
                    containerClassName="max-w-5xl text-balance"
                    textClassName="text-foreground"
                >
                    {MANIFESTO}
                </ScrollReveal>
            </div>
        </section>
    );
}
