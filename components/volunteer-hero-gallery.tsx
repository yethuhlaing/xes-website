"use client";

import { useSyncExternalStore } from "react";

import {
  ContainerScroll,
  ContainerSticky,
  GalleryCol,
  GalleryContainer,
} from "@/components/animated-gallery";

function subscribeMaxMd(cb: () => void) {
  const mq = window.matchMedia("(max-width: 767px)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function snapshotMaxMd() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function serverSnapshotMaxMd() {
  return false;
}

type VolunteerHeroGalleryProps = {
  images1: readonly string[];
  images2: readonly string[];
  images3: readonly string[];
};

export function VolunteerHeroGallery({
  images1,
  images2,
  images3,
}: VolunteerHeroGalleryProps) {
  const isNarrow = useSyncExternalStore(
    subscribeMaxMd,
    snapshotMaxMd,
    serverSnapshotMaxMd,
  );

  const rotateXDegrees: [number, number] = isNarrow ? [38, 0] : [75, 0];
  const scaleOutput: [number, number] = isNarrow ? [1.06, 1] : [1.2, 1];
  // Sync scale with rotateX so both finish at progress 0.5.
  // Old default [0.5, 0.9] left gallery flat but still shrinking, causing the glitch.
  const scaleScroll: [number, number] = [0, 0.5];

  return (
    <ContainerScroll className="relative h-[160vh] md:h-[350vh]">
      <ContainerSticky className="h-svh max-md:min-h-[26rem] md:min-h-[30rem]">
        {/* Fade bottom edge so columns dissolve naturally instead of hard-clipping */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-b from-transparent to-background" />
        {/* md:contents removes this wrapper from the layout tree on desktop,
            so GalleryContainer is a direct child of ContainerSticky (preserving the
            3D rendering context). On mobile it acts as a centering flex container. */}
        <div className="mx-auto flex h-full w-full max-w-[min(100%,42rem)] items-center px-2 pb-4 pt-2 md:contents">
          <GalleryContainer
            rotateXDegrees={rotateXDegrees}
            scaleOutput={scaleOutput}
            scaleScroll={scaleScroll}
            className="max-md:px-0.5"
            style={isNarrow ? { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" } : undefined}
          >
            <GalleryCol
              yRange={isNarrow ? ["-4%", "1%"] : ["-10%", "2%"]}
              className="-mt-1 gap-1.5 md:-mt-2 md:gap-2"
            >
              {images1.map((imageUrl) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={imageUrl}
                  className="aspect-[4/3] block h-auto w-full rounded-md object-cover shadow-sm md:aspect-video md:shadow"
                  src={imageUrl}
                  alt=""
                />
              ))}
            </GalleryCol>
            {!isNarrow && (
              <GalleryCol
                yRange={["15%", "5%"]}
                className="mt-0 gap-1.5 md:mt-[-50%] md:gap-2"
              >
                {images2.map((imageUrl) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={imageUrl}
                    className="aspect-video block h-auto w-full rounded-md object-cover shadow"
                    src={imageUrl}
                    alt=""
                  />
                ))}
              </GalleryCol>
            )}
            <GalleryCol
              yRange={isNarrow ? ["-4%", "1%"] : ["-10%", "2%"]}
              className="-mt-1 gap-1.5 md:-mt-2 md:gap-2"
            >
              {images3.map((imageUrl) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={imageUrl}
                  className="aspect-[4/3] block h-auto w-full rounded-md object-cover shadow-sm md:aspect-video md:shadow"
                  src={imageUrl}
                  alt=""
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </div>
      </ContainerSticky>
    </ContainerScroll>
  );
}
