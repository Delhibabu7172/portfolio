"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, FolderGit2, Layers, type LucideIcon } from "lucide-react";

import { useCountUp } from "@/hooks/useCountUp";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";
import type { AboutStat } from "@/types/about";

const iconMap: Record<AboutStat["icon"], LucideIcon> = {
  calendar: Calendar,
  folder: FolderGit2,
  layers: Layers,
};

type StatCardProps = {
  stat: AboutStat;
  className?: string;
};

export function StatCard({ stat, className }: StatCardProps) {
  const reduceMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(false);
  const Icon = iconMap[stat.icon];
  const value = useCountUp({
    target: stat.value,
    active,
    enabled: !reduceMotion,
  });

  return (
    <motion.div
      onViewportEnter={() => setActive(true)}
      viewport={{ once: true, margin: "-10%" }}
      className={cn(
        "glass flex flex-col gap-3 rounded-xl p-5 shadow-glow",
        className,
      )}
    >
      <Icon className="size-5 text-primary" aria-hidden="true" />
      <p className="font-display text-[2rem] font-bold leading-none text-foreground tabular-nums">
        {value}
        {stat.suffix ? (
          <span className="text-primary">{stat.suffix}</span>
        ) : null}
      </p>
      <p className="text-small text-muted-foreground">{stat.label}</p>
    </motion.div>
  );
}
