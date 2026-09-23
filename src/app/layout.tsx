import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.giorgigogitidze.com"),
  title: { default: "Giorgi Gogitidze | Electrical Engineering Portfolio", template: "%s | Giorgi Gogitidze" },
  description: "Electrical engineering portfolio focused on energy and grid systems, embedded electronics, instrumentation, and signal processing.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Giorgi Gogitidze — Electrical Engineering Portfolio",
    title: "Giorgi Gogitidze | Electrical Engineering Portfolio",
    description: "Power systems, embedded electronics, and signal-processing projects supported by reproducible engineering evidence.",
    images: [{ url: "/engineering/site-og.webp", width: 1200, height: 630, alt: "Giorgi Gogitidze electrical engineering portfolio" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body>
        <a href="#main-content" className="focus-ring fixed left-3 top-3 z-[100] -translate-y-24 bg-black px-4 py-2 text-white focus:translate-y-0">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
