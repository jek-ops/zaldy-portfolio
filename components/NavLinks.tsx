"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/config";

// The header's section links. On the home page the link for the section you are reading
// gets an accent underline and aria-current, so you always know where you are.
export default function NavLinks() {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActive(null);
      return;
    }
    const ids = [...NAV_LINKS.map((l) => l.href.split("#")[1]), "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // A section counts as current while it crosses a band around the middle of the window.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));

    function onScroll() {
      if (window.scrollY < 200) setActive(null); // back at the hero: nothing is highlighted
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return (
    <>
      {NAV_LINKS.map((link) => {
        const on = active === link.href.split("#")[1];
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={on ? "location" : undefined}
            className={`inline-flex min-h-11 items-center border-b-2 font-medium no-underline transition-colors hover:text-accent ${
              on ? "border-accent text-accent" : "border-transparent text-ink"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
