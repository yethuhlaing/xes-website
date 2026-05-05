"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ headingId }: { headingId?: string }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<Status>("idle");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !message.trim()) return;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus("error");
            return;
        }

        setStatus("loading");

        try {
            const res = await fetch("https://formsubmit.co/ajax/yethusteve217@gmail.com", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    _subject: "General contact — XES website",
                    _captcha: "false",
                    _template: "box",
                }),
            });

            if (res.ok) {
                setStatus("success");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    const inputClass =
        "rounded-lg px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-[#09090b]";
    const inputStyle = {
        backgroundColor: "hsl(var(--muted))",
        border: "1px solid hsl(var(--input))",
    } as const;

    return (
        <div className="mx-auto w-full max-w-[640px]">
            <div
                className="rounded-2xl p-px"
                style={{ background: "var(--gradient-primary)" }}
            >
                <div
                    className="rounded-2xl p-8 md:p-12"
                    style={{ backgroundColor: "#09090b" }}
                >
                    <h2
                        id={headingId}
                        className="mb-2 text-2xl font-bold text-white md:text-3xl"
                    >
                        Get in touch
                    </h2>
                    <p className="mb-8 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                        Partnerships, bookings, or questions—we&apos;ll get back to you.
                    </p>

                    {status === "success" ? (
                        <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-6 py-8 text-center">
                            <p className="text-lg font-semibold text-green-400">Message sent</p>
                            <p className="mt-1 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                                Thanks for reaching out. We&apos;ll reply as soon as we can.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="cf-name" className="text-sm font-medium text-white">
                                    Name
                                </label>
                                <input
                                    id="cf-name"
                                    type="text"
                                    placeholder="Your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className={inputClass}
                                    style={inputStyle}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="cf-email" className="text-sm font-medium text-white">
                                    Email
                                </label>
                                <input
                                    id="cf-email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className={inputClass}
                                    style={inputStyle}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="cf-message" className="text-sm font-medium text-white">
                                    Message
                                </label>
                                <textarea
                                    id="cf-message"
                                    placeholder="How can we help?"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows={5}
                                    className={`${inputClass} min-h-[120px] resize-y`}
                                    style={inputStyle}
                                />
                            </div>

                            {status === "error" && (
                                <p className="text-sm" style={{ color: "hsl(var(--destructive))" }}>
                                    Something went wrong. Check your details and try again.
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="mt-2 rounded-lg py-3 text-sm font-semibold text-white transition disabled:opacity-60"
                                style={{ background: "var(--gradient-primary)" }}
                            >
                                {status === "loading" ? "Sending..." : "Send message"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
