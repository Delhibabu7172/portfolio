import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/shared/Reveal";
import type { Project } from "@/types/project";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-2">
      {projects.map((project, index) => (
        <Reveal key={project.id} delay={0.06 * index} className="h-full">
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
