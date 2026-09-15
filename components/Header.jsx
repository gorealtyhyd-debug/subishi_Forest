import { nav } from "@/lib/content";
import EnquiryButton from "./EnquiryButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-forest/15 bg-cream/95 backdrop-blur-md">
      <div className="shell flex items-center justify-between gap-5 py-3.5">
        <a href="#top" className="flex flex-col gap-0.5" aria-label="Subishi Forest Edge, back to top">
          <span className="font-display text-[22px] leading-none tracking-[0.18em]">SUBISHI</span>
          <span className="text-[9.5px] uppercase tracking-[0.34em] text-forest-300">Forest Edge</span>
        </a>
        <nav aria-label="Sections" className="hidden flex-wrap gap-6 text-xs uppercase tracking-[0.14em] lg:flex">
          {nav.map(function (item) {
            return (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            );
          })}
        </nav>
        <EnquiryButton className="pill-solid whitespace-nowrap !px-6 !py-3 tracking-[0.18em]" label="Open the enquiry form">
          Enquiry Now
        </EnquiryButton>
      </div>
    </header>
  );
}
