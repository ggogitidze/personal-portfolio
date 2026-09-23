export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] py-24 text-white md:py-32">
      <div className="site-shell grid gap-16 md:grid-cols-2 md:items-end">
        <div>
          <p className="eyebrow text-white/60">Engineering opportunities & collaboration</p>
          <h2 className="mt-6 text-[clamp(4rem,12vw,10rem)] font-bold uppercase leading-[.8] tracking-[-.06em]">Let&apos;s<br />talk.</h2>
        </div>
        <div className="flex flex-col gap-6 md:items-end md:text-right">
          <a className="focus-ring break-all text-xl font-bold hover:text-[#ff6840] md:text-2xl" href="mailto:gogitidzegiorgi1@outlook.com">gogitidzegiorgi1@outlook.com</a>
          <div className="flex gap-6 font-bold">
            <a className="focus-ring hover:text-[#ff6840]" href="https://www.linkedin.com/in/giorgigogitidze/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="focus-ring hover:text-[#ff6840]" href="https://github.com/ggogitidze" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <p className="mt-8 text-sm text-white/55">© {new Date().getFullYear()} Giorgi Gogitidze<br />Designed and built by Giorgi Gogitidze</p>
        </div>
      </div>
    </footer>
  );
}
