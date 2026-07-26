"use client";

import { useEffect, useState } from "react";

type UseActiveSectionOptions = {
  sectionIds: string[];
  /** Offset for sticky header so the active section feels correct */
  rootMargin?: string;
  threshold?: number | number[];
};

export function useActiveSection({
  sectionIds,
  rootMargin = "-40% 0px -55% 0px",
  threshold = [0, 0.25, 0.5, 0.75, 1],
}: UseActiveSectionOptions) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  const sectionKey = sectionIds.join("|");

  useEffect(() => {
    const ids = sectionKey ? sectionKey.split("|") : [];
    if (ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let nextActive = ids[0] ?? "";
        let highestRatio = -1;

        for (const id of ids) {
          const ratio = visibility.get(id) ?? 0;
          if (ratio > highestRatio) {
            highestRatio = ratio;
            nextActive = id;
          }
        }

        if (highestRatio > 0) {
          setActiveId(nextActive);
        }
      },
      { rootMargin, threshold },
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sectionKey, rootMargin, threshold]);

  return activeId;
}
