"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { JOURNEY } from "@/lib/content";

export default function Journey() {
  const [year, setYear] = useState<string>(JOURNEY[JOURNEY.length - 1].year);
  const current = JOURNEY.find((j) => j.year === year) ?? JOURNEY[JOURNEY.length - 1];

  return (
    <section id="journey" className="border-y border-line bg-surface">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-7 px-6 py-[72px]">
        <SectionHeading
          eyebrow="Journey"
          title="How I got here"
          hint="Pick a year to see what happened."
        />

        <div role="group" aria-label="Year" className="flex flex-wrap gap-3">
          {JOURNEY.map((j) => {
            const on = j.year === year;
            return (
              <button
                key={j.year}
                type="button"
                aria-pressed={on}
                onClick={() => setYear(j.year)}
                className={`min-h-12 min-w-[88px] cursor-pointer rounded-xl border px-4 font-heading text-lg font-bold transition-colors hover:border-accent ${
                  on
                    ? "border-accent bg-accent text-on-accent"
                    : "border-line2 bg-surface text-ink hover:text-accent"
                }`}
              >
                {j.year}
              </button>
            );
          })}
        </div>

        <div
          aria-live="polite"
          className="min-h-[150px] rounded-2xl border border-l-4 border-line border-l-accent bg-bg p-8"
        >
          <div key={current.year} className="fade flex flex-col gap-2">
            <h3 className="m-0 font-heading text-2xl font-bold leading-[1.2]">
              {current.title}
            </h3>
            <p className="m-0 max-w-[720px] text-muted">{current.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
