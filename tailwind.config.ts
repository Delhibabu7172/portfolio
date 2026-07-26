import type { Config } from "tailwindcss";

/**
 * Design System → Tailwind theme map.
 * Color / radius values read CSS variables from styles/globals.css.
 * Breakpoints follow Tailwind defaults (mobile-first).
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "72rem",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        display: [
          "var(--text-display)",
          {
            lineHeight: "var(--leading-display)",
            letterSpacing: "var(--tracking-display)",
            fontWeight: "800",
          },
        ],
        h1: [
          "var(--text-h1)",
          {
            lineHeight: "var(--leading-heading)",
            letterSpacing: "var(--tracking-heading)",
            fontWeight: "700",
          },
        ],
        h2: [
          "var(--text-h2)",
          {
            lineHeight: "var(--leading-heading)",
            letterSpacing: "var(--tracking-heading)",
            fontWeight: "600",
          },
        ],
        body: [
          "var(--text-body)",
          {
            lineHeight: "var(--leading-body)",
          },
        ],
        small: [
          "var(--text-small)",
          {
            lineHeight: "var(--leading-tight)",
          },
        ],
        mono: [
          "var(--text-mono)",
          {
            letterSpacing: "var(--tracking-mono)",
          },
        ],
      },
      spacing: {
        section: "var(--section-y)",
        "section-lg": "var(--section-y-lg)",
        gutter: "var(--gutter)",
        "gutter-lg": "var(--gutter-lg)",
      },
      maxWidth: {
        content: "var(--container-content)",
        narrow: "var(--container-narrow)",
        wide: "var(--container-wide)",
        measure: "var(--measure)",
      },
      borderRadius: {
        none: "var(--radius-none)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        DEFAULT: "var(--radius)",
      },
      boxShadow: {
        none: "var(--shadow-none)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        glow: "var(--shadow-glow)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
        slow: "var(--duration-slow)",
      },
    },
  },
  plugins: [],
};

export default config;
