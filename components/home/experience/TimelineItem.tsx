"use client";

import { motion } from "framer-motion";

import { ExperienceCard } from "@/components/home/experience/ExperienceCard";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/types/experience";

type TimelineItemProps = {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <li className="relative grid grid-cols-[1.25rem_minmax(0,1fr)] gap-4 sm:grid-cols-[1.5rem_minmax(0,1fr)] sm:gap-6">
      <div className="relative flex justify-center" aria-hidden="true">
        {!isLast ? (
          <motion.span
            className="absolute top-4 bottom-[-1.25rem] w-px origin-top bg-border"
            initial={reduceMotion ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: reduceMotion ? 0.01 : 0.55, delay: 0.05 * index, ease }}
          />
        ) : null}

        <motion.span
          className={cn(
            "relative z-10 mt-5 size-3 rounded-full border-2 sm:mt-6",
            item.current
              ? "border-primary bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]"
              : "border-primary/50 bg-background",
          )}
          initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: reduceMotion ? 0.01 : 0.4, delay: 0.05 * index, ease }}
        >
          {item.current && !reduceMotion ? (
            <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
          ) : null}
        </motion.span>
      </div>

      <motion.div
        initial={
          reduceMotion
            ? { opacity: 0 }
            : { opacity: 0, x: 18, filter: "blur(4px)" }
        }
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.55,
          delay: reduceMotion ? 0 : 0.08 + 0.06 * index,
          ease,
        }}
        className={cn(!isLast && "pb-8 sm:pb-10")}
      >
        <ExperienceCard item={item} />
      </motion.div>
    </li>
  );
}
