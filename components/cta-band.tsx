export function CtaBand() {
  return (
    <section
      id="contact"
      className="bg-primary py-24 text-primary-foreground md:py-32"
    >
      <div className="mx-auto flex w-full max-w-[95vw] flex-col gap-10 px-4 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/80 md:text-sm">
            Closing band
          </p>
          <h2 className="mt-4 text-5xl font-bold uppercase leading-[0.85] tracking-tighter md:text-7xl lg:text-8xl">
            Ready when your tokens are
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-tight tracking-tight text-primary-foreground/85 md:text-xl">
            Placeholder CTA: wire this block to your real funnel. Colors and type pull straight from
            globals.css so the swap stays boringly easy.
          </p>
        </div>
        <a
          href="mailto:hello@example.com"
          className="inline-flex h-14 shrink-0 items-center justify-center bg-primary-foreground px-8 text-sm font-bold uppercase tracking-tighter text-primary transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary md:h-16 md:px-10"
        >
          Ping the desk
        </a>
      </div>
    </section>
  );
}
