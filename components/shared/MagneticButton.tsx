"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  href,
  children,
  className,
  variant = "primary",
}: MagneticButtonProps) {
  const reduceMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.4 });

  const onMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.22);
    y.set(offsetY * 0.22);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-md px-5 text-small font-medium",
        "transition-colors duration-base ease-out",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-primary-hover",
        variant === "secondary" &&
          "border border-border bg-transparent text-foreground hover:border-foreground/25 hover:bg-muted/60",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}
