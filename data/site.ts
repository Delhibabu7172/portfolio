import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Delhi Babu",
  title: "Delhi Babu — Frontend Engineer",
  description:
    "Premium developer portfolio focused on thoughtful UI, performance, and craft.",
  nav: [
    { label: "About", href: "#about", sectionId: "about" },
    { label: "Experience", href: "#experience", sectionId: "experience" },
    { label: "Skills", href: "#skills", sectionId: "skills" },
    { label: "Projects", href: "#projects", sectionId: "projects" },
    { label: "Contact", href: "#contact", sectionId: "contact" },
  ],
  cta: {
    label: "Get in touch",
    href: "#contact",
  },
};
