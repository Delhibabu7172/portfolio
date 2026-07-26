"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";

import { MobileNav } from "@/components/layout/MobileNav";
import { NavLink } from "@/components/layout/NavLink";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const { scrollY } = useScroll();

  const sectionIds = useMemo(
    () => siteConfig.nav.map((item) => item.sectionId),
    [],
  );

  const activeId = useActiveSection({ sectionIds });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const openMobile = useCallback(() => setMobileOpen(true), []);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-base ease-out",
          scrolled || mobileOpen
            ? "border-border/80 bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/55"
            : "border-transparent bg-transparent",
        )}
        initial={reduceMotion ? false : { y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0.01 : 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <Container className="flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
          <a
            href="#top"
            className={cn(
              "font-display text-base font-bold tracking-tight text-foreground",
              "transition-opacity duration-base hover:opacity-80",
            )}
            aria-label={`${siteConfig.name} — Home`}
          >
            {siteConfig.name}
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {siteConfig.nav.map((item) => (
              <NavLink
                key={item.sectionId}
                href={item.href}
                label={item.label}
                isActive={activeId === item.sectionId}
                reduceMotion={reduceMotion}
                indicatorId="nav-active-desktop"
              />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.cta.href}
              className={cn(
                "hidden h-10 items-center justify-center rounded-md px-4 md:inline-flex",
                "bg-primary text-small font-medium text-primary-foreground",
                "transition-colors duration-base hover:bg-primary-hover",
              )}
            >
              {siteConfig.cta.label}
            </a>

            <button
              type="button"
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-md md:hidden",
                "text-foreground transition-colors duration-base hover:bg-muted",
              )}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={openMobile}
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </motion.header>

      <div id="mobile-navigation">
        <MobileNav
          open={mobileOpen}
          onClose={closeMobile}
          items={siteConfig.nav}
          activeId={activeId}
          cta={siteConfig.cta}
          reduceMotion={reduceMotion}
        />
      </div>
    </>
  );
}
