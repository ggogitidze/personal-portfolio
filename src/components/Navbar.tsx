"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Energy & Grid", href: "/energy-systems" },
  { name: "Embedded & Signal", href: "/embedded-signal-systems" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black bg-white/95 backdrop-blur-md">
      <div className="site-shell flex min-h-16 items-center justify-between gap-6">
        <Link href="/" className="focus-ring text-sm font-extrabold uppercase tracking-[.14em]">Giorgi Gogitidze</Link>
        <button
          type="button"
          className="focus-ring border border-black px-3 py-2 text-xs font-bold uppercase tracking-widest md:hidden"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-16 flex-col border-b border-black bg-white px-4 py-4 md:static md:flex md:flex-row md:border-0 md:p-0`}
        >
          {links.map((link) => {
            const route = link.href.split("#")[0] || "/";
            const active = route !== "/" && pathname.startsWith(route);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`focus-ring border-b border-black/10 px-3 py-3 text-xs font-bold uppercase tracking-wider transition-colors hover:text-accent md:border-0 md:py-2 ${active ? "text-accent" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
