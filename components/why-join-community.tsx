import type { ReactNode } from "react";

const reasons: {
    n: string;
    body: ReactNode;
}[] = [
    {
        n: "1.",
        body: (
            <>
                Join our <strong>community</strong> events,
                excursions, trips and parties. Let us{" "}
                <strong>guide</strong> you to dive into the
                startup ecosystem!
            </>
        ),
    },
    {
        n: "2.",
        body: (
            <>
                Get to know like-minded people, professionals and business owners
                to increase your{" "}
                <strong>professional network</strong>.
            </>
        ),
    },
    {
        n: "3.",
        body: (
            <>
                Practice your <strong>pitching skills</strong>{" "}
                in relaxing atmosphere, become confident in{" "}
                <strong>public speaking</strong>, and get{" "}
                <strong>feedback</strong> on your business
                ideas.
            </>
        ),
    },
    {
        n: "4.",
        body: (
            <>
                Complete your <strong>internship</strong> or{" "}
                <strong>research</strong> with XES, and much
                more!
            </>
        ),
    },
];

export function WhyJoinCommunity() {
    return (
        <section
            id="why-join"
            aria-labelledby="why-join-heading"
            className="relative scroll-mt-20 overflow-hidden py-20 text-white md:py-28"
        >
            <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_100%_100%,rgba(192,38,211,0.28)_0%,rgba(124,58,237,0.12)_42%,transparent_68%)]"
                aria-hidden
            />
            <div className="relative mx-auto w-full max-w-[95vw] px-4 md:px-8">
                <h2
                    id="why-join-heading"
                    className="mb-16 text-center text-2xl font-bold uppercase tracking-tight md:mb-20 md:text-3xl lg:text-4xl"
                >
                    Why join our community?
                </h2>

                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-14">
                    {reasons.map((item) => (
                        <div
                            key={item.n}
                            className="flex flex-col items-center text-center"
                        >
                            <p className="mb-5 text-xl font-bold md:text-2xl">
                                {item.n}
                            </p>
                            <p className="max-w-sm text-base font-normal leading-relaxed text-white/95 md:text-lg">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
