"use client";

import StaggeredMenu, {
    type StaggeredMenuItem,
    type StaggeredMenuSocialItem,
} from "@/components/navbar/staggered-menu";

const menuItems: StaggeredMenuItem[] = [
    {
        label: "About",
        ariaLabel: "Go to About page",
        link: "/about",
    },
    {
        label: "Event",
        ariaLabel: "Go to Event page",
        link: "/event",
    },
    {
        label: "Volunteer",
        ariaLabel: "Go to Volunteer page",
        link: "/volunteer",
    },
    {
        label: "Contact",
        ariaLabel: "Go to Contact page",
        link: "/contact",
    },
];

const socialItems: StaggeredMenuSocialItem[] = [];

export function MobileStaggerNav() {
    return (
        <div className="md:hidden">
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={false}
                displayItemNumbering
                isFixed
                className="xes-stagger-menu"
                menuButtonColor="#fafafa"
                openMenuButtonColor="#fafafa"
                changeMenuColorOnOpen={false}
                colors={["#27272a", "#3f3f46", "#18181b"]}
                logoUrl="/logo.png"
                accentColor="var(--accent)"
                closeOnClickAway
            />
        </div>
    );
}
