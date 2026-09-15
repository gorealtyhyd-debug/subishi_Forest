"use client";

import Image from "next/image";
import { useState } from "react";
import { plans, planFacts } from "@/lib/content";
import EnquiryButton from "./EnquiryButton";

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function FloorPlans() {
  const [i, setI] = useState(0);
  const total = plans.length;
  const current = plans[i];

  function step(d) {
    setI(function (prev) {
      return (prev + d + total) % total;
    });
  }

  return (
    <section id="plans" className="bg-forest py-[clamp(64px,9vw,120px)] text-cream">
      <div className="shell">
        <p className="eyebrow mb-4 text-cream/80">Home plans</p>
        <h2 className="mb-10 font-display text-[clamp(32px,4vw,54px)] font-normal">Villa floor plans</h2>

        <div className="bg-cream text-forest-700 shadow-[0_40px_80px_-60px_rgba(9,32,24,0.9)]">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="relative min-w-0 border-b border-forest/15 p-[clamp(16px,2.4vw,34px)] lg:border-b-0 lg:border-r">
              <div className="relative h-[clamp(280px,42vw,560px)] w-full">
                <Image
                  src={current.src}
                  alt={current.title + " floor plan, Subishi Forest Edge"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain"
                />
              </div>
              <button
                type="button"
                onClick={function () {
                  step(-1);
                }}
                aria-label="Previous floor plan"
                className="absolute left-2.5 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full border border-forest/25 bg-cream/90 text-forest transition-colors hover:bg-forest hover:text-cream"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={function () {
                  step(1);
                }}
                aria-label="Next floor plan"
                className="absolute right-2.5 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full border border-forest/25 bg-cream/90 text-forest transition-colors hover:bg-forest hover:text-cream"
              >
                ›
              </button>
            </div>

            <div className="flex flex-col gap-7 p-[clamp(24px,3vw,40px)]">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.26em] text-forest-300">
                  Plan {pad(i + 1)} / {pad(total)}
                </p>
                <h3 className="font-display text-[clamp(24px,2.6vw,32px)] font-normal leading-snug">{current.title}</h3>
                <p className="mt-2.5 text-sm font-light text-forest-300">{current.facing}</p>
              </div>

              <div>
                <p className="inline-block bg-forest px-3.5 py-1.5 text-[10.5px] uppercase tracking-[0.22em] text-cream">
                  Area statement
                </p>
                <dl className="mt-4 grid gap-3">
                  {planFacts.map(function (fact) {
                    return (
                      <div key={fact.k} className="flex justify-between gap-3.5 border-b border-forest/15 pb-2.5">
                        <dt className="text-xs uppercase tracking-[0.14em] text-forest-300">{fact.k}</dt>
                        <dd className="text-right text-[15px]">{fact.v}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>

              <div className="mt-auto grid gap-2.5">
                <a href={current.src} target="_blank" rel="noopener" className="pill-solid !py-3.5 text-center">
                  View full plan
                </a>
                <EnquiryButton className="pill-outline !py-3.5" label="Open the enquiry form">
                  Enquiry now
                </EnquiryButton>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-forest/15 px-[clamp(16px,2.4vw,34px)] pb-5 pt-4">
            {plans.map(function (p, idx) {
              const on = idx === i;
              return (
                <button
                  key={p.title}
                  type="button"
                  onClick={function () {
                    setI(idx);
                  }}
                  aria-current={on}
                  className={
                    "rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.12em] transition-colors " +
                    (on ? "border-forest bg-forest text-cream" : "border-forest/30 bg-transparent text-forest-700 hover:border-forest")
                  }
                >
                  {p.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
