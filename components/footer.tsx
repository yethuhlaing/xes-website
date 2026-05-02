export function CtaBand() {
    return (
        <footer className="mt-auto flex w-full flex-col">
            <section
                id="contact"
                aria-labelledby="cta-heading"
                className="w-full bg-primary py-20 text-primary-foreground md:py-28"
            >
                <div className="mx-auto flex w-full max-w-[95vw] flex-col gap-10 px-4 md:flex-row md:items-end md:justify-between md:gap-12 md:px-8">
                    <div className="min-w-0 max-w-3xl">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/80 md:text-sm">
                            Closing band
                        </p>
                        <h2
                            id="cta-heading"
                            className="mt-4 text-5xl font-bold uppercase leading-[0.85] tracking-tighter md:text-7xl lg:text-8xl"
                        >
                            Ready when your tokens are
                        </h2>
                        <p className="mt-6 max-w-2xl text-lg font-medium leading-tight tracking-tight text-primary-foreground/85 md:text-xl">
                            Placeholder CTA: wire this block to your real funnel. Colors and type pull straight from
                            globals.css so the swap stays boringly easy.
                        </p>
                    </div>
                    <a
                        href="mailto:hello@example.com"
                        className="inline-flex h-14 w-full shrink-0 items-center justify-center bg-primary-foreground px-8 text-sm font-bold uppercase tracking-tighter text-primary transition-transform duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary md:h-16 md:w-auto md:px-10"
                    >
                        Ping the desk
                    </a>
                </div>
            </section>

            <div className="bg-background">
                <div className="mx-auto flex w-full max-w-[95vw] flex-col gap-4 px-4 py-8 text-sm font-medium tracking-tight text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
                    <p>© {new Date().getFullYear()} XES placeholder shell.</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground md:text-sm">
                        Kinetic typography prototype
                    </p>
                </div>
            </div>
        </footer>
    );
}
