export function NoiseTexture() {
    return (
        <div
            className="pointer-events-none fixed inset-0 z-[70] opacity-[0.03] mix-blend-overlay"
            aria-hidden
        >
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <title>Grain texture</title>
                <filter id="kinetic-noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="4"
                        stitchTiles="stitch"
                        result="noise"
                    />
                    <feColorMatrix type="saturate" values="0" in="noise" />
                </filter>
                <rect width="100%" height="100%" filter="url(#kinetic-noise)" />
            </svg>
        </div>
    );
}
