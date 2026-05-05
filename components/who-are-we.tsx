import TextBlockAnimation from "@/components/text-block-animation";

export default function WhoAreWe() {
  return (
    <div className="min-h-screen w-full text-zinc-50 flex flex-col">
      <div className="flex-1 flex flex-col">
        {/* md: subtract sticky header (h-16) so hero + navbar = one viewport and content stays visually centered */}
        <section className="flex min-h-[100dvh] flex-col items-center justify-center px-6 md:min-h-[calc(100dvh-4rem)]">
        <TextBlockAnimation
              blockColor="#6366f1"
              animateOnScroll={false}
              delay={0.2}
              duration={0.8}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight">
                We&apos;re XES Helsinki.<br />
                <span className="inline-block bg-black text-white dark:bg-white dark:text-black px-3 pb-1 rounded-md mt-2">
                  Ideas into reality.
                </span>
              </h1>
            </TextBlockAnimation>
        </section>

        <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 py-24 bg-primary">
          <div className="max-w-3xl w-full space-y-16">
            <TextBlockAnimation blockColor="#10b981" duration={0.7}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Who we are
              </h2>
            </TextBlockAnimation>

            <TextBlockAnimation blockColor="#f59e0b" stagger={0.03}>
              <p className="text-lg md:text-2xl leading-relaxed text-foreground">
                <strong>XES Helsinki</strong> is Haaga-Helia&apos;s entrepreneurship society — a community of
                founders, dreamers, and doers who believe the best way to learn entrepreneurship is by doing it.
                Whether you&apos;re on your first startup, looking for a co-founder, or just curious about the
                journey, XES is your launchpad. We bring students from every background together to collaborate,
                learn from each other, and build the skills that turn side projects into real ventures.
              </p>
            </TextBlockAnimation>

            <div className="pl-6 border-l-2 border-indigo-500 dark:border-indigo-400">
              <TextBlockAnimation blockColor="#ffffff" duration={0.6}>
                <p className="text-base md:text-lg italic text-foreground">
                  &quot;The best way to learn entrepreneurship is by doing it.&quot;
                </p>
              </TextBlockAnimation>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
