import Image from "next/image";
import { project } from "@/lib/content";

export default function MasterPlan() {
  return (
    <section id="layout" className="bg-cream">
      <div className="shell py-[clamp(64px,9vw,120px)]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow mb-4 text-forest-300">Master plan</p>
            <h2 className="font-display text-[clamp(32px,4vw,54px)] font-normal">Project layout</h2>
          </div>
          <a href={project.masterPlan} target="_blank" rel="noopener" className="pill-outline">
            Download high resolution
          </a>
        </div>
        <a href={project.masterPlan} target="_blank" rel="noopener" className="block border border-forest/20 p-[clamp(12px,2vw,28px)]">
          <Image
            src={project.masterPlan}
            alt="Subishi Forest Edge master plan showing 215 villa plots across 43 acres"
            width={1600}
            height={1100}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="h-auto w-full"
          />
        </a>
      </div>
    </section>
  );
}
