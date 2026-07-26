export type SkillCategoryId =
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "ai"
  | "deployment";

export type SkillCategory = {
  id: SkillCategoryId;
  title: string;
  description: string;
  icon: SkillCategoryId;
  skills: string[];
};

export type SkillsContent = {
  eyebrow: string;
  title: string;
  support: string;
  categories: SkillCategory[];
};
