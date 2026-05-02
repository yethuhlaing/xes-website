import type { Metadata } from "next";

import { AboutTestimonialsCarousel } from "@/components/volunteer-tesimonials";
import WhatYouGet from "@/components/what-you-get";

export const metadata: Metadata = {
    title: "About — XES",
    description:
        "Learn about XES: what you get as a member and voices from the community.",
};

export default function AboutPage() {
    return (
        <>
            <WhatYouGet />
            <section
                aria-label="Community testimonials"
                className=" bg-white py-16 text-neutral-900 md:py-24"
            >
                <div className="mx-auto max-w-[95vw] px-4 md:px-8">
                    <AboutTestimonialsCarousel />
                </div>
            </section>
        </>
    );
}
