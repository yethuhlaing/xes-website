import { StatMarquee } from "@/components/stat-marquee";
import { AboutSection } from "@/components/xes";
import { WhyJoinUs } from "@/components/why-join-us";

import Gallery from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { HeroSection } from "@/components/hero";

export default function Home() {
    return (
        <>
            <HeroSection />
            <StatMarquee />
            <AboutSection />
            <Gallery />
            <section aria-label="Testimonials">
                <Testimonials />
            </section>
            <WhyJoinUs />
        </>
    );
}
