import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section aria-label="Project at a glance" className="bg-forest text-cream">
      <div className="shell grid grid-cols-2 md:grid-cols-4">
        {stats.map(function (s) {
          return (
            <div key={s.label} className="border-r border-cream/20 px-2 py-10">
              <div className="font-display text-[clamp(30px,3.4vw,44px)] leading-none">{s.value}</div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-cream/80">{s.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
