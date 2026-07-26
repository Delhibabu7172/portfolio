"use client";

import {
  Braces,
  Code2,
  Cpu,
  GitBranch,
  Layers,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import { heroFloatingIcons } from "@/data/hero";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";
import type { FloatingIconConfig } from "@/types/hero";

const iconMap: Record<FloatingIconConfig["icon"], LucideIcon> = {
  code: Code2,
  braces: Braces,
  cpu: Cpu,
  git: GitBranch,
  sparkles: Sparkles,
  layers: Layers,
};

export function FloatingIcons() {
  const reduceMotion = usePrefersReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const parallaxY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (reduceMotion) return;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 14;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY, reduceMotion]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-[5]"
      style={reduceMotion ? undefined : { x: parallaxX, y: parallaxY }}
    >
      {heroFloatingIcons.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <motion.div
            key={item.id}
            className={cn("absolute text-foreground/20", item.className)}
            initial={{ opacity: 0 }}
            animate={
              reduceMotion
                ? { opacity: 0.35 }
                : {
                    opacity: 0.35,
                    y: [0, -item.amplitude, 0],
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0.01 }
                : {
                    opacity: { duration: 0.8, delay: item.delay },
                    y: {
                      duration: item.duration,
                      delay: item.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
          >
            <Icon className="size-7 stroke-[1.25] md:size-8" />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
