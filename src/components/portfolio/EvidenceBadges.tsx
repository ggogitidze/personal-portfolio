import type { EvidenceLabel } from "@/content/portfolio";

export default function EvidenceBadges({ labels }: { labels: EvidenceLabel[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Evidence types">
      {labels.map((label) => (
        <li key={label} className="border border-black bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wider">{label}</li>
      ))}
    </ul>
  );
}
