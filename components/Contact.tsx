"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT } from "@/lib/content";
import { rd } from "@/lib/reveal";
import { SITE, SOCIAL } from "@/lib/config";

type CopyState = "idle" | "copied" | "failed";

const linkCls =
  "inline-flex min-h-11 items-center font-semibold text-white underline underline-offset-4";
const placeholderCls =
  "inline-flex min-h-11 items-center rounded-md border border-dashed border-[#94a3b8] px-3 text-[#cbd5e1]";

export default function Contact() {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copyEmail() {
    let next: CopyState = "copied";
    try {
      await navigator.clipboard.writeText(SITE.email);
    } catch {
      next = "failed";
    }
    setState(next);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), next === "copied" ? 2000 : 4000);
  }

  const label =
    state === "copied"
      ? "Copied"
      : state === "failed"
        ? "Copy failed. Select the email above instead."
        : "Copy email";

  return (
    <section id="contact" className="bg-band text-white">
      <div className="mx-auto flex max-w-[1120px] flex-col items-start gap-6 px-6 py-[88px]">
        <h2 data-reveal className="m-0 max-w-[680px] font-heading text-[clamp(32px,4.4vw,48px)] font-bold leading-[1.12] tracking-[-0.02em]">
          {CONTACT.heading}
        </h2>
        <p data-reveal style={rd(100)} className="m-0 max-w-[560px] text-lg text-[#cbd5e1]">
          Email is the fastest way to reach me.
          {CONTACT.replyTime ? ` I usually reply within ${CONTACT.replyTime}.` : ""}
        </p>

        <div data-reveal style={rd(200)} className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${SITE.email}`}
            className="btn inline-flex min-h-[52px] items-center rounded-[10px] bg-white px-6 font-semibold text-[#0f172a] no-underline"
          >
            {SITE.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="btn inline-flex min-h-[52px] items-center gap-2 rounded-[10px] border border-[#94a3b8] bg-transparent px-[22px] font-semibold text-white"
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
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15V6a2 2 0 0 1 2-2h9" />
            </svg>
            <span aria-live="polite">{label}</span>
          </button>
        </div>

        <div data-reveal style={rd(300)} className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {SOCIAL.github ? (
            <a href={SOCIAL.github} className={linkCls}>
              GitHub
            </a>
          ) : (
            <span className={placeholderCls}>[YOUR GITHUB URL]</span>
          )}
        </div>
      </div>
    </section>
  );
}
