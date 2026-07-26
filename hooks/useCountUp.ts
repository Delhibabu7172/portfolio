"use client";

import { useEffect, useRef, useState } from "react";

type UseCountUpOptions = {
  target: number;
  active: boolean;
  durationMs?: number;
  enabled?: boolean;
};

/** Animates a number from 0 → target once `active` becomes true. */
export function useCountUp({
  target,
  active,
  durationMs = 1100,
  enabled = true,
}: UseCountUpOptions) {
  const [value, setValue] = useState(enabled ? 0 : target);
  const frameRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!enabled) {
      setValue(target);
      return;
    }

    if (!active || startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [active, target, durationMs, enabled]);

  return value;
}
