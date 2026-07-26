"use client";

import { motion } from "framer-motion";
import {
  Brain,
  CloudUpload,
  Database,
  LayoutPanelLeft,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";
import type { SkillCategory, SkillCategoryId } from "@/types/skills";

const iconMap: Record<SkillCategoryId, LucideIcon> = {
  frontend: LayoutPanelLeft,
  backend: Server,
  database: Database,
  tools: Wrench,
  ai: Brain,
  deployment: CloudUpload,
};

type SkillCategoryCardProps = {
  category: SkillCategory;
  className?: string;
};

export function SkillCategoryCard({
  category,
  className,
}: SkillCategoryCardProps) {
  const reduceMotion = usePrefersReducedMotion();
  const Icon = iconMap[category.icon];

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group glass relative flex h-full flex-col gap-5 overflow-hidden rounded-xl p-5 shadow-glow sm:p-6",
        "transition-colors duration-base hover:border-primary/30",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-8 -top-8 size-28 rounded-full",
          "bg-primary/0 blur-2xl transition-colors duration-base group-hover:bg-primary/10",
        )}
      />

      <header className="relative flex items-start gap-4">
        <span
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-lg border border-border bg-muted/60 text-primary",
            "transition-all duration-base group-hover:border-primary/35 group-hover:bg-primary/10",
            "group-hover:scale-105",
          )}
        >
          <Icon className="size-5" aria-hidden="true" />
        </span>

        <div className="min-w-0">
          <h3 className="font-display text-h2 text-foreground">
            {category.title}
          </h3>
          <p className="mt-1 text-small text-muted-foreground">
            {category.description}
          </p>
        </div>
      </header>

      <ul
        className="relative mt-auto flex flex-wrap gap-2"
        aria-label={`${category.title} skills`}
      >
        {category.skills.map((skill) => (
          <li
            key={skill}
            className={cn(
              "rounded-md border border-border bg-muted/50 px-2.5 py-1",
              "font-mono text-mono text-muted-foreground",
              "transition-colors duration-base group-hover:border-border group-hover:text-foreground/85",
            )}
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
