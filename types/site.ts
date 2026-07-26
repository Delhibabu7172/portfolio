export type NavItem = {
  label: string;
  href: string;
  /** DOM id used for scroll-spy (without #) */
  sectionId: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  nav: NavItem[];
  cta: {
    label: string;
    href: string;
  };
};
