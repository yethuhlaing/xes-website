import { CtaBand } from "@/components/cta-band";
import HeroText from "@/components/hero-text";
import { KineticHeader } from "@/components/kinetic-header";
import { ProcessGrid } from "@/components/process-grid";
import { Skiper58 } from "@/components/text-roll";
import { StatMarquee } from "@/components/stat-marquee";
import { StickyFeatures } from "@/components/sticky-features";
import { ScrollRevealSection } from "@/components/scroll-reveal-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import Hero from "@/components/hero";
import BentoGrid from "@/components/bento-grid";
import Gallery from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
    return (
        <div className="relative isolate flex min-h-full flex-col overflow-x-clip bg-background text-foreground">
            <KineticHeader />
            <main id="main" className="flex flex-1 flex-col">
                <section
                    aria-label="Hero"
                    className="min-h-[100dvh] md:min-h-[calc(100dvh-4rem)]"
                >
                    <Hero />
                    {/* <HeroText text="IMMERSE" /> */}
                </section>

                <section aria-label="Bento showcase">
                    <BentoGrid />
                </section>
                <section
                    aria-label="Quick navigation"
                    className="px-4 py-12 md:px-8 md:py-16"
                >
                    <div className="mx-auto max-w-[95vw]">
                        <Skiper58 />
                    </div>
                </section>
                <StatMarquee />
                <Gallery />
                <ScrollRevealSection />
                <section aria-label="Testimonials">
                    <Testimonials />
                </section>
                <WhyChooseUs />
                <section id="archive" className="scroll-mt-20">
                    <ProcessGrid />
                </section>
                <StickyFeatures />
                <CtaBand />
            </main>
            <footer className="py-10">
                <div className="mx-auto flex w-full max-w-[95vw] flex-col gap-4 px-4 text-sm font-medium tracking-tight text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
                    <p>© {new Date().getFullYear()} XES placeholder shell.</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground md:text-sm">
                        Kinetic typography prototype
                    </p>
                </div>
            </footer>
        </div>
    );
}
