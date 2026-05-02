"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/cn";

const defaultImages: { src: string; alt: string; code: string }[] = [
    {
        src: "/images/x.com/13.jpeg",
        alt: "Illustrations by my fav AarzooAly",
        code: "# 23",
    },
    {
        src: "/images/x.com/32.jpeg",
        alt: "Illustrations by my fav AarzooAly",
        code: "# 23",
    },
    {
        src: "/images/x.com/20.jpeg",
        alt: "Illustrations by my fav AarzooAly",
        code: "# 23",
    },
    {
        src: "/images/x.com/21.jpeg",
        alt: "Illustrations by my fav AarzooAly",
        code: "# 23",
    },
    {
        src: "/images/x.com/19.jpeg",
        alt: "Illustrations by my fav AarzooAly",
        code: "# 23",
    },
    {
        src: "/images/x.com/1.jpeg",
        alt: "Illustrations by my fav AarzooAly",
        code: "# 23",
    },
    {
        src: "/images/x.com/2.jpeg",
        alt: "Illustrations by my fav AarzooAly",
        code: "# 23",
    },
    {
        src: "/images/x.com/3.jpeg",
        alt: "Illustrations by my fav AarzooAly",
        code: "# 23",
    },
    {
        src: "/images/x.com/4.jpeg",
        alt: "Illustrations by my fav AarzooAly",
        code: "# 23",
    },
];

export function Skiper52({
    images = defaultImages,
    className,
}: {
    images?: { src: string; alt: string; code: string }[];
    className?: string;
}) {
    return (
        <div
            className={cn(
                "flex h-full min-h-[28rem] w-full items-center justify-center overflow-hidden bg-[#f5f4f3]",
                className,
            )}
        >
            <HoverExpand_001 images={images} />
        </div>
    );
}

export function HoverExpand_001({
    images,
    className,
}: {
    images: { src: string; alt: string; code: string }[];
    className?: string;
}) {
    const [activeImage, setActiveImage] = useState<number | null>(1);

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                duration: 0.3,
                delay: 0.5,
            }}
            className={cn("relative w-full max-w-6xl px-5", className)}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full"
            >
                <div className="flex w-full items-center justify-center gap-1">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.src}
                            className="relative cursor-pointer overflow-hidden rounded-3xl"
                            initial={{ width: "2.5rem", height: "20rem" }}
                            animate={{
                                width: activeImage === index ? "24rem" : "5rem",
                                height:
                                    activeImage === index ? "24rem" : "24rem",
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            onClick={() => setActiveImage(index)}
                            onHoverStart={() => setActiveImage(index)}
                        >
                            <AnimatePresence>
                                {activeImage === index && (
                                    <motion.div
                                        key="gradient"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute h-full w-full bg-gradient-to-t from-black/40 to-transparent"
                                    />
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {activeImage === index && (
                                    <motion.div
                                        key="caption"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute flex h-full w-full flex-col items-end justify-end p-4"
                                    >
                                        <p className="text-left text-xs text-white/50">
                                            {image.code}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 80vw, 24rem"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}