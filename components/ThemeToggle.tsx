"use client";

import { useEffect, useState } from "react";
import { THEME_STORAGE_KEY } from "@/lib/config";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // The inline script in layout.tsx already set data-theme; read it back here.
  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  function toggle() {
    const next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setDark(!dark);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage blocked: the choice still applies for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      className="btn inline-flex min-h-11 items-center gap-2 rounded-lg border border-line bg-surface2 px-3.5 text-[15px] font-semibold text-ink"
    >
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
      </svg>
      Dark mode
    </button>
  );
}
