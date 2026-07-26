"use client";

import { motion } from "framer-motion";

import { FloatingIcons } from "@/components/home/FloatingIcons";
import { HeroBackdrop } from "@/components/home/HeroBackdrop";
import { HeroTerminal } from "@/components/home/HeroTerminal";
import { ScrollIndicator } from "@/components/home/ScrollIndicator";
import { Container } from "@/components/shared/Container";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { heroContent } from "@/data/hero";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduceMotion = usePrefersReducedMotion();

  const fadeUp = (delay: number) =>
    reduceMotion
      ? { initial: false as const, animate: { opacity: 1, y: 0 }, transition: { duration: 0.01 } }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease },
        };

  return (
    <HeroBackdrop>
      <FloatingIcons />

      <section
        id="top"
        aria-labelledby="hero-heading"
        className="relative flex min-h-[100svh] flex-col justify-center pb-24 pt-24 md:pb-28 md:pt-28"
      >
        <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
          <div className="relative z-10 max-w-2xl">
            <motion.h1
              id="hero-heading"
              className="text-display text-foreground"
              {...fadeUp(0.05)}
            >
              {heroContent.name}
            </motion.h1>

            <motion.p
              className="mt-5 max-w-measure text-body text-muted-foreground md:mt-6 md:text-[1.125rem]"
              {...fadeUp(0.16)}
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3 md:mt-10"
              {...fadeUp(0.28)}
            >
              {heroContent.ctas.map((cta) => (
                <MagneticButton
                  key={cta.href + cta.label}
                  href={cta.href}
                  variant={cta.variant}
                >
                  {cta.label}
                </MagneticButton>
              ))}
            </motion.div>
          </div>

          <div className="relative z-10 flex justify-start lg:justify-end">
            <HeroTerminal
              title={heroContent.terminal.title}
              lines={heroContent.terminal.lines}
            />
          </div>
        </Container>

        <div className="absolute inset-x-0 bottom-6 flex justify-center md:bottom-8">
          <motion.div {...fadeUp(0.45)}>
            <ScrollIndicator href="#about" />
          </motion.div>
        </div>

        <p className="sr-only">
          {heroContent.terminal.lines
            .filter((line) => line.type !== "blank")
            .map((line) =>
              line.type === "command" ? `$ ${line.text}` : line.text,
            )
            .join(". ")}
        </p>
      </section>
    </HeroBackdrop>
  );
}
