"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  onNavigate?: () => void;
  reduceMotion?: boolean;
  /** Shared layoutId scope — keep desktop/mobile separate to avoid conflicts */
  indicatorId?: string;
  className?: string;
};

export function NavLink({
  href,
  label,
  isActive,
  onNavigate,
  reduceMotion = false,
  indicatorId = "nav-active-indicator",
  className,
}: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "true" : undefined}
      className={cn(
        "relative inline-flex min-h-11 items-center px-3 text-small font-medium transition-colors duration-base ease-out",
        "text-muted-foreground hover:text-foreground focus-visible:text-foreground",
        isActive && "text-foreground",
        className,
      )}
    >
      <span className="relative z-10">{label}</span>

      {isActive ? (
        <motion.span
          layoutId={reduceMotion ? undefined : indicatorId}
          className="absolute inset-x-2 -bottom-px h-px bg-primary"
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 380, damping: 34 }
          }
          aria-hidden="true"
        />
      ) : null}
    </a>
  );
}
