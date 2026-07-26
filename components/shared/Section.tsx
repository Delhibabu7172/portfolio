import type { ReactNode } from "react";

import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  ariaLabel?: string;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "scroll-mt-24 py-section lg:py-section-lg",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
