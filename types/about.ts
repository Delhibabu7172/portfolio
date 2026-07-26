export type AboutStat = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: "calendar" | "folder" | "layers";
};

export type AboutHighlight = {
  id: string;
  title: string;
  description: string;
  icon: "sparkles" | "gauge" | "wand";
};

export type AboutProfile = {
  name: string;
  role: string;
  location: string;
  initials: string;
  availability: string;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  bio: string[];
  profile: AboutProfile;
  stats: AboutStat[];
  highlights: AboutHighlight[];
  technologies: string[];
};
