import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/portfolio/ProjectDetail";
import { getProject, projectsByTrack } from "@/content/portfolio";

export const dynamicParams = false;
export function generateStaticParams() { return projectsByTrack("embedded").map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const project = getProject("embedded", slug); if (!project) return {};
  return { title: project.title, description: project.summary, alternates: { canonical: project.route }, openGraph: { title: project.title, description: project.summary, url: project.route, images: [project.visuals[0].src] } };
}
export default async function EmbeddedProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = getProject("embedded", slug); if (!project) notFound(); return <ProjectDetail project={project} />;
}
