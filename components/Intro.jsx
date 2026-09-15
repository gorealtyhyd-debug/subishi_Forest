import Image from "next/image";
import { introImages } from "@/lib/content";
import EnquiryButton from "./EnquiryButton";

export default function Intro() {
  return (
    <section id="intro" className="bg-cream">
      <div className="shell grid items-start gap-10 py-[clamp(64px,9vw,128px)] lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow mb-6 text-forest-300">Introduction</p>
          <h2 className="mb-7 font-display text-[clamp(32px,4vw,54px)] font-normal leading-tight">
            Living at the edge of the forest, minutes from the city.
          </h2>
          <p className="mb-5 text-[17px] font-light leading-[1.8]">
            Subishi’s Forest Edge offers premium quality, luxury villas at Pudur, near Kompally, Hyderabad. The
            project sits next to forest land in a calm area, very close to the ORR, with a 100-feet road and easy
            access to the ORR service road near Exit Number 6.
          </p>
          <p className="text-[17px] font-light leading-[1.8] text-forest-500">
            It is a community of 215 independent villas spread over 43 acres. Each villa is built on 580 sq. yards
            with up to 4,620 SFT built-up area, finished with the finest amenities and surrounded by lush greenery.
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-6 border-t border-forest/20 pt-7">
            <p className="text-[11px] uppercase tracking-[0.24em] text-forest-300">Last few villas available</p>
            <EnquiryButton className="pill-outline" label="Open the enquiry form">
              Check availability
            </EnquiryButton>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative h-[clamp(260px,38vw,460px)] w-full overflow-hidden">
            <Image src={introImages.primary.src} alt={introImages.primary.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[clamp(120px,18vw,210px)] w-full overflow-hidden">
              <Image src={introImages.walkway.src} alt={introImages.walkway.alt} fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative h-[clamp(120px,18vw,210px)] w-full overflow-hidden">
              <Image src={introImages.pool.src} alt={introImages.pool.alt} fill sizes="25vw" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
