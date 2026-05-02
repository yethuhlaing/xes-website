import { StatMarquee } from "@/components/stat-marquee";
import { StickyFeatures } from "@/components/sticky-features";
import { AboutSection } from "@/components/xes";
import { WhyJoinUs } from "@/components/why-join-us";
import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
    return (
        <>
            <section
                aria-label="Hero"
                className="min-h-[100dvh] md:min-h-[calc(100dvh-4rem)]"
            >
                <Hero />
            </section>
            <StatMarquee />
            <Gallery />
            <AboutSection />
            <section aria-label="Testimonials">
                <Testimonials />
            </section>
            <WhyJoinUs />
            <StickyFeatures />
        </>
    );
}
