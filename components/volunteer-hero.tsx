import {
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer,
} from "@/components/animated-gallery"

/** All files in `public/images/` — used only for the scroll gallery (12 slots, 7 unique). */
const LOCAL_GALLERY_IMAGES = [
  "/images/1.JPG",
  "/images/2.jpg",
  "/images/3.JPG",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
] as const

const pickColumn = (start: number) =>
  Array.from({ length: 4 }, (_, i) => LOCAL_GALLERY_IMAGES[(start + i) % LOCAL_GALLERY_IMAGES.length])

const IMAGES_1 = pickColumn(0)
const IMAGES_2 = pickColumn(3)
const IMAGES_3 = pickColumn(6)
  
  export const VolunteerHero = () => {
    return (
      <div className="relative">
        <div className="relative z-[9999] -mb-24 flex min-h-[62dvh] flex-col items-center justify-center px-6 pb-6 md:min-h-[58dvh] md:-translate-y-10">
          <ContainerStagger className="max-w-2xl text-center">
            <ContainerAnimated>
              <h1 className="font-serif text-4xl font-extralight text-foreground md:text-5xl">
                Volunteer with XES
              </h1>
            </ContainerAnimated>
            <ContainerAnimated>
              <p className="font-serif text-4xl font-extralight text-primary md:text-5xl">
                Real events, real growth
              </p>
            </ContainerAnimated>

            <ContainerAnimated className="my-4">
              <p className="text-balance leading-normal tracking-tight text-muted-foreground">
                Help us run flagship experiences with flexible hours, study credits
                where applicable, and a team that cares about your CV and your
                network—not just the shift roster.
              </p>
            </ContainerAnimated>
          </ContainerStagger>
        </div>
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-[70vh] w-full">
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-screen"
            style={{
              background:
                "linear-gradient(to right, hsl(var(--primary) / 0.12), hsl(var(--primary) / 0.42), hsl(var(--primary) / 0.18))",
              filter: "blur(84px)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-transparent"
          />
        </div>
  
        <ContainerScroll className="relative h-[350vh]">
          <ContainerSticky className="h-svh">
            <GalleryContainer className="">
              <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                {IMAGES_1.map((imageUrl) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={imageUrl}
                    className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
                    src={imageUrl}
                    alt="gallery item"
                  />
                ))}
              </GalleryCol>
              <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
                {IMAGES_2.map((imageUrl) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={imageUrl}
                    className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
                    src={imageUrl}
                    alt="gallery item"
                  />
                ))}
              </GalleryCol>
              <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                {IMAGES_3.map((imageUrl) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={imageUrl}
                    className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover shadow"
                    src={imageUrl}
                    alt="gallery item"
                  />
                ))}
              </GalleryCol>
            </GalleryContainer>
          </ContainerSticky>
        </ContainerScroll>
      </div>
    )
  }
  