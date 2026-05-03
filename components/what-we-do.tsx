import { WhatWeDoScrollAdventure } from "@/components/what-we-do-scroll-adventure";
import TextBlockAnimation from "@/components/text-block-animation";

export default function WhatWeDo() {
    return (
        <section
            id="offerings"
            aria-labelledby="bento-heading"
            className="relative z-10 rounded-t-[3rem] px-6 pt-24 text-neutral-950 lg:rounded-t-[6rem] lg:px-20 "
        >

            <div className="mx-auto w-full max-w-[min(100%,95rem)] px-4 md:px-8 lg:px-12">
                <WhatWeDoScrollAdventure />
            </div>
        </section>
    );
}
