import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events — XES",
    description: "XES flagship experiences and community events.",
};

export default function EventPage() {
    return (
        <div className="mx-auto w-full max-w-[95vw] px-4 py-16 md:px-8 md:py-24">
            <h1 className="text-3xl font-bold uppercase tracking-tighter text-foreground md:text-5xl">
                Events
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
                Lineup and tickets will be published here. For partnerships or hosting, use{" "}
                <a
                    href="/contact"
                    className="font-medium text-foreground underline decoration-primary underline-offset-4"
                >
                    Contact
                </a>
                .
            </p>
        </div>
    );
}
