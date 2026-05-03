"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function VolunteerForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState<Status>("idle");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !phone.trim()) return;
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
                    phone,
                    _subject: "New Volunteer Registration",
                    _captcha: "false",
                    _template: "table",
                }),
            });

            if (res.ok) {
                setStatus("success");
                setName("");
                setEmail("");
                setPhone("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

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
                    <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                        Join as a Volunteer
                    </h2>
                    <p className="mb-8 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                        Fill in your details and we&apos;ll be in touch.
                    </p>

                    {status === "success" ? (
                        <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-6 py-8 text-center">
                            <p className="text-lg font-semibold text-green-400">You&apos;re in!</p>
                            <p className="mt-1 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                                We received your registration and will reach out soon.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="vf-name" className="text-sm font-medium text-white">
                                    Full Name
                                </label>
                                <input
                                    id="vf-name"
                                    type="text"
                                    placeholder="Your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="rounded-lg px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:ring-2"
                                    style={{
                                        backgroundColor: "hsl(var(--muted))",
                                        border: "1px solid hsl(var(--input))",
                                        ringColor: "hsl(var(--ring))",
                                    }}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="vf-email" className="text-sm font-medium text-white">
                                    Email
                                </label>
                                <input
                                    id="vf-email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="rounded-lg px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:ring-2"
                                    style={{
                                        backgroundColor: "hsl(var(--muted))",
                                        border: "1px solid hsl(var(--input))",
                                    }}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="vf-phone" className="text-sm font-medium text-white">
                                    Phone Number
                                </label>
                                <input
                                    id="vf-phone"
                                    type="tel"
                                    placeholder="+358 ..."
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    className="rounded-lg px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:ring-2"
                                    style={{
                                        backgroundColor: "hsl(var(--muted))",
                                        border: "1px solid hsl(var(--input))",
                                    }}
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
                                {status === "loading" ? "Sending..." : "Register Now"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
