import { siteConfig } from "@/data/site";

/**
 * Placeholder sections for navbar scroll-spy only.
 * Hero and full section content come in later steps.
 */
export default function HomePage() {
  return (
    <main id="main">
      <div id="top" className="h-16 md:h-[4.25rem]" aria-hidden="true" />

      {siteConfig.nav.map((item) => (
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
              Placeholder content so the sticky navbar active state can be verified.
              Real section UI will replace this later.
            </p>
          </div>
        </section>
      ))}
    </main>
  );
}
