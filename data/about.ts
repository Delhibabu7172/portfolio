import type { AboutContent } from "@/types/about";

export const aboutContent: AboutContent = {
  eyebrow: "About",
  title: "Engineering interfaces with intent",
  bio: [
    "I build production-grade frontends where motion, performance, and accessibility are treated as features, not afterthoughts.",
    "My focus is turning complex products into interfaces that feel effortless — clean architecture underneath, considered detail on the surface.",
  ],
  profile: {
    name: "Delhi Babu",
    role: "Frontend Engineer",
    location: "India · Remote",
    initials: "DB",
    availability: "Available for new work",
  },
  stats: [
    { id: "experience", label: "Years experience", value: 6, suffix: "+", icon: "calendar" },
    { id: "projects", label: "Projects shipped", value: 40, suffix: "+", icon: "folder" },
    { id: "technologies", label: "Technologies", value: 20, suffix: "+", icon: "layers" },
  ],
  highlights: [
    {
      id: "ui-craft",
      title: "UI craft",
      description: "Design-system thinking, pixel discipline, and reusable component architecture.",
      icon: "sparkles",
    },
    {
      id: "performance",
      title: "Performance",
      description: "Fast loads, low bundle weight, and Core Web Vitals held as a constraint.",
      icon: "gauge",
    },
    {
      id: "motion",
      title: "Motion",
      description: "Purposeful animation that guides attention without ever getting in the way.",
      icon: "wand",
    },
  ],
  technologies: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Radix UI",
    "Vitest",
  ],
};
