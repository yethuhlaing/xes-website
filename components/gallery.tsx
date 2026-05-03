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

/** Local gallery assets in `public/images/` (extensions match files on disk). */
const GALLERY_IMAGES = [
    "/images/1.JPG",
    "/images/2.jpg",
    "/images/3.JPG",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
] as const;

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
                backgroundImage: `url(${GALLERY_IMAGES[0]})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
};

const ParallaxImages = () => {
    const [, ...parallaxSrcs] = GALLERY_IMAGES;
    const parallaxItems: ParallaxImgProps[] = [
        {
            src: parallaxSrcs[0],
            alt: "Gallery image 2",
            start: -200,
            end: 200,
            className: "w-1/3",
        },
        {
            src: parallaxSrcs[1],
            alt: "Gallery image 3",
            start: 200,
            end: -250,
            className: "mx-auto w-2/3",
        },
        {
            src: parallaxSrcs[2],
            alt: "Gallery image 4",
            start: -200,
            end: 200,
            className: "ml-auto w-1/3",
        },
        {
            src: parallaxSrcs[3],
            alt: "Gallery image 5",
            start: 0,
            end: -500,
            className: "ml-24 w-5/12",
        },
        {
            src: parallaxSrcs[4],
            alt: "Gallery image 6",
            start: -150,
            end: 150,
            className: "mr-auto w-2/5",
        },
    ];

    return (
        <div className="mx-auto max-w-5xl px-4 pt-[200px]">
            {parallaxItems.map((item) => (
                <ParallaxImg key={item.src} {...item} />
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
