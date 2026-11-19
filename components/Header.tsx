import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import ThemeToggle from "@/components/ThemeToggle";
import { SITE } from "@/lib/config";

export default function Header() {
  return (
    <header className="z-40 border-b border-line bg-surface lg:sticky lg:top-0">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-2.5"
      >
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2.5 font-heading text-xl font-bold text-ink no-underline"
        >
          <span
            aria-hidden="true"
            className="inline-flex size-8 items-center justify-center rounded-lg bg-accent text-[15px] text-on-accent"
          >
            {SITE.monogram}
          </span>
          {SITE.name}
        </Link>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <NavLinks />
          <ThemeToggle />
          <Link
            href="/#contact"
            className="btn inline-flex min-h-11 items-center rounded-lg bg-accent px-5 font-semibold text-on-accent no-underline"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
