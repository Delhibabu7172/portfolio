import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-gutter text-center">
      <p className="font-mono text-mono uppercase tracking-[0.16em] text-primary">
        404
      </p>
      <h1 className="mt-3 font-display text-h1 text-foreground">Page not found</h1>
      <p className="mt-3 max-w-measure text-body text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-small font-medium text-primary-foreground transition-colors duration-base hover:bg-primary-hover"
      >
        Back home
      </Link>
    </main>
  );
}
