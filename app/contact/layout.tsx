export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-svh w-full flex-col md:h-[calc(100dvh-4rem)]">
            {children}
        </div>
    );
}
