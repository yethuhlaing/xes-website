"use client";

import { ReactLenis } from "lenis/react";
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
import { ArrowRight, MapPin, Rocket } from "lucide-react";
import React, { useRef } from "react";

type ParallaxImgProps = {
    className: string;
    alt: string;
    src: string;
    start: number;
    end: number;
};

type ScheduleItemProps = {
    title: string;
    date: string;
    location: string;
};

const SECTION_HEIGHT = 1400;

export default function Gallery() {
    return (
        <ReactLenis root>
            <div className="bg-background">
                <Hero />
                <Schedule />
            </div>
        </ReactLenis>
    );
};

const Hero = () => {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <div
            ref={ref}
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
            className="relative w-full overflow-hidden"
        >
            <CenterImage containerRef={ref} />
            <ParallaxImages />
            <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
        </div>
    );
};

const CenterImage = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) => {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const clip1 = useTransform(scrollYProgress, [0, 0.5], [25, 0]);
    const clip2 = useTransform(scrollYProgress, [0, 0.5], [75, 100]);
    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

    const backgroundSize = useTransform(scrollYProgress, [0, 1], ["170%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

    return (
        <motion.div
            className="sticky top-0 h-screen w-full"
            style={{
                clipPath,
                backgroundSize,
                opacity,
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
};

const ParallaxImages = () => {
    return (
        <div className="mx-auto max-w-5xl px-4 pt-[200px]">
            <ParallaxImg
                src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop"
                alt="A space launch"
                start={-200}
                end={200}
                className="w-1/3"
            />
            <ParallaxImg
                src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop"
                alt="A spacecraft over Earth"
                start={200}
                end={-250}
                className="mx-auto w-2/3"
            />
            <ParallaxImg
                src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop"
                alt="Orbiting satellite"
                start={-200}
                end={200}
                className="ml-auto w-1/3"
            />
            <ParallaxImg
                src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop"
                alt="Launch plume"
                start={0}
                end={-500}
                className="ml-24 w-5/12"
            />
        </div>
    );
};

const ParallaxImg = ({ className, alt, src, start, end }: ParallaxImgProps) => {
    const ref = useRef<HTMLImageElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.img
            src={src}
            alt={alt}
            className={className}
            ref={ref}
            style={{ transform, opacity }}
        />
    );
};

const Schedule = () => {
    return (
        <section
            id="launch-schedule"
            className="mx-auto max-w-5xl px-4 py-48 text-white"
        >
            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-20 text-4xl font-black uppercase text-zinc-50"
            >
                Launch Schedule
            </motion.h1>
            <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
            <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
            <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
            <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
            <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
            <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
            <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
        </section>
    );
};

const ScheduleItem = ({ title, date, location }: ScheduleItemProps) => {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="mb-9 flex items-center justify-between px-3 pb-9"
        >
            <div>
                <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
                <p className="text-sm uppercase text-zinc-500">{date}</p>
            </div>
            <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
                <p>{location}</p>
                <MapPin className="size-4" />
            </div>
        </motion.div>
    );
};
