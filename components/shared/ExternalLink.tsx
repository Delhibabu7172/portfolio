import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
};

export function ExternalLink({
  href,
  children,
  className,
  showIcon = true,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 text-small font-medium text-muted-foreground",
        "transition-colors duration-base hover:text-primary",
        className,
      )}
    >
      {children}
      {showIcon ? <ArrowUpRight className="size-3.5" aria-hidden="true" /> : null}
    </a>
  );
}
