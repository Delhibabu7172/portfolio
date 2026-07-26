import { HighlightCard } from "@/components/home/about/HighlightCard";
import { ProfileCard } from "@/components/home/about/ProfileCard";
import { StatCard } from "@/components/home/about/StatCard";
import { TechStrip } from "@/components/home/about/TechStrip";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { aboutContent } from "@/data/about";

export function About() {
  const { eyebrow, title, bio, profile, stats, highlights, technologies } =
    aboutContent;

  return (
    <Section id="about" ariaLabel="About" className="border-b border-border/60">
      <SectionHeading eyebrow={eyebrow} title={title} />

      <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4 lg:row-span-2">
          <ProfileCard profile={profile} className="min-h-full" />
        </Reveal>

        <Reveal className="lg:col-span-8" delay={0.05}>
          <div className="glass flex h-full flex-col justify-center gap-4 rounded-xl p-6 shadow-glow sm:p-7">
            {bio.map((paragraph) => (
              <p key={paragraph} className="max-w-measure text-body text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <TechStrip technologies={technologies} className="mt-2" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-8">
          {stats.map((stat, index) => (
            <Reveal key={stat.id} delay={0.05 * index}>
              <StatCard stat={stat} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((highlight, index) => (
          <Reveal key={highlight.id} delay={0.05 * index}>
            <HighlightCard highlight={highlight} className="h-full" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
