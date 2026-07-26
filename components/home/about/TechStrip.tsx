"use client";

import { motion } from "framer-motion";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type TechStripProps = {
  technologies: string[];
  className?: string;
};

export function TechStrip({ technologies, className }: TechStripProps) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.ul
      className={cn("flex flex-wrap gap-2", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduceMotion ? 0 : 0.05 },
        },
      }}
    >
      {technologies.map((tech) => (
        <motion.li
          key={tech}
          variants={{
            hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
          }}
          className={cn(
            "rounded-md border border-border bg-muted/50 px-3 py-1.5",
            "font-mono text-mono text-muted-foreground",
          )}
        >
          {tech}
        </motion.li>
      ))}
    </motion.ul>
  );
}
