import type { Metadata } from "next";

import { VolunteerTestimonialsCarousel } from "@/components/volunteer-tesimonials";
import WhatWeDo from "@/components/what-we-do";

export const metadata: Metadata = {
    title: "About — XES",
    description:
        "Learn about XES: what you get as a member and voices from the community.",
};

export default function AboutPage() {
    return (
        <>
            <WhatWeDo />
            <section
                aria-label="Community testimonials"
                className=" bg-white py-16 text-neutral-900 md:py-24"
            >
                <div className="mx-auto max-w-[95vw] px-4 md:px-8">
                    <VolunteerTestimonialsCarousel />
                </div>
            </section>
        </>
    );
}
