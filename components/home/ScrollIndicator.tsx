"use client";

import { motion } from "framer-motion";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type ScrollIndicatorProps = {
  href?: string;
  className?: string;
};

export function ScrollIndicator({
  href = "#about",
  className,
}: ScrollIndicatorProps) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <a
      href={href}
      aria-label="Scroll to next section"
      className={cn(
        "group inline-flex flex-col items-center gap-2 text-muted-foreground transition-colors duration-base hover:text-foreground",
        className,
      )}
    >
      <span className="text-mono uppercase tracking-[0.16em]">Scroll</span>
      <span className="relative flex h-10 w-6 items-start justify-center rounded-full border border-border/80 pt-2">
        <motion.span
          aria-hidden="true"
          className="block size-1 rounded-full bg-primary"
          animate={reduceMotion ? { opacity: 1 } : { y: [0, 12, 0], opacity: [1, 0.4, 1] }}
          transition={
            reduceMotion
              ? { duration: 0.01 }
              : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </span>
    </a>
  );
}
