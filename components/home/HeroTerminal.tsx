"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useTypingSequence } from "@/hooks/useTypingSequence";
import { cn } from "@/lib/utils";
import type { TerminalLine } from "@/types/hero";

type HeroTerminalProps = {
  title: string;
  lines: TerminalLine[];
  className?: string;
};

export function HeroTerminal({ title, lines, className }: HeroTerminalProps) {
  const reduceMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { typedLines, showCaret } = useTypingSequence({
    lines,
    enabled: !reduceMotion,
  });

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 18 });
  const transform = useMotionTemplate`perspective(1200px) rotateX(${springX}deg) rotateY(${springY}deg)`;

  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 8);
    rotateX.set((0.5 - py) * 6);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={reduceMotion ? undefined : { transform }}
      initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: reduceMotion ? 0.01 : 0.7, delay: reduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn("relative w-full max-w-xl", className)}
      aria-label="Animated developer terminal"
    >
      <div
        className={cn(
          "overflow-hidden rounded-xl border border-[hsl(var(--glass-border))]",
          "bg-[hsl(var(--glass-bg))] shadow-glow backdrop-blur-md",
        )}
      >
        <div className="flex items-center gap-2 border-b border-border/80 px-4 py-3">
          <span className="size-2.5 rounded-full bg-foreground/15" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-foreground/15" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-foreground/15" aria-hidden="true" />
          <p className="ml-2 truncate font-mono text-mono text-muted-foreground">{title}</p>
        </div>

        <div className="space-y-1.5 px-4 py-5 font-mono text-mono leading-relaxed sm:px-5 sm:py-6">
          {typedLines.map((line, index) => {
            if (line.type === "blank") {
              return <div key={`blank-${index}`} className="h-3" aria-hidden="true" />;
            }

            const isCommand = line.type === "command";
            const isLast = index === typedLines.length - 1;

            return (
              <p
                key={`${line.type}-${index}`}
                className={cn(
                  isCommand ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {isCommand ? (
                  <span className="mr-2 text-primary" aria-hidden="true">
                    $
                  </span>
                ) : (
                  <span className="mr-2 text-transparent select-none" aria-hidden="true">
                    $
                  </span>
                )}
                <span>{line.visibleText}</span>
                {showCaret && isLast ? (
                  <span
                    className="ml-0.5 inline-block h-[1em] w-[0.55ch] translate-y-[0.1em] bg-primary align-middle animate-pulse"
                    aria-hidden="true"
                  />
                ) : null}
              </p>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
