export type HeroCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type TerminalLine = {
  type: "command" | "output" | "blank";
  text: string;
};

export type FloatingIconConfig = {
  id: string;
  icon: "code" | "braces" | "cpu" | "git" | "sparkles" | "layers";
  className: string;
  duration: number;
  delay: number;
  amplitude: number;
};

export type HeroContent = {
  name: string;
  subtitle: string;
  ctas: HeroCta[];
  terminal: {
    title: string;
    lines: TerminalLine[];
  };
};
