"use client";

import { motion } from "framer-motion";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/types/experience";

type ExperienceCardProps = {
  item: ExperienceItem;
  className?: string;
};

export function ExperienceCard({ item, className }: ExperienceCardProps) {
  const reduceMotion = usePrefersReducedMotion();
  const duration = `${item.start} — ${item.end}`;

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "glass group relative rounded-xl p-5 shadow-glow sm:p-6",
        "transition-colors duration-base hover:border-primary/25",
        className,
      )}
    >
      <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h3 className="font-display text-h2 text-foreground">{item.role}</h3>
          <p className="text-small text-muted-foreground">
            <span className="text-foreground/90">{item.company}</span>
            {item.location ? (
              <>
                <span className="mx-2 text-border" aria-hidden="true">
                  ·
                </span>
                <span>{item.location}</span>
              </>
            ) : null}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {item.current ? (
            <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-mono text-primary">
              Current
            </span>
          ) : null}
          <time
            dateTime={`${item.start}/${item.end}`}
            className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-mono text-muted-foreground"
          >
            {duration}
          </time>
        </div>
      </header>

      <ul className="mt-5 space-y-2.5">
        {item.achievements.map((achievement) => (
          <li
            key={achievement}
            className="flex gap-3 text-small text-muted-foreground"
          >
            <span
              className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/80"
              aria-hidden="true"
            />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {item.technologies.map((tech) => (
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
    </motion.article>
  );
}
