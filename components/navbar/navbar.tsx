import Image from "next/image";

import { MobileStaggerNav } from "@/components/navbar/navbar-mobile";
import { VolunteerModal } from "@/components/volunteer-modal";

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
                        href="/"
                        aria-label="XES"
                        className="relative flex h-10 w-10 shrink-0 items-center justify-center md:h-11 md:w-11"
                    >
                        <Image
                            src="/logo.png"
                            alt=""
                            width={144}
                            height={144}
                            className="object-contain"
                            priority
                        />
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
                    <VolunteerModal />
                </div>
            </header>
            <MobileStaggerNav />
        </>
    );
}
