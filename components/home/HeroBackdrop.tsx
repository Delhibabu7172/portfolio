"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type HeroBackdropProps = {
  children: React.ReactNode;
};

export function HeroBackdrop({ children }: HeroBackdropProps) {
  const reduceMotion = usePrefersReducedMotion();
  const mouseX = useMotionValue(32);
  const mouseY = useMotionValue(28);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const glowPrimary = useMotionTemplate`radial-gradient(42% 36% at ${springX}% ${springY}%, hsl(var(--atmosphere-spot)), transparent 70%)`;
  const glowSecondary = useMotionTemplate`radial-gradient(32% 28% at 78% 24%, hsl(172 66% 50% / 0.05), transparent 72%)`;

  useEffect(() => {
    if (reduceMotion) return;

    const onMove = (event: PointerEvent) => {
      mouseX.set((event.clientX / window.innerWidth) * 100);
      mouseY.set((event.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY, reduceMotion]);

  return (
    <div className="relative isolate min-h-[100svh] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-background"
      />

      {reduceMotion ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(42% 36% at 30% 28%, hsl(var(--atmosphere-spot)), transparent 70%), radial-gradient(32% 28% at 78% 24%, hsl(172 66% 50% / 0.05), transparent 72%)",
          }}
        />
      ) : (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ backgroundImage: glowPrimary }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ backgroundImage: glowSecondary }}
          />
        </>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--atmosphere-grid)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--atmosphere-grid)) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 75% 60% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent"
      />

      {children}
    </div>
  );
}
