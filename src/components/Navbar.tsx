"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-6 md:px-12 bg-white/90 backdrop-blur-md hairline-b"
        >


            {/* Desktop & Mobile Navigation (Keep it simple horizontal everywhere per spec) */}
            <div className="flex items-center gap-8 md:gap-12">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm md:text-base font-medium uppercase tracking-wide hover:text-accent transition-colors relative group"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
}
