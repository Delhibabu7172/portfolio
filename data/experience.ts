import type { ExperienceContent } from "@/types/experience";

export const experienceContent: ExperienceContent = {
  eyebrow: "Experience",
  title: "Roles that shaped the craft",
  support:
    "A focused path through product teams — shipping interfaces that hold up under real users and real constraints.",
  items: [
    {
      id: "senior-frontend",
      company: "Northline Digital",
      role: "Senior Frontend Engineer",
      location: "Remote",
      start: "2023",
      end: "Present",
      current: true,
      achievements: [
        "Led the design-system rollout across three product surfaces, cutting UI debt and speeding feature delivery.",
        "Owned Core Web Vitals improvements that moved LCP under 2.5s on the primary marketing funnel.",
        "Mentored engineers on component architecture, accessibility reviews, and motion guidelines.",
      ],
      technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: "frontend-engineer",
      company: "Cascade Labs",
      role: "Frontend Engineer",
      location: "Hybrid",
      start: "2021",
      end: "2023",
      achievements: [
        "Built the customer dashboard from zero — auth flows, data views, and realtime status panels.",
        "Introduced reusable form and table primitives that became the team’s default UI kit.",
        "Partnered with design to ship a responsive redesign without regressing conversion.",
      ],
      technologies: ["React", "TypeScript", "Redux", "Styled Components", "Jest"],
    },
    {
      id: "ui-developer",
      company: "Brightpath Studio",
      role: "UI Developer",
      location: "On-site",
      start: "2019",
      end: "2021",
      achievements: [
        "Delivered marketing and product UIs for SaaS clients with tight launch windows.",
        "Established accessible component patterns that reduced QA bounce-backs on forms and modals.",
        "Collaborated daily with designers to translate high-fidelity comps into production CSS.",
      ],
      technologies: ["JavaScript", "React", "Sass", "Webpack", "REST APIs"],
    },
  ],
};
