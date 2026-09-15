"use client";

import Image from "next/image";
import { useState } from "react";
import { features, pillars } from "@/lib/content";

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Features() {
  const [active, setActive] = useState(0);
  const current = features[active];

  return (
    <section id="features" className="bg-cream py-[clamp(64px,9vw,128px)]">
      <div className="shell">
        <div className="mb-[clamp(40px,5vw,72px)] grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-4 text-forest-300">Features</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal leading-[1.1]">
              Everything the community is built around
            </h2>
          </div>
          <p className="text-base font-light leading-[1.8] text-forest-500">
            Infrastructure, security and sustainability planned before the first villa — so the address holds its
            value long after handover.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="border-t border-forest/20">
            {features.map(function (item, i) {
              const on = i === active;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={function () {
                    setActive(i);
                  }}
                  onMouseEnter={function () {
                    setActive(i);
                  }}
                  aria-current={on}
                  className={
                    "grid w-full grid-cols-[52px_1fr_auto] items-baseline gap-4 border-b border-forest/20 text-left transition-all duration-300 " +
                    (on ? "bg-forest px-5 pb-7 pt-6 text-cream" : "bg-transparent px-5 py-5 text-forest-700")
                  }
                >
                  <span className="text-[11px] tracking-[0.18em] opacity-70">{pad(i + 1)}</span>
                  <span>
                    <span className="block text-[clamp(17px,1.9vw,22px)] font-light">{item.label}</span>
                    {on ? (
                      <span className="mt-2.5 block max-w-[46ch] text-[14.5px] font-light leading-relaxed opacity-90">
                        {item.note}
                      </span>
                    ) : null}
                  </span>
                  <span className="text-[15px] opacity-65">{on ? "●" : "→"}</span>
                </button>
              );
            })}
          </div>

          <div className="grid gap-3.5 lg:sticky lg:top-24">
            <div className="relative h-[clamp(300px,40vw,520px)] w-full overflow-hidden bg-forest">
              <Image
                src={current.img}
                alt={current.label + " at Subishi Forest Edge"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3.5 p-[clamp(20px,2.6vw,34px)]">
                <div>
                  <p className="mb-2.5 text-[10.5px] uppercase tracking-[0.28em] text-cream/80">
                    Feature {pad(active + 1)} / {pad(features.length)}
                  </p>
                  <p className="font-display text-[clamp(22px,2.6vw,32px)] leading-tight text-cream">{current.label}</p>
                </div>
                <span className="font-display text-[clamp(40px,6vw,76px)] leading-[0.8] text-cream/30">{pad(active + 1)}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-forest/20 sm:grid-cols-4">
              {pillars.map(function (p) {
                return (
                  <div key={p.label} className="bg-cream px-4 py-4 transition-colors hover:bg-forest hover:text-cream">
                    <div className="font-display text-[26px] leading-none">{p.value}</div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.2em]">{p.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
