export type ProjectLinks = {
  github?: string;
  live?: string;
  /** Internal case-study path, e.g. /projects/aurora */
  caseStudy: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  year: string;
  role: string;
  featured: boolean;
  thumbnail: {
    src: string;
    alt: string;
  };
  links: ProjectLinks;
};

export type ProjectsContent = {
  eyebrow: string;
  title: string;
  support: string;
  items: Project[];
};
