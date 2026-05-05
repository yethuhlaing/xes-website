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
                    className="group relative inline-flex w-60 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary px-10 py-4 text-base font-semibold uppercase tracking-widest text-primary-foreground shadow-md transition-all duration-300 ease-out hover:shadow-xl hover:shadow-primary/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:w-72 md:py-5 md:text-lg"
                  >
                    <span className="relative flex h-[1.4em] w-full items-center justify-center overflow-hidden">
                      <span className="flex items-center gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                        Join XES
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </span>
                      <span className="absolute inset-0 flex translate-y-full items-center justify-center gap-2 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                        Join XES
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </span>
                    </span>
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
