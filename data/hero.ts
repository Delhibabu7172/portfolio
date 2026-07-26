import type { FloatingIconConfig, HeroContent } from "@/types/hero";

export const heroContent: HeroContent = {
  name: "Delhi Babu",
  subtitle:
    "Frontend engineer crafting refined interfaces with performance, motion, and clarity.",
  ctas: [
    { label: "View projects", href: "#projects", variant: "primary" },
    { label: "Get in touch", href: "#contact", variant: "secondary" },
  ],
  terminal: {
    title: "portfolio — zsh",
    lines: [
      { type: "command", text: "whoami" },
      { type: "output", text: "delhi-babu" },
      { type: "blank", text: "" },
      { type: "command", text: "cat role.txt" },
      { type: "output", text: "Frontend Engineer" },
      { type: "blank", text: "" },
      { type: "command", text: "ls stack/" },
      { type: "output", text: "TypeScript  Next.js  React  Tailwind" },
      { type: "blank", text: "" },
      { type: "command", text: "echo $STATUS" },
      { type: "output", text: "Open to thoughtful collaborations" },
    ],
  },
};

export const heroFloatingIcons: FloatingIconConfig[] = [
  {
    id: "code",
    icon: "code",
    className: "left-[8%] top-[22%] hidden lg:block",
    duration: 7.5,
    delay: 0.2,
    amplitude: 10,
  },
  {
    id: "braces",
    icon: "braces",
    className: "right-[10%] top-[18%] hidden md:block",
    duration: 8.2,
    delay: 0.6,
    amplitude: 12,
  },
  {
    id: "cpu",
    icon: "cpu",
    className: "left-[4%] bottom-[28%] hidden xl:block",
    duration: 9,
    delay: 1.1,
    amplitude: 14,
  },
  {
    id: "git",
    icon: "git",
    className: "right-[6%] bottom-[24%] hidden lg:block",
    duration: 7.8,
    delay: 0.4,
    amplitude: 11,
  },
  {
    id: "sparkles",
    icon: "sparkles",
    className: "left-[46%] top-[14%] hidden md:block",
    duration: 8.6,
    delay: 0.9,
    amplitude: 9,
  },
  {
    id: "layers",
    icon: "layers",
    className: "right-[42%] bottom-[16%] hidden xl:block",
    duration: 9.4,
    delay: 1.4,
    amplitude: 13,
  },
];
