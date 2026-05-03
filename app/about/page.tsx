import type { Metadata } from "next";

import { VolunteerTestimonials } from "@/components/volunteer-tesimonials";
import WhatWeDo from "@/components/what-we-do";
import WhoAreWe from "@/components/who-are-we";

export const metadata: Metadata = {
    title: "About — XES",
    description:
        "Learn about XES: what you get as a member and voices from the community.",
};

export default function AboutPage() {
    return (
        <>
            <WhoAreWe />
            <WhatWeDo />
            
        </>
    );
}
