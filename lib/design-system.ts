/**
 * Design System — Ink & Signal
 * Documented token map for TypeScript consumers.
 * Source of truth for runtime styles remains styles/globals.css.
 */

export const designSystem = {
  name: "Ink & Signal",
  mode: "dark-only",

  colors: {
    background: "#07090C",
    foreground: "#E8EEF6",
    muted: "#0E1218",
    mutedForeground: "#9AA6B2",
    border: "#1C2430",
    primary: "#2DD4BF",
    primaryHover: "#5EEAD4",
    accentMuted: "#134E4A",
    destructive: "#F87171",
  },

  typography: {
    display: "Syne",
    sans: "IBM Plex Sans",
    mono: "IBM Plex Mono",
    measure: "65ch",
  },

  spacing: {
    baseUnit: 4,
    sectionY: { mobile: 64, desktop: 96 },
    gutter: { mobile: 16, desktop: 32 },
  },

  radius: {
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
  },

  container: {
    content: 1152,
    narrow: 672,
    wide: 1280,
  },

  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  },
} as const;

export type DesignSystem = typeof designSystem;
