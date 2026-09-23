import Image from "next/image";
import Link from "next/link";
import type { Project, Track } from "@/content/portfolio";
import Footer from "@/components/Footer";
import ProjectCard from "./ProjectCard";

export default function TrackPage({ track, projects }: { track: Track; projects: Project[] }) {
  return (
    <>
      <section className="technical-grid border-b border-black py-20 md:py-28">
        <div className="site-shell grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Link className="focus-ring eyebrow hover:text-accent" href="/">← Portfolio home</Link>
            <p className="eyebrow mt-12 text-accent">{track.eyebrow}</p>
            <h1 className="heading-large mt-5">{track.name}</h1>
            <p className="body-text mt-7 max-w-3xl">{track.summary}</p>
            {track.resumeHref && (
              <a className="focus-ring mt-8 inline-flex bg-black px-6 py-4 text-sm font-extrabold uppercase tracking-wider text-white hover:bg-accent" href={track.resumeHref} download>Download targeted resume</a>
            )}
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] border border-black bg-white p-3">
              <Image src={track.heroImage} alt={track.heroAlt} fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-contain p-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell section-pad grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4"><p className="eyebrow text-accent">Engineering focus</p><h2 className="heading-medium mt-4">What this track demonstrates</h2></div>
        <ul className="prose-list grid gap-4 md:col-span-8 md:grid-cols-2">
          {track.focus.map((item) => <li key={item} className="border-t border-black pt-4 text-lg font-semibold">{item}</li>)}
        </ul>
      </section>

      <section className="border-t border-black bg-subtle py-20 md:py-28">
        <div className="site-shell">
          <div className="mb-12 flex items-end justify-between gap-6"><div><p className="eyebrow text-accent">Selected work</p><h2 className="heading-medium mt-4">Three verified case studies</h2></div><p className="hidden max-w-sm text-right text-sm text-black/60 md:block">Each page separates executed results, analytical work, automated tests, and uncompleted physical validation.</p></div>
          <div className="space-y-10">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
