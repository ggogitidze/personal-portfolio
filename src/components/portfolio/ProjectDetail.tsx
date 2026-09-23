import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { projectsByTrack, tracks, type Project } from "@/content/portfolio";
import EvidenceBadges from "./EvidenceBadges";

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="grid gap-6 border-t border-black py-12 md:grid-cols-12 md:py-16">
      <h2 className="text-2xl font-bold md:col-span-4">{title}</h2>
      <ul className="prose-list space-y-4 md:col-span-8">{items.map((item) => <li key={item} className="ml-5 text-lg leading-relaxed">{item}</li>)}</ul>
    </section>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const track = tracks[project.track];
  const related = projectsByTrack(project.track).filter((item) => item.slug !== project.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `https://www.giorgigogitidze.com${project.route}`,
    author: { "@type": "Person", name: "Giorgi Gogitidze" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <header className="technical-grid border-b border-black py-16 md:py-24">
        <div className="site-shell">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-bold uppercase tracking-wider">
            <Link className="focus-ring hover:text-accent" href="/">Home</Link><span aria-hidden>／</span>
            <Link className="focus-ring hover:text-accent" href={track.route}>{track.name}</Link><span aria-hidden>／</span>
            <span aria-current="page" className="text-black/55">{project.shortTitle}</span>
          </nav>
          <div className="mt-16 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8"><p className="eyebrow text-accent">Engineering case study</p><h1 className="heading-large mt-5">{project.title}</h1><p className="body-text mt-7 max-w-4xl">{project.subtitle}</p></div>
            <div className="flex items-end lg:col-span-4"><EvidenceBadges labels={project.status} /></div>
          </div>
        </div>
      </header>

      <section className="site-shell section-pad">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4"><p className="eyebrow text-accent">Problem statement</p></div>
          <div className="md:col-span-8"><p className="heading-medium normal-case">{project.problem}</p><p className="body-text muted mt-8">{project.summary}</p></div>
        </div>
      </section>

      <section className="border-y border-black bg-black py-14 text-white">
        <div className="site-shell grid gap-px border border-white/25 bg-white/25 sm:grid-cols-2 lg:grid-cols-4">
          {project.metrics.map((metric) => <article key={metric.label} className="bg-black p-6"><p className="text-4xl font-bold text-[#ff6840]">{metric.value}</p><h2 className="mt-3 font-bold">{metric.label}</h2><p className="mt-2 text-sm leading-relaxed text-white/65">{metric.context}</p></article>)}
        </div>
      </section>

      <div className="site-shell py-8">
        <ListSection title="Project scope" items={project.scope} />
        <section className="grid gap-6 border-t border-black py-12 md:grid-cols-12 md:py-16"><h2 className="text-2xl font-bold md:col-span-4">System or processing architecture</h2><p className="body-text md:col-span-8">{project.architecture}</p></section>
        <ListSection title="My engineering contributions" items={project.contributions} />
        <ListSection title="Important design decisions" items={project.decisions} />
        <ListSection title="Engineering methods" items={project.methods} />
      </div>

      <section className="border-y border-black bg-subtle py-20">
        <div className="site-shell"><p className="eyebrow text-accent">Selected evidence</p><h2 className="heading-medium mt-4">Readable results, with context</h2>
          <div className="mt-12 space-y-16">{project.visuals.map((visual, index) => <figure key={visual.src} className="grid gap-5"><div className="relative aspect-[16/9] overflow-hidden border border-black bg-white"><Image src={visual.src} alt={visual.alt} fill sizes="(min-width:1600px) 1500px, 100vw" className="object-contain p-2 md:p-5" /></div><figcaption className="grid gap-2 border-t border-black pt-3 text-sm md:grid-cols-12"><span className="font-extrabold uppercase tracking-wider text-accent md:col-span-2">Figure {index + 1}</span><span className="leading-relaxed md:col-span-10">{visual.caption}</span></figcaption></figure>)}</div>
        </div>
      </section>

      <div className="site-shell py-8">
        <ListSection title="Verification and testing" items={project.verification} />
        <ListSection title="Honest limitations" items={project.limitations} />
        <section className="grid gap-8 border-t border-black py-12 md:grid-cols-12 md:py-16"><div className="md:col-span-4"><h2 className="text-2xl font-bold">Tools and technologies</h2></div><ul className="flex flex-wrap gap-2 md:col-span-8">{project.technologies.map((item) => <li key={item} className="border border-black px-3 py-2 text-sm font-bold">{item}</li>)}</ul></section>
        <section className="grid gap-8 border-t border-black py-12 md:grid-cols-12 md:py-16"><div className="md:col-span-4"><h2 className="text-2xl font-bold">Skills demonstrated</h2></div><ul className="flex flex-wrap gap-2 md:col-span-8">{project.skills.map((item) => <li key={item} className="bg-black px-3 py-2 text-sm font-bold text-white">{item}</li>)}</ul></section>
      </div>

      <section className="border-y border-black bg-accent py-16">
        <div className="site-shell"><p className="eyebrow text-white">Downloadable proof of work</p><h2 className="heading-medium mt-4 text-white">Review the evidence directly</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{project.downloads.map((item) => <a key={item.href} className="focus-ring card-lift flex min-h-40 flex-col justify-between border border-black bg-white p-6" href={item.href} download={!item.href.endsWith(".html")}><span className="text-xl font-bold">{item.label}</span><span className="mt-6 text-sm text-black/60">{item.detail}</span><span className="mt-4 font-bold">Download →</span></a>)}</div></div>
      </section>

      <section className="site-shell section-pad"><p className="eyebrow text-accent">Continue in {track.name}</p><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map((item) => <Link key={item.slug} className="focus-ring card-lift border border-black p-6" href={item.route}><span className="font-bold">{item.title}</span><span className="mt-4 block text-sm text-black/60">View case study →</span></Link>)}</div></section>
      <Footer />
    </>
  );
}
