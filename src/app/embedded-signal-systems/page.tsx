import type { Metadata } from "next";
import TrackPage from "@/components/portfolio/TrackPage";
import { projectsByTrack, tracks } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Embedded Electronics & Signal Processing",
  description: "Mixed-signal DAQ, vibration condition-monitoring, and ECG DSP engineering case studies.",
  alternates: { canonical: "/embedded-signal-systems" },
  openGraph: { title: "Embedded Electronics & Signal Processing", description: "Verified embedded and signal-processing work by Giorgi Gogitidze.", url: "/embedded-signal-systems", images: ["/engineering/embedded-og.webp"] },
};

export default function EmbeddedSystemsPage() { return <TrackPage track={tracks.embedded} projects={projectsByTrack("embedded")} />; }
