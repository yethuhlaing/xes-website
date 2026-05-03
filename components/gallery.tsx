"use client";

import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
import { MapPin } from "lucide-react";
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

/** Scroll budget (px) consumed while the center image grows — no other content visible. */
const GROW_SCROLL = 1300;
/** Scroll budget (px) for the parallax image phase. */
const SECTION_HEIGHT = 2600;

/** Local gallery assets in `public/images/` (extensions match files on disk). */
const GALLERY_IMAGES = [
    "/images/1.JPG",
    "/images/2.jpg",
    "/images/3.JPG",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
] as const;

/** Images after the hero; cycled when we show more parallax slots than unique files. */
const PARALLAX_POOL = GALLERY_IMAGES.slice(1);

export default function Gallery() {
    return (
        <div className="bg-background">
            <GrowPhase />
            <ParallaxPhase />
            <Schedule />
        </div>
    );
}

// Phase 1: center image pinned, grows from small box to full screen.
// No other content visible — only scroll budget being consumed here.
const GrowPhase = () => {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <div
            ref={ref}
            style={{ height: `calc(${GROW_SCROLL}px + 100vh)` }}
            className="relative w-full"
        >
            <CenterImage containerRef={ref} />
        </div>
    );
};

// Phase 2: parallax images scroll normally after center image is gone.
const ParallaxPhase = () => {
    return (
        <div
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
            className="relative w-full overflow-hidden"
        >
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

    // 0 → 0.8: small centered box expands to full screen
    const clip1 = useTransform(scrollYProgress, [0, 0.8], [25, 0]);
    const clip2 = useTransform(scrollYProgress, [0, 0.8], [75, 100]);
    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

    const backgroundSize = useTransform(scrollYProgress, [0, 0.8], ["170%", "100%"]);
    // 0.8 → 1: fade out as user approaches end of grow phase
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

    return (
        <motion.div
            className="sticky top-0 h-screen w-full"
            style={{
                clipPath,
                backgroundSize,
                opacity,
                backgroundImage: `url(${GALLERY_IMAGES[0]})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
};

const PARALLAX_LAYOUT: Omit<ParallaxImgProps, "src" | "alt">[] = [
    { start: -200, end: 200, className: "mb-20 w-1/3" },
    { start: 200, end: -250, className: "mx-auto mb-20 w-2/3" },
    { start: -200, end: 200, className: "mb-20 ml-auto w-1/3" },
    { start: 0, end: -500, className: "mb-24 ml-24 w-5/12" },
    { start: -150, end: 150, className: "mb-20 mr-auto w-2/5" },
    { start: 180, end: -180, className: "mb-20 w-1/2" },
    { start: -120, end: 220, className: "mb-20 ml-8 w-1/3" },
    { start: 100, end: -320, className: "mb-24 mr-12 w-3/5" },
    { start: -220, end: 100, className: "mb-20 mx-auto w-2/3" },
    { start: 160, end: -160, className: "mb-16 ml-auto w-2/5" },
];

const ParallaxImages = () => {
    const parallaxItems: ParallaxImgProps[] = PARALLAX_LAYOUT.map((layout, i) => ({
        ...layout,
        src: PARALLAX_POOL[i % PARALLAX_POOL.length]!,
        alt: `Gallery photo ${i + 2}`,
    }));

    return (
        <div className="mx-auto max-w-5xl px-4 pt-[200px]">
            {parallaxItems.map((item, index) => (
                <ParallaxImg key={`${item.src}-${index}`} {...item} />
            ))}
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
