"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gallery } from "@/lib/content";

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(function () {
    function onKey(e) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return function () {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const current = active === null ? null : gallery[active];

  return (
    <section id="gallery" className="bg-forest py-[clamp(64px,9vw,120px)] text-cream">
      <div className="shell">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-4 text-cream/80">Gallery</p>
            <h2 className="font-display text-[clamp(32px,4vw,54px)] font-normal">Elevations &amp; interiors</h2>
          </div>
          <p className="max-w-xs text-[13.5px] font-light text-cream/80">Click any frame to view it larger.</p>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map(function (g, i) {
            return (
              <button
                key={g.title}
                type="button"
                onClick={function () {
                  setActive(i);
                }}
                className="group relative block aspect-[4/3] w-full overflow-hidden bg-forest-700"
                aria-label={"View " + g.title + " larger"}
              >
                <Image
                  src={g.src}
                  alt={g.title + " at Subishi Forest Edge"}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 to-transparent px-4 py-3.5 text-left text-[11.5px] uppercase tracking-[0.16em] text-cream">
                  {g.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={function () {
            setActive(null);
          }}
          className="fixed inset-0 z-[90] flex animate-fade cursor-zoom-out items-center justify-center bg-forest/95 p-[4vw]"
        >
          <div className="w-full max-w-5xl">
            <div className="relative h-[76vh] w-full">
              <Image src={current.src} alt={current.title + " at Subishi Forest Edge"} fill sizes="100vw" className="object-contain" />
            </div>
            <div className="mt-4 flex justify-between gap-4 text-[11.5px] uppercase tracking-[0.18em] text-cream/85">
              <span>{current.title}</span>
              <span>Close ✕</span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
