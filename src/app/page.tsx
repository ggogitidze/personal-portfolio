import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { tracks } from "@/content/portfolio";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Giorgi Gogitidze",
    url: "https://www.giorgigogitidze.com",
    jobTitle: "Electrical Engineering Graduate Student",
    alumniOf: [{ "@type": "CollegeOrUniversity", name: "Caldwell University" }],
    affiliation: { "@type": "CollegeOrUniversity", name: "New Jersey Institute of Technology" },
    sameAs: ["https://www.linkedin.com/in/giorgigogitidze/", "https://github.com/ggogitidze"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="technical-grid min-h-[calc(100vh-4rem)] border-b border-black py-16 md:py-24">
        <div className="site-shell grid min-h-[70vh] items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-8 md:border-r md:border-black md:pr-12">
            <p className="eyebrow text-accent">M.S. Electrical Engineering student at NJIT</p>
            <h1 className="heading-massive mt-7">Giorgi<br />Gogitidze</h1>
            <div className="my-8 h-0.5 bg-black" />
            <p className="flex flex-wrap items-center gap-3 text-lg font-extrabold uppercase tracking-wide md:text-2xl"><span className="bg-black px-3 py-2 text-white">Electrical Engineer</span><span aria-hidden>✶</span><span>Power · Embedded · Signal Processing</span></p>
          </div>
          <div className="md:col-span-4 md:pl-4">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[410px] border border-black bg-white p-3">
              <Image src="/GiorgiGogitidzeLinkedin.webp" alt="Portrait of Giorgi Gogitidze" fill priority sizes="(min-width:768px) 34vw, 90vw" className="object-cover object-top p-3 grayscale transition duration-500 hover:grayscale-0" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="site-shell section-pad grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4"><p className="eyebrow text-accent">Who / what</p><h2 className="heading-medium mt-4">Engineering decisions backed by evidence.</h2></div>
        <div className="space-y-7 md:col-span-8"><p className="body-text">I am building depth in power systems, embedded electronics, and signal processing through executable engineering studies. My work starts with physical assumptions and ends with results that can be reproduced, tested, and challenged.</p><p className="body-text muted">My computer-science background supports the analysis, but software is the instrument—not the portfolio subject. Each case study distinguishes simulated results, analytical calculations, automated tests, design-stage work, and physical validation that has not yet occurred.</p></div>
      </section>

      <section className="border-y border-black bg-subtle py-20 md:py-28">
        <div className="site-shell"><p className="eyebrow text-accent">Two recruiter paths</p><h2 className="heading-medium mt-4">Choose an engineering track</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {Object.values(tracks).map((track) => <article key={track.key} className="card-lift flex flex-col overflow-hidden border border-black bg-white"><div className="relative aspect-[16/10] border-b border-black bg-white"><Image src={track.heroImage} alt={track.heroAlt} fill sizes="(min-width:1024px) 48vw, 100vw" className="object-contain p-5" /></div><div className="flex flex-1 flex-col p-7 md:p-10"><p className="eyebrow text-accent">{track.eyebrow}</p><h3 className="heading-medium mt-4">{track.name}</h3><p className="body-text muted mt-5">{track.summary}</p><ul className="prose-list mt-7 grid gap-2">{track.focus.slice(0, 3).map((item) => <li key={item} className="ml-5">{item}</li>)}</ul><Link className="focus-ring mt-8 inline-flex self-start border-b-2 border-accent pb-1 font-extrabold uppercase tracking-wide hover:text-accent" href={track.route}>Explore this track →</Link></div></article>)}
          </div>
        </div>
      </section>

      <section id="education" className="site-shell section-pad">
        <p className="eyebrow text-accent">Education</p><h2 className="heading-medium mt-4">A multidisciplinary foundation</h2>
        <div className="mt-12 divide-y divide-black border-y border-black">
          <article className="grid gap-4 py-8 md:grid-cols-12"><div className="md:col-span-4"><p className="text-xl font-bold">New Jersey Institute of Technology</p><p className="mt-2 text-sm font-bold uppercase tracking-wider text-accent">In progress</p></div><div className="md:col-span-8"><h3 className="text-2xl font-bold">M.S. Electrical Engineering</h3><p className="muted mt-3">Graduate study supporting focused work in power, embedded electronics, and signal analysis.</p></div></article>
          <article className="grid gap-4 py-8 md:grid-cols-12"><div className="md:col-span-4"><p className="text-xl font-bold">Caldwell University</p><p className="mt-2 text-sm font-bold uppercase tracking-wider text-accent">May 2025</p></div><div className="md:col-span-8"><h3 className="text-2xl font-bold">B.S. Computer Science</h3><p className="muted mt-3">A software and research foundation now applied to reproducible engineering analysis, automation, and verification.</p></div></article>
        </div>
      </section>

      <section className="border-t border-black bg-black py-20 text-white"><div className="site-shell"><p className="eyebrow text-[#ff6840]">Capabilities</p><h2 className="heading-medium mt-4">Technical toolkit</h2><div className="mt-10 grid gap-px border border-white/25 bg-white/25 sm:grid-cols-2 lg:grid-cols-4">{[
        ["Power studies", "Load flow, short circuit, N−1 analysis, distribution sizing"],
        ["Energy systems", "Microgrid dispatch, battery modeling, optimization, scenario analysis"],
        ["Embedded electronics", "Mixed-signal architecture, acquisition, USB/SPI, embedded C"],
        ["Signal processing", "Filtering, FFT, envelope analysis, event detection, testbenches"],
      ].map(([title, body]) => <article key={title} className="bg-black p-6"><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-white/65">{body}</p></article>)}</div><p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/55">Engineering analysis tools include Python, pandapower, SciPy, NumPy, pandas, Matplotlib, C, CMake, Excel, and technical-report workflows.</p></div></section>
      <Footer />
    </>
  );
}
