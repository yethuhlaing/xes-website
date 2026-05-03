import type { Metadata } from "next";

import { WhatsInItForYou } from "@/components/whats-in-it-for-you";
import { VolunteerHero } from "@/components/volunteer-hero";
import { VolunteerTestimonials } from "@/components/volunteer-tesimonials";

export const metadata: Metadata = {
    title: "Volunteer — XES",
    description:
        "Volunteer with XES: networking, CV growth, study credits, flexible hours, and community impact.",
};

export default function VolunteerPage() {
    return (
        <>
            <VolunteerHero />
            <WhatsInItForYou />
            <section
                aria-label="Community testimonials"
                className="bg-primary/10 py-16 md:py-24"
            >
                <div className="mx-auto max-w-[95vw] px-4 md:px-8">
                    <VolunteerTestimonials />
                </div>
            </section>
        </>
    );
}
