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
import { VolunteerForm } from "./volunteer-form";


type VolunteerApplicationContextValue = {
    open: () => void;
    close: () => void;
    isOpen: boolean;
};

const VolunteerApplicationContext =
    createContext<VolunteerApplicationContextValue | null>(null);

export function useVolunteerApplication() {
    const ctx = useContext(VolunteerApplicationContext);
    if (!ctx) {
        throw new Error(
            "useVolunteerApplication must be used within VolunteerApplicationProvider",
        );
    }
    return ctx;
}

export function VolunteerApplicationProvider({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);

    const openModal = useCallback(() => setOpen(true), []);
    const closeModal = useCallback(() => setOpen(false), []);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const value = useMemo<VolunteerApplicationContextValue>(
        () => ({
            open: openModal,
            close: closeModal,
            isOpen: open,
        }),
        [open, openModal, closeModal],
    );

    return (
        <VolunteerApplicationContext.Provider value={value}>
            {children}

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="backdrop"
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
                        onClick={closeModal}
                    >
                        <motion.div
                            key="modal"
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
                                onClick={closeModal}
                                aria-label="Close application form"
                                className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition hover:text-white"
                            >
                                <X size={16} />
                            </button>
                            <VolunteerForm headingId="volunteer-application-heading" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </VolunteerApplicationContext.Provider>
    );
}
