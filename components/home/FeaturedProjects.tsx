import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getFeaturedProjects, projectsContent } from "@/data/projects";

export function FeaturedProjects() {
  const { eyebrow, title, support } = projectsContent;
  const projects = getFeaturedProjects();

  return (
    <Section
      id="projects"
      ariaLabel="Featured projects"
      className="border-b border-border/60"
    >
      <SectionHeading eyebrow={eyebrow} title={title} support={support} />
      <div className="mt-10 md:mt-12">
        <ProjectGrid projects={projects} />
      </div>
    </Section>
  );
}
