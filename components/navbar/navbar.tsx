import { MobileStaggerNav } from "@/components/navbar/navbar-mobile";

const links = [
    { href: "/about", label: "About" },
    { href: "/event", label: "Event" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    return (
        <>
            <header className="sticky top-0 z-50 hidden bg-background/90 backdrop-blur-sm md:block">
                <div className="mx-auto flex h-16 max-w-[95vw] items-center justify-between px-4 md:px-8">
                    <a
                        href="#main"
                        className="text-sm font-bold uppercase tracking-tighter text-foreground md:text-base"
                    >
                        XES / Lab
                    </a>
                    <nav
                        aria-label="Primary"
                        className="flex items-center gap-8"
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
                        href="/contact"
                        className="text-xs font-bold uppercase tracking-tight text-foreground underline decoration-accent decoration-2 underline-offset-4 md:text-sm"
                    >
                        Book
                    </a>
                </div>
            </header>
            <MobileStaggerNav />
        </>
    );
}
