import Image from "next/image";
import { project } from "@/lib/content";
import EnquiryButton from "./EnquiryButton";

export default function LocationSection() {
  return (
    <section id="location" className="bg-forest pt-[clamp(64px,9vw,120px)] text-cream">
      <div className="shell">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-4 text-cream/80">Location</p>
            <h2 className="mb-6 font-display text-[clamp(32px,4vw,54px)] font-normal">Directions to Forest Edge</h2>
            <p className="mb-7 text-[16.5px] font-light leading-[1.8] text-cream/90">
              Pudur, near Kompally — on a 100-feet road with easy access to the ORR service road near Exit Number 6.
            </p>
            <address className="grid gap-3.5 border-t border-cream/25 pt-6 text-[15px] font-light not-italic">
              <span>
                <strong className="font-medium">Sales office</strong>
                <br />
                {project.salesOffice}
              </span>
              <span>
                <strong className="font-medium">Email</strong> ·{" "}
                <a href={"mailto:" + project.email} className="text-cream underline hover:text-cream">
                  {project.email}
                </a>
              </span>
            </address>
            <EnquiryButton className="pill-light mt-7" label="Open the enquiry form">
              Schedule a site visit
            </EnquiryButton>
          </div>
          <Image
            src={project.locationMap}
            alt="Location map showing Forest Edge at Pudur near Kompally, Hyderabad"
            width={1200}
            height={900}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full border border-cream/25"
          />
        </div>
      </div>
      <div className="mt-[clamp(48px,6vw,80px)]">
        <iframe
          src={project.mapsEmbed}
          title="Subishi Forest Edge on Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[clamp(320px,46vw,560px)] w-full border-0"
        />
        <div className="shell flex flex-wrap items-center justify-between gap-3.5 py-5">
          <p className="text-sm font-light text-cream/85">Forest Edge, Pudur, Kompally, Hyderabad, Telangana</p>
          <a
            href={project.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-cream/50 pb-1 text-xs uppercase tracking-[0.18em] text-cream hover:text-cream"
          >
            Open in Google Maps ↗
          </a>
        </div>
      </div>
    </section>
  );
}
