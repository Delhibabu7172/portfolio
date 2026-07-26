import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  support?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  support,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 font-mono text-mono uppercase tracking-[0.16em] text-primary">
          <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-h1 text-foreground">{title}</h2>
      {support ? (
        <p className="max-w-measure text-body text-muted-foreground">{support}</p>
      ) : null}
    </Reveal>
  );
}
