import {
  ContainerAnimated,
  ContainerStagger,
} from "@/components/animated-gallery";
import { VolunteerApplyButton } from "@/components/volunteer-apply-button";
import { VolunteerHeroGallery } from "@/components/volunteer-hero-gallery";

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
        <div className="relative z-20 -mb-24 flex min-h-[62dvh] flex-col items-center justify-center px-6 pb-6 md:min-h-[58dvh] md:-translate-y-10">
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

            <ContainerAnimated className="mt-10">
              <VolunteerApplyButton className="cursor-pointer inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-md transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                Become a Volunteer
              </VolunteerApplyButton>
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
  
        <VolunteerHeroGallery images1={IMAGES_1} images2={IMAGES_2} images3={IMAGES_3} />
      </div>
    )
  }
  