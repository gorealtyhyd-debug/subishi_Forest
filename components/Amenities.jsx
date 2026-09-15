"use client";

import Image from "next/image";
import { useState } from "react";
import { amenityShowcase, amenityList } from "@/lib/content";

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Amenities() {
  const [i, setI] = useState(0);
  const total = amenityShowcase.length;
  const current = amenityShowcase[i];

  function step(d) {
    setI(function (prev) {
      return (prev + d + total) % total;
    });
  }

  return (
    <section id="amenities" className="bg-forest py-[clamp(64px,9vw,120px)] text-cream">
      <div className="shell">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow mb-4 text-cream/80">Amenities</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal">A clubhouse life, inside the gates</h2>
          </div>
          <p className="text-[13px] uppercase tracking-[0.2em] text-cream/70">
            {pad(i + 1)} / {pad(total)}
          </p>
        </div>

        <div className="relative overflow-hidden bg-forest-700">
          <div className="relative h-[clamp(340px,52vw,640px)] w-full">
            <Image
              src={current.src}
              alt={current.title + " at Subishi Forest Edge"}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/55 to-transparent" />
          <button
            type="button"
            onClick={function () {
              step(-1);
            }}
            aria-label="Previous amenity"
            className="absolute left-[clamp(12px,2vw,28px)] top-1/2 h-[clamp(48px,5vw,72px)] w-[clamp(48px,5vw,72px)] -translate-y-1/2 rounded-full border border-cream/40 bg-forest/50 text-xl text-cream transition-colors hover:bg-cream hover:text-forest"
          >
            ←
          </button>
          <button
            type="button"
            onClick={function () {
              step(1);
            }}
            aria-label="Next amenity"
            className="absolute right-[clamp(12px,2vw,28px)] top-1/2 h-[clamp(48px,5vw,72px)] w-[clamp(48px,5vw,72px)] -translate-y-1/2 rounded-full border border-cream/40 bg-forest/50 text-xl text-cream transition-colors hover:bg-cream hover:text-forest"
          >
            →
          </button>
          <div className="absolute inset-x-0 bottom-0 p-[clamp(24px,3.4vw,52px)]">
            <p className="mb-5 inline-block border border-cream/50 px-4 py-2 text-[11px] uppercase tracking-[0.26em]">
              {current.badge}
            </p>
            <h3 className="mb-3.5 font-display text-[clamp(28px,4.4vw,56px)] font-normal leading-[1.08]">{current.title}</h3>
            <p className="max-w-2xl text-[clamp(15px,1.5vw,18px)] font-light leading-relaxed text-cream/90">{current.note}</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {amenityShowcase.map(function (a, idx) {
            const on = idx === i;
            return (
              <button
                key={a.title}
                type="button"
                onClick={function () {
                  setI(idx);
                }}
                aria-label={"Show " + a.title}
                aria-current={on}
                className={
                  "relative block aspect-[16/10] w-full overflow-hidden border bg-forest-700 transition-opacity hover:opacity-100 " +
                  (on ? "border-cream opacity-100" : "border-cream/20 opacity-60")
                }
              >
                <Image src={a.src} alt={a.title} fill loading="lazy" sizes="150px" className="object-cover" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 to-transparent px-2.5 py-2 text-left text-[10.5px] uppercase tracking-[0.14em] text-cream">
                  {a.title}
                </span>
              </button>
            );
          })}
        </div>

        <ul className="mt-[clamp(32px,4vw,52px)] flex flex-wrap gap-2.5">
          {amenityList.map(function (a) {
            return (
              <li
                key={a}
                className="rounded-full border border-cream/35 px-5 py-2.5 text-sm font-light transition-colors hover:bg-cream hover:text-forest"
              >
                {a}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
