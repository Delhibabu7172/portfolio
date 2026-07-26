"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, ExternalLink as ExternalLinkIcon, Github } from "lucide-react";

import { ExternalLink } from "@/components/shared/ExternalLink";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const reduceMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 160, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 160, damping: 18 });
  const transform = useMotionTemplate`perspective(1100px) rotateX(${springX}deg) rotateY(${springY}deg)`;

  const onMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 10);
    rotateX.set((0.5 - py) * 8);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={reduceMotion ? undefined : { transform }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group glass relative flex h-full flex-col overflow-hidden rounded-xl shadow-glow",
        "transition-colors duration-base hover:border-primary/30",
        className,
      )}
    >
      <Link
        href={project.links.caseStudy}
        className="relative block aspect-[16/10] overflow-hidden border-b border-border/80"
        aria-label={`${project.title} case study`}
      >
        <Image
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
          className={cn(
            "object-cover transition-transform duration-500 ease-out",
            !reduceMotion && "group-hover:scale-[1.04]",
          )}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-80"
        />
        <span className="absolute left-4 top-4 rounded-md border border-border/80 bg-background/70 px-2.5 py-1 font-mono text-mono text-muted-foreground backdrop-blur-sm">
          {project.year}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-h2 text-foreground transition-colors duration-base group-hover:text-primary">
              <Link href={project.links.caseStudy}>{project.title}</Link>
            </h3>
            <span className="shrink-0 font-mono text-mono text-muted-foreground">
              {project.role}
            </span>
          </div>
          <p className="text-small text-muted-foreground">{project.summary}</p>
        </div>

        <ul
          className="flex flex-wrap gap-2"
          aria-label={`${project.title} tech stack`}
        >
          {project.stack.map((tech) => (
            <li
              key={tech}
              className={cn(
                "rounded-md border border-border bg-muted/50 px-2.5 py-1",
                "font-mono text-mono text-muted-foreground",
              )}
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/70 pt-4">
          {project.links.github ? (
            <ExternalLink
              href={project.links.github}
              showIcon={false}
              className="gap-1.5"
            >
              <Github className="size-3.5" aria-hidden="true" />
              GitHub
            </ExternalLink>
          ) : null}

          {project.links.live ? (
            <ExternalLink
              href={project.links.live}
              showIcon={false}
              className="gap-1.5"
            >
              <ExternalLinkIcon className="size-3.5" aria-hidden="true" />
              Live Demo
            </ExternalLink>
          ) : null}

          <Link
            href={project.links.caseStudy}
            className={cn(
              "ml-auto inline-flex items-center gap-1.5 text-small font-medium text-primary",
              "transition-colors duration-base hover:text-primary-hover",
            )}
          >
            Case Study
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
