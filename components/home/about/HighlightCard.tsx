"use client";

import { motion } from "framer-motion";
import { Gauge, Sparkles, Wand2, type LucideIcon } from "lucide-react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";
import type { AboutHighlight } from "@/types/about";

const iconMap: Record<AboutHighlight["icon"], LucideIcon> = {
  sparkles: Sparkles,
  gauge: Gauge,
  wand: Wand2,
};

type HighlightCardProps = {
  highlight: AboutHighlight;
  className?: string;
};

export function HighlightCard({ highlight, className }: HighlightCardProps) {
  const reduceMotion = usePrefersReducedMotion();
  const Icon = iconMap[highlight.icon];

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group glass flex flex-col gap-3 rounded-xl p-5 shadow-glow",
        "transition-colors duration-base hover:border-primary/25",
        className,
      )}
    >
      <span className="grid size-10 place-items-center rounded-lg border border-border bg-muted/60 text-primary transition-colors duration-base group-hover:border-primary/30">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <p className="font-display text-h2 text-foreground">{highlight.title}</p>
      <p className="text-small text-muted-foreground">{highlight.description}</p>
    </motion.div>
  );
}
