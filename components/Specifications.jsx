import { specs } from "@/lib/content";

export default function Specifications() {
  return (
    <section id="specs" className="bg-cream py-[clamp(64px,9vw,120px)]">
      <div className="shell">
        <h2 className="mb-5 font-display text-[clamp(36px,5vw,64px)] font-normal">Specifications</h2>
        <p className="mb-[clamp(44px,6vw,76px)] max-w-2xl text-[16.5px] font-light leading-[1.8] text-forest-500">
          Quality is built into every detail — from robust construction and precision-crafted windows to premium
          fittings, each element is chosen for durability, performance and refined aesthetics.
        </p>
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {specs.map(function (group) {
            return (
              <div key={group.title}>
                <h3 className="mb-3.5 font-display text-[clamp(21px,2.2vw,26px)] font-normal">{group.title}</h3>
                <div className="mb-5 h-px bg-forest/20" />
                <ul className="grid gap-3.5">
                  {group.items.map(function (item) {
                    return (
                      <li key={item} className="grid grid-cols-[14px_1fr] items-start gap-3">
                        <span aria-hidden="true" className="text-[10px] leading-[1.9] text-forest-300">
                          ◆
                        </span>
                        <span className="text-[15.5px] font-light leading-[1.7]">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
