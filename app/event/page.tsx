import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events — XES",
    description: "XES flagship experiences and community events.",
};

export default function EventPage() {
    return (
        <div className="mx-auto flex w-full max-w-[95vw] flex-col items-center px-4 py-16 md:px-8 md:py-24">
            {/* Header */}
            <div className="mb-12 flex flex-col items-center text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/60 backdrop-blur-sm">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff2d95] shadow-[0_0_6px_#ff2d95]" />
                    Live Events
                </div>
                <h1 className="bg-gradient-to-r from-[#ff2d95] via-[#c026d3] to-[#7c3aed] bg-clip-text text-4xl font-bold uppercase tracking-tighter text-transparent md:text-6xl lg:text-7xl">
                    Events
                </h1>
                <p className="mt-4 max-w-xl text-base text-white/50 md:text-lg">
                    XES flagship experiences and community events. RSVP on Luma — spots fill fast.
                </p>
            </div>

            {/* Luma embed container */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                {/* gradient border glow */}
                <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-40"
                    style={{
                        background:
                            "linear-gradient(135deg, #ff2d9520, #c026d320, #7c3aed20, transparent 60%)",
                    }}
                />
                <div
                    className="pointer-events-none absolute -inset-px rounded-2xl"
                    style={{
                        background:
                            "linear-gradient(135deg, #ff2d9540, #c026d330, #7c3aed20, transparent 50%)",
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "exclude",
                        padding: "1px",
                    }}
                />

                <iframe
                    src="https://luma.com/embed/calendar/cal-CrP5mm5zNPzAeFm/events?theme=dark"
                    className="relative z-10 w-full"
                    style={{ height: "clamp(500px, 70vh, 900px)", border: "none", filter: "invert(1) hue-rotate(180deg)" }}
                    allowFullScreen
                    aria-label="XES Events Calendar"
                    tabIndex={0}
                />
            </div>

            {/* Footer CTA */}
            <div className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <p className="text-sm text-white/40">
                    For partnerships or hosting inquiries —{" "}
                    <a
                        href="/contact"
                        className="font-medium text-white/70 underline decoration-[#ff2d95]/50 underline-offset-4 transition-colors hover:text-white hover:decoration-[#ff2d95]"
                    >
                        Contact us
                    </a>
                </p>
            </div>
        </div>
    );
}
