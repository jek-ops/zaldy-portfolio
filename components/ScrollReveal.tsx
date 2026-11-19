"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Fades elements marked with data-reveal into view as they scroll on screen.
// CSS hides them only while JavaScript is running and the visitor allows motion
// (see globals.css), so with scripts off or reduced motion on, everything is simply visible.

function show(el: Element) {
  const delay = parseInt((el as HTMLElement).style.getPropertyValue("--reveal-delay"), 10) || 0;
  el.classList.add("in-view");
  // After the fade finishes, drop the attribute so hover effects on the element work normally again.
  window.setTimeout(() => {
    el.removeAttribute("data-reveal");
    el.classList.remove("in-view");
  }, delay + 1200);
}

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    (window as unknown as { __reveal?: boolean }).__reveal = true; // tells the failsafe in layout.tsx that scripts work
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (els.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
