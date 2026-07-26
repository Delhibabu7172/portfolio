import type { SkillsContent } from "@/types/skills";

export const skillsContent: SkillsContent = {
  eyebrow: "Skills",
  title: "A stack built for shipping",
  support:
    "Organized by domain — the tools I reach for when building polished, production interfaces.",
  categories: [
    {
      id: "frontend",
      title: "Frontend",
      description: "Interfaces, systems, and motion.",
      icon: "frontend",
      skills: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Radix UI",
      ],
    },
    {
      id: "backend",
      title: "Backend",
      description: "APIs and server logic when needed.",
      icon: "backend",
      skills: ["Node.js", "Express", "REST APIs", "Auth", "Server Actions"],
    },
    {
      id: "database",
      title: "Database",
      description: "Structured data and persistence.",
      icon: "database",
      skills: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "SQL"],
    },
    {
      id: "tools",
      title: "Tools",
      description: "Day-to-day craft and collaboration.",
      icon: "tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Vite", "ESLint"],
    },
    {
      id: "ai",
      title: "AI",
      description: "Assisted workflows and product features.",
      icon: "ai",
      skills: [
        "OpenAI API",
        "Prompt Engineering",
        "Cursor",
        "LangChain basics",
        "AI UX patterns",
      ],
    },
    {
      id: "deployment",
      title: "Deployment",
      description: "Ship, observe, and iterate.",
      icon: "deployment",
      skills: ["Vercel", "Docker", "CI/CD", "AWS basics", "Nginx"],
    },
  ],
};
