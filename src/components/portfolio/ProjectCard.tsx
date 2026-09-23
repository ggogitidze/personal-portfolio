import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/portfolio";
import EvidenceBadges from "./EvidenceBadges";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="card-lift grid overflow-hidden border border-black bg-white lg:grid-cols-12">
      <div className="relative min-h-72 bg-subtle lg:col-span-5">
        <Image src={project.visuals[0].src} alt={project.visuals[0].alt} fill sizes="(min-width:1024px) 42vw, 100vw" className="object-contain p-5" />
      </div>
      <div className="flex flex-col justify-between gap-8 border-t border-black p-6 lg:col-span-7 lg:border-l lg:border-t-0 lg:p-10">
        <div>
          <p className="eyebrow text-accent">0{index + 1} / Case study</p>
          <h2 className="heading-medium mt-4">{project.title}</h2>
          <p className="body-text muted mt-5 max-w-3xl">{project.summary}</p>
        </div>
        <div className="space-y-6">
          <EvidenceBadges labels={project.status} />
          <Link className="focus-ring inline-flex border-b-2 border-accent pb-1 font-extrabold uppercase tracking-wide hover:text-accent" href={project.route}>View engineering case study →</Link>
        </div>
      </div>
    </article>
  );
}
