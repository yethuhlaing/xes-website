"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { VolunteerForm } from "@/components/volunteer-form";

export function VolunteerModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="text-xs font-bold uppercase tracking-tight text-foreground underline decoration-accent decoration-2 underline-offset-4 md:text-sm"
            >
                Join Us
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
                        style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0, scale: 0.95, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 16 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="relative w-full max-w-[640px]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setOpen(false)}
                                aria-label="Close"
                                className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition hover:text-white"
                            >
                                <X size={16} />
                            </button>
                            <VolunteerForm />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
