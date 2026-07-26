import { TimelineItem } from "@/components/home/experience/TimelineItem";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { experienceContent } from "@/data/experience";

export function Experience() {
  const { eyebrow, title, support, items } = experienceContent;

  return (
    <Section
      id="experience"
      ariaLabel="Experience"
      className="border-b border-border/60"
    >
      <SectionHeading eyebrow={eyebrow} title={title} support={support} />

      <ol className="mt-10 list-none md:mt-12">
        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            isLast={index === items.length - 1}
          />
        ))}
      </ol>
    </Section>
  );
}
