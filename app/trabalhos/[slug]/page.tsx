import { notFound } from 'next/navigation'
import { ProjectPage } from '../../site'
import { projects } from '../../data'
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })) }
export default async function Project({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = projects.find((item) => item.slug === slug); if (!project) notFound(); return <ProjectPage project={project} /> }
