import { project } from "@/lib/content";
import EnquiryButton from "./EnquiryButton";

export default function Footer() {
  return (
    <footer className="bg-cream pb-10 pt-[clamp(56px,7vw,96px)]">
      <div className="shell">
        <div className="grid items-start gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-[26px] tracking-[0.14em]">SUBISHI</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-forest-300">Forest Edge · Kompally</p>
          </div>
          <nav aria-label="Footer" className="grid gap-3 text-sm font-light">
            <a href="https://subishi.com/">Home</a>
            <a href="https://subishi.com/luxury-villas-and-apartments/">All projects</a>
            <a href="https://subishi.com/contact-us/">Contact us</a>
            <a href={project.brochure}>Brochure (PDF)</a>
          </nav>
          <div>
            <p className="mb-4 text-[15px] font-light leading-relaxed text-forest-500">
              Last few villas available. Talk to our sales team about pricing and payment options.
            </p>
            <EnquiryButton className="pill-outline" label="Open the enquiry form">
              Enquiry now
            </EnquiryButton>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-forest/20 pt-6 text-[12.5px] tracking-[0.08em] text-forest-300">
          <span>© {new Date().getFullYear()} Subishi Engineers. All rights reserved.</span>
          <span className="flex gap-6">
            <a href="https://subishi.com/privacy-policy/">Privacy Policy</a>
            <a href="http://rera.telangana.gov.in/">RERA {project.rera}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
