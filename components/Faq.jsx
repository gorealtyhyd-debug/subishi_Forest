import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="bg-cream py-[clamp(56px,7vw,104px)]">
      <div className="shell grid items-start gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-16">
        <div>
          <p className="eyebrow mb-4 text-forest-300">FAQ</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-normal leading-tight">
            Questions buyers ask us most
          </h2>
        </div>
        <div className="border-t border-forest/20">
          {faqs.map(function (item) {
            return (
              <details key={item.q} className="group border-b border-forest/20 py-5">
                <summary className="cursor-pointer list-none text-[clamp(17px,1.8vw,21px)] font-light [&::-webkit-details-marker]:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 max-w-2xl text-[15.5px] font-light leading-[1.75] text-forest-500">{item.a}</p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
