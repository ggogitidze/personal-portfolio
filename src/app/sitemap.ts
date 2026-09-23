import type { MetadataRoute } from "next";
import { projects, tracks } from "@/content/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.giorgigogitidze.com";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...Object.values(tracks).map((track) => ({ url: `${base}${track.route}`, changeFrequency: "monthly" as const, priority: .9 })),
    ...projects.map((project) => ({ url: `${base}${project.route}`, changeFrequency: "monthly" as const, priority: .8 })),
  ];
}
