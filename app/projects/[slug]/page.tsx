import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ExternalLink } from "@/components/shared/ExternalLink";
import { Container } from "@/components/shared/Container";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main id="main" className="pb-section lg:pb-section-lg">
      <div className="relative border-b border-border/60 pt-28 md:pt-32">
        <Container className="pb-10 md:pb-12">
          <Link
            href="/#projects"
            className="text-small text-muted-foreground transition-colors duration-base hover:text-foreground"
          >
            ← Back to projects
          </Link>

          <p className="mt-6 font-mono text-mono uppercase tracking-[0.16em] text-primary">
            Case Study · {project.year}
          </p>
          <h1 className="mt-3 font-display text-display text-foreground">
            {project.title}
          </h1>
          <p className="mt-4 max-w-measure text-body text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="font-mono text-mono text-muted-foreground">
              {project.role}
            </span>
            {project.links.github ? (
              <ExternalLink href={project.links.github}>GitHub</ExternalLink>
            ) : null}
            {project.links.live ? (
              <ExternalLink href={project.links.live}>Live Demo</ExternalLink>
            ) : null}
          </div>
        </Container>
      </div>

      <Container className="mt-10 md:mt-12">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border">
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <div className="space-y-4">
            <h2 className="font-display text-h1 text-foreground">Overview</h2>
            <p className="max-w-measure text-body text-muted-foreground">
              {project.description}
            </p>
          </div>

          <aside className="glass h-fit rounded-xl p-5 shadow-glow">
            <h2 className="font-display text-h2 text-foreground">Stack</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-mono text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </main>
  );
}
