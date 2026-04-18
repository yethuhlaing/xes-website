const links = [
    { href: "#signal", label: "Signal" },
    { href: "#velocity", label: "Velocity" },
    { href: "#voices", label: "Voices" },
    { href: "#contact", label: "Contact" },
];

export function KineticHeader() {
    return (
        <header className="sticky top-0 z-50 border-b-2 border-border bg-background/90 backdrop-blur-sm">
            <div className="mx-auto flex h-16 max-w-[95vw] items-center justify-between px-4 md:px-8">
                <a
                    href="#main"
                    className="text-sm font-bold uppercase tracking-tighter text-foreground md:text-base"
                >
                    XES / Lab
                </a>
                <nav
                    aria-label="Primary"
                    className="hidden items-center gap-8 md:flex"
                >
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm font-bold uppercase tracking-tight text-muted-foreground transition-colors duration-200 hover:text-accent"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
                <a
                    href="#contact"
                    className="text-xs font-bold uppercase tracking-tight text-foreground underline decoration-accent decoration-2 underline-offset-4 md:text-sm"
                >
                    Book
                </a>
            </div>
        </header>
    );
}
