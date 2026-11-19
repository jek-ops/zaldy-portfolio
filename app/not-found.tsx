import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: `Page not found | ${SITE.name}`,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="main" className="bg-blueprint border-b border-line">
      <div className="mx-auto flex min-h-[60vh] max-w-[1120px] flex-col items-start justify-center gap-6 px-6 py-20">
        <p className="m-0 text-sm font-semibold uppercase tracking-[0.08em] text-accent">
          Error 404
        </p>
        <h1 className="m-0 font-heading text-[clamp(34px,5vw,52px)] font-bold leading-[1.1] tracking-[-0.02em]">
          This page does not exist.
        </h1>
        <p className="m-0 max-w-[560px] text-lg text-muted">
          The link may be broken or the page may have moved. You can go back to the
          home page or look at my projects.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="btn inline-flex min-h-[52px] items-center rounded-[10px] bg-accent px-[26px] font-semibold text-on-accent no-underline"
          >
            Back to home
          </Link>
          <Link
            href="/#projects"
            className="btn inline-flex min-h-[52px] items-center rounded-[10px] border border-line2 bg-surface px-[26px] font-semibold text-ink no-underline"
          >
            See my projects
          </Link>
        </div>
      </div>
    </main>
  );
}
