"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { SKILLS } from "@/lib/content";

export default function Skills() {
  const [active, setActive] = useState<string>(SKILLS[0].id);
  const current = SKILLS.find((c) => c.id === active) ?? SKILLS[0];

  return (
    <section id="skills" className="border-b border-line bg-surface">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-7 px-6 py-[72px]">
        <SectionHeading eyebrow="Skills" title="What I work with" />

        <div role="group" aria-label="Skill category" className="flex flex-wrap gap-2.5">
          {SKILLS.map((cat) => {
            const on = cat.id === active;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(cat.id)}
                className={`min-h-11 cursor-pointer rounded-full border px-[18px] text-[15px] font-semibold transition-colors hover:border-accent ${
                  on
                    ? "border-accent bg-accent text-on-accent"
                    : "border-line2 bg-surface text-ink hover:text-accent"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div
          aria-live="polite"
          className="flex min-h-[132px] flex-col gap-4 rounded-2xl border border-line bg-bg p-7"
        >
          <p className="m-0 text-muted">{current.note}</p>
          <ul key={current.id} className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            {current.items.map((item) => (
              <li
                key={item}
                className="fade rounded-lg border border-line bg-surface px-4 py-2 text-[15px] font-semibold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
