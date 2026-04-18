import { CtaBand } from "@/components/cta-band";
import { KineticHeader } from "@/components/kinetic-header";
import { KineticHero } from "@/components/kinetic-hero";
import { NoiseTexture } from "@/components/noise-texture";
import { ProcessGrid } from "@/components/process-grid";
import { Skiper58 } from "@/components/text-roll";
import { StatMarquee } from "@/components/stat-marquee";
import { StickyFeatures } from "@/components/sticky-features";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
    return (
        <div className="relative flex min-h-full flex-col bg-background text-foreground">
            <NoiseTexture />
            <a
                href="#main"
                className="absolute left-4 top-0 z-[80] -translate-y-full bg-accent px-4 py-3 text-sm font-bold uppercase tracking-tight text-accent-foreground transition-transform duration-200 focus:translate-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
                Skip to content
            </a>
            <KineticHeader />
            <main id="main" className="flex flex-1 flex-col">
                <KineticHero />
                <section
                    aria-label="Quick navigation"
                    className="border-b-2 border-border px-4 py-12 md:px-8 md:py-16"
                >
                    <div className="mx-auto max-w-[95vw]">
                        <Skiper58 />
                    </div>
                </section>
                <StatMarquee />

                <WhyChooseUs />
                <section id="archive" className="scroll-mt-20">
                    <ProcessGrid />
                </section>
                <StickyFeatures />
                <CtaBand />
            </main>
            <footer className="border-t-2 border-border py-10">
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
