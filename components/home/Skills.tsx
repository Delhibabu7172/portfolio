import { SkillCategoryCard } from "@/components/home/skills/SkillCategoryCard";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { skillsContent } from "@/data/skills";

export function Skills() {
  const { eyebrow, title, support, categories } = skillsContent;

  return (
    <Section id="skills" ariaLabel="Skills" className="border-b border-border/60">
      <SectionHeading eyebrow={eyebrow} title={title} support={support} />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
        {categories.map((category, index) => (
          <Reveal key={category.id} delay={0.05 * index} className="h-full">
            <SkillCategoryCard category={category} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
