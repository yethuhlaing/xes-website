"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { VolunteerForm } from "@/components/volunteer-form";

type ModalKey = "volunteer" | "contact" | null;

type VolunteerModalContextValue = {
    open: () => void;
    close: () => void;
    isOpen: boolean;
};

type ContactModalContextValue = {
    open: () => void;
    close: () => void;
    isOpen: boolean;
};

const VolunteerModalContext = createContext<VolunteerModalContextValue | null>(null);
const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useVolunteerApplication() {
    const ctx = useContext(VolunteerModalContext);
    if (!ctx) {
        throw new Error("useVolunteerApplication must be used within SiteModalsProvider");
    }
    return ctx;
}

export function useContactApplication() {
    const ctx = useContext(ContactModalContext);
    if (!ctx) {
        throw new Error("useContactApplication must be used within SiteModalsProvider");
    }
    return ctx;
}

export function SiteModalsProvider({ children }: { children: ReactNode }) {
    const [active, setActive] = useState<ModalKey>(null);

    const openVolunteer = useCallback(() => setActive("volunteer"), []);
    const openContact = useCallback(() => setActive("contact"), []);
    const close = useCallback(() => setActive(null), []);

    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [active]);

    const volunteerValue = useMemo<VolunteerModalContextValue>(
        () => ({
            open: openVolunteer,
            close,
            isOpen: active === "volunteer",
        }),
        [active, openVolunteer, close],
    );

    const contactValue = useMemo<ContactModalContextValue>(
        () => ({
            open: openContact,
            close,
            isOpen: active === "contact",
        }),
        [active, openContact, close],
    );

    return (
        <VolunteerModalContext.Provider value={volunteerValue}>
            <ContactModalContext.Provider value={contactValue}>
                {children}

                <AnimatePresence>
                    {active === "volunteer" && (
                        <motion.div
                            key="volunteer-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[10050] flex items-center justify-center p-4"
                            style={{
                                backgroundColor: "rgba(0,0,0,0.75)",
                                backdropFilter: "blur(4px)",
                            }}
                            role="presentation"
                            onClick={close}
                        >
                            <motion.div
                                key="volunteer-modal"
                                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                                transition={{ duration: 0.22, ease: "easeOut" }}
                                className="relative w-full max-w-[640px]"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="volunteer-application-heading"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    type="button"
                                    onClick={close}
                                    aria-label="Close application form"
                                    className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition hover:text-white"
                                >
                                    <X size={16} />
                                </button>
                                <VolunteerForm headingId="volunteer-application-heading" />
                            </motion.div>
                        </motion.div>
                    )}

                    {active === "contact" && (
                        <motion.div
                            key="contact-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[10050] flex items-center justify-center p-4"
                            style={{
                                backgroundColor: "rgba(0,0,0,0.75)",
                                backdropFilter: "blur(4px)",
                            }}
                            role="presentation"
                            onClick={close}
                        >
                            <motion.div
                                key="contact-modal"
                                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                                transition={{ duration: 0.22, ease: "easeOut" }}
                                className="relative w-full max-w-[640px]"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="contact-application-heading"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    type="button"
                                    onClick={close}
                                    aria-label="Close contact form"
                                    className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition hover:text-white"
                                >
                                    <X size={16} />
                                </button>
                                <ContactForm headingId="contact-application-heading" />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </ContactModalContext.Provider>
        </VolunteerModalContext.Provider>
    );
}
