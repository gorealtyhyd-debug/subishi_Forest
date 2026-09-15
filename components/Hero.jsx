import Image from "next/image";
import { project } from "@/lib/content";
import EnquiryButton from "./EnquiryButton";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[88vh] items-end bg-forest">
      <Image
        src={project.hero}
        alt="Forest Edge luxury villa exterior, day view"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/50 to-forest/35" />
      <div className="shell relative animate-rise py-24 pb-16">
        <p className="mb-5 text-[11.5px] uppercase tracking-[0.34em] text-cream/85">
          {project.locality} · {project.nearby} · {project.city}
        </p>
        <h1 className="mb-6 font-display text-[clamp(52px,9vw,128px)] font-normal leading-[0.94] tracking-tight text-cream">
          Forest Edge
        </h1>
        <p className="mb-9 max-w-xl text-[clamp(16px,1.6vw,19px)] font-light leading-relaxed text-cream/90">
          {project.tagline}
        </p>
        <div className="flex flex-wrap items-center gap-3.5">
          <EnquiryButton className="pill-light !px-8 text-xs tracking-[0.18em]" label="Open the enquiry form">
            Enquiry Now
          </EnquiryButton>
          <a href={project.brochure} className="pill-ghost !px-8 text-xs tracking-[0.18em]" target="_blank" rel="noopener">
            Download Brochure
          </a>
          <span className="text-[11px] uppercase tracking-[0.14em] text-cream/70">RERA · {project.rera}</span>
        </div>
      </div>
    </section>
  );
}
