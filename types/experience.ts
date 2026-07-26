export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  current?: boolean;
  achievements: string[];
  technologies: string[];
};

export type ExperienceContent = {
  eyebrow: string;
  title: string;
  support: string;
  items: ExperienceItem[];
};
