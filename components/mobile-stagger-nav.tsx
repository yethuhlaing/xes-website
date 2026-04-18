"use client";

import StaggeredMenu, {
    type StaggeredMenuItem,
    type StaggeredMenuSocialItem,
} from "@/components/staggered-menu";

const menuItems: StaggeredMenuItem[] = [
    {
        label: "Signal",
        ariaLabel: "Go to Signal section",
        link: "#signal",
    },
    {
        label: "Velocity",
        ariaLabel: "Go to Velocity section",
        link: "#velocity",
    },
    {
        label: "Voices",
        ariaLabel: "Go to Voices section",
        link: "#voices",
    },
    {
        label: "Contact",
        ariaLabel: "Go to Contact section",
        link: "#contact",
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
                logoUrl="/xes-logo.svg"
                accentColor="var(--accent)"
                closeOnClickAway
            />
        </div>
    );
}
