import type { ProjectsContent } from "@/types/project";

export const projectsContent: ProjectsContent = {
  eyebrow: "Projects",
  title: "Selected work",
  support:
    "A few builds that show how I think about product UI — structure, motion, and polish under real constraints.",
  items: [
    {
      id: "aurora",
      slug: "aurora",
      title: "Aurora Analytics",
      summary:
        "A realtime analytics dashboard with dense data made calm and scannable.",
      description:
        "Designed and built a multi-tenant analytics surface focused on clarity at scale — filterable charts, keyboard-friendly tables, and a design system that kept velocity high as the product grew.",
      stack: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Framer Motion"],
      year: "2024",
      role: "Lead Frontend",
      featured: true,
      thumbnail: {
        src: "/images/projects/aurora.svg",
        alt: "Aurora Analytics project thumbnail",
      },
      links: {
        github: "https://github.com",
        live: "https://example.com",
        caseStudy: "/projects/aurora",
      },
    },
    {
      id: "folio",
      slug: "folio",
      title: "Folio Commerce",
      summary:
        "Headless storefront with conversion-minded UX and sub-second interactions.",
      description:
        "Shipped a performant commerce experience on a headless stack — product discovery, cart flows, and checkout states tuned for mobile-first conversion without sacrificing brand presence.",
      stack: ["React", "TypeScript", "Shopify", "TanStack Query", "Vite"],
      year: "2023",
      role: "Frontend Engineer",
      featured: true,
      thumbnail: {
        src: "/images/projects/folio.svg",
        alt: "Folio Commerce project thumbnail",
      },
      links: {
        github: "https://github.com",
        live: "https://example.com",
        caseStudy: "/projects/folio",
      },
    },
    {
      id: "signal",
      slug: "signal",
      title: "Signal Ops",
      summary:
        "An incident ops console that turns noisy alerts into actionable timelines.",
      description:
        "Built the operator console for on-call teams — alert grouping, timeline scrubbing, and status broadcasts with accessibility and low-latency updates as first-class requirements.",
      stack: ["Next.js", "Node.js", "PostgreSQL", "WebSockets", "Zod"],
      year: "2023",
      role: "Full-stack Frontend",
      featured: true,
      thumbnail: {
        src: "/images/projects/signal.svg",
        alt: "Signal Ops project thumbnail",
      },
      links: {
        github: "https://github.com",
        live: "https://example.com",
        caseStudy: "/projects/signal",
      },
    },
  ],
};

export function getFeaturedProjects() {
  return projectsContent.items.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projectsContent.items.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projectsContent.items.map((project) => project.slug);
}
