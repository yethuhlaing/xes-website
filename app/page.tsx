import { StatMarquee } from "@/components/stat-marquee";
import { AboutSection } from "@/components/xes";
import { WhyJoinUs } from "@/components/why-join-us";

import Gallery from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { HeroSection } from "@/components/hero";


const sections = [
    {
      leftLabel: "Curious",
      title: "Spark Ideas",
      background: "/images/1.JPG",
      overlay: "rgba(0,0,0,0.12)",
    },
    {
      leftLabel: "Learn",
      title: "Ship Fast",
      background: "/images/2.jpg",
    },
    {
      leftLabel: "Peers",
      title: "Team Up",
      background: "/images/3.JPG",
    },
    {
      leftLabel: "Pitch",
      title: "Convince",
      background: "/images/4.jpg",
    },
    {
      leftLabel: "Grow",
      title: "Scale Up",
      background: "/images/5.jpg",
    },
    {
      leftLabel: "Belong",
      title: "Founders First",
      background: "/images/6.jpg",
    },
  ];

export default function Home() {
    return (
        <>
            <HeroSection
                sections={ sections }
                header={<><div>Student</div><div>Founders</div></>}
                footer={<div></div>}
                cta={
                  <a
                    href="/membership"
                    className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:px-5 md:text-sm"
                  >
                    Become a Member
                  </a>
                }
                showProgress
                scrollPxPerSection={120}
                durations={{ change: 0.3, bg: 0.16, snap: 280 }}
            />
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
