import { CrowdCanvas } from "@/components/crowd-canvas";
import { ContactOpenButton } from "@/components/contact-open-button";

export default function ContactPage() {
    return (
        <div className="flex h-full min-h-0 w-full flex-1 flex-col bg-white text-neutral-900">
            <header className="relative z-10 shrink-0 px-4 pb-3 pt-6 text-center md:px-8 md:pt-8">
                <h1 className="mt-2 text-3xl font-bold uppercase tracking-tighter md:text-5xl">
                    Contact
                </h1>
                <p className="mx-auto mt-3 max-w-lg text-sm text-neutral-600 md:text-base">
                    Partnerships, bookings, or questions?{" "}
                    <a
                        href="mailto:hello@xeshelsinki.com"
                        className="font-semibold text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-900"
                    >
                        hello@xeshelsinki.com
                    </a>
                </p>
                <div className="mt-6 flex justify-center">
                    <ContactOpenButton className="inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-900 px-8 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white" />
                </div>
            </header>

            <div className="relative min-h-0 w-full flex-1">
                <CrowdCanvas src="/crowded.png" rows={15} cols={7} />
            </div>
        </div>
    );
}
