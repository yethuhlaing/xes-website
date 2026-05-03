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
      rightLabel: "Curious",
      background: "/images/1.JPG",
      audioSrc: "/sfx/click-01.mp3",
    },
    {
      leftLabel: "Learn",
      title: "Ship Fast",
      rightLabel: "Learn",
      background: "/images/2.jpg",
      audioSrc: "/sfx/whoosh-02.mp3",
    },
    {
      leftLabel: "Peers",
      title: "Team Up",
      rightLabel: "Peers",
      background: "/images/3.JPG",
      audioSrc: "/sfx/whoosh-02.mp3",
    },
    {
      leftLabel: "Pitch",
      title: "Convince",
      rightLabel: "Pitch",
      background: "/images/4.jpg",
      audioSrc: "/sfx/whoosh-02.mp3",
    },
    {
      leftLabel: "Grow",
      title: "Scale Up",
      rightLabel: "Grow",
      background: "/images/5.jpg",
      audioSrc: "/sfx/whoosh-02.mp3",
    },
    {
      leftLabel: "Belong",
      title: "Founders First",
      rightLabel: "Belong",
      background: "/images/6.jpg",
      audioSrc: "/sfx/whoosh-02.mp3",
    },
  ];

export default function Home() {
    return (
        <>
            <HeroSection
                sections={ sections }
                header={<><div>Student</div><div>Founders</div></>}
                footer={<div></div>}
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
