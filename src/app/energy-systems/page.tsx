import type { Metadata } from "next";
import TrackPage from "@/components/portfolio/TrackPage";
import { projectsByTrack, tracks } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Energy & Grid Systems",
  description: "Power-distribution, microgrid energy-management, and IEEE 14-bus contingency-analysis engineering case studies.",
  alternates: { canonical: "/energy-systems" },
  openGraph: { title: "Energy & Grid Systems", description: "Verified power engineering studies by Giorgi Gogitidze.", url: "/energy-systems", images: ["/engineering/energy-og.webp"] },
};

export default function EnergySystemsPage() { return <TrackPage track={tracks.energy} projects={projectsByTrack("energy")} />; }
