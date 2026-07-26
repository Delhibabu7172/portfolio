"use client";

import { useEffect, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { NavLink } from "@/components/layout/NavLink";
import { useLockedBody } from "@/hooks/useLockedBody";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/site";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  activeId: string;
  cta: { label: string; href: string };
  reduceMotion: boolean;
};

export function MobileNav({
  open,
  onClose,
  items,
  activeId,
  cta,
  reduceMotion,
}: MobileNavProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLockedBody(open);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  const duration = reduceMotion ? 0.01 : 0.28;

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <motion.button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-background/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration }}
            onClick={onClose}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={cn(
              "absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col",
              "glass border-l border-border shadow-glow",
            )}
            initial={reduceMotion ? { opacity: 0 } : { x: "100%" }}
            animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between border-b border-border px-gutter py-4">
              <p id={titleId} className="text-small font-medium text-foreground">
                Menu
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className={cn(
                  "inline-flex size-11 items-center justify-center rounded-md",
                  "text-muted-foreground transition-colors duration-base hover:text-foreground",
                )}
                aria-label="Close navigation menu"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 px-3 py-6">
              {items.map((item, index) => (
                <motion.div
                  key={item.sectionId}
                  initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: reduceMotion ? 0 : 0.04 * index,
                    duration: reduceMotion ? 0.01 : 0.28,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <NavLink
                    href={item.href}
                    label={item.label}
                    isActive={activeId === item.sectionId}
                    onNavigate={onClose}
                    reduceMotion={reduceMotion}
                    indicatorId="nav-active-mobile"
                    className="w-full justify-start px-4 text-base"
                  />
                </motion.div>
              ))}
            </nav>

            <div className="border-t border-border p-gutter">
              <a
                href={cta.href}
                onClick={onClose}
                className={cn(
                  "inline-flex h-11 w-full items-center justify-center rounded-md",
                  "bg-primary px-4 text-small font-medium text-primary-foreground",
                  "transition-colors duration-base hover:bg-primary-hover",
                )}
              >
                {cta.label}
              </a>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
