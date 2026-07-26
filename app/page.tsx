import { About } from "@/components/home/About";
import { Experience } from "@/components/home/Experience";
import { Hero } from "@/components/home/Hero";
import { Skills } from "@/components/home/Skills";
import { siteConfig } from "@/data/site";

/**
 * Home composition.
 * Hero, About, Experience, and Skills are live; remaining sections are placeholders.
 */
export default function HomePage() {
  const liveSections = new Set(["about", "experience", "skills"]);
  const pendingSections = siteConfig.nav.filter(
    (item) => !liveSections.has(item.sectionId),
  );

  return (
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Skills />

      {pendingSections.map((item) => (
        <section
          key={item.sectionId}
          id={item.sectionId}
          aria-label={item.label}
          className="flex min-h-[70vh] scroll-mt-24 items-center border-b border-border/60 px-gutter py-section lg:px-gutter-lg lg:py-section-lg"
        >
          <div className="mx-auto w-full max-w-content">
            <p className="text-small uppercase tracking-[0.14em] text-muted-foreground">
              Section
            </p>
            <h2 className="mt-3 font-display text-h1 text-foreground">{item.label}</h2>
            <p className="mt-3 max-w-measure text-body text-muted-foreground">
              Placeholder content so navigation and scroll targets keep working.
              Real section UI will replace this later.
            </p>
          </div>
        </section>
      ))}
    </main>
  );
}
