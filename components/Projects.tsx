"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";
import {
  PROJECTS,
  PROJECT_FILTERS,
  caseStudyHref,
  type ProjectFilter,
} from "@/lib/content";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | ProjectFilter>("all");
  const shown = PROJECTS.filter(
    (p) => filter === "all" || p.filters.includes(filter),
  );

  return (
    <section
      id="projects"
      className="mx-auto flex max-w-[1120px] flex-col gap-7 px-6 py-[72px]"
    >
      <SectionHeading eyebrow="Projects" title="Work I am proud of" />

      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div role="group" aria-label="Filter projects by type" className="flex flex-wrap gap-2.5">
          {PROJECT_FILTERS.map((f) => {
            const on = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(f.id)}
                className={`min-h-11 cursor-pointer rounded-full border px-[18px] text-[15px] font-semibold transition-colors hover:border-accent ${
                  on
                    ? "border-accent bg-accent text-on-accent"
                    : "border-line2 bg-surface text-ink hover:text-accent"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="m-0 text-sm font-medium text-muted">
          Showing {shown.length} of {PROJECTS.length} projects
        </p>
      </div>

      <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2">
        {shown.map((project) => (
          <li key={project.slug} className="min-w-0">
            <article className="lift fade flex h-full flex-col overflow-hidden rounded-[18px] border border-line bg-surface">
              <Image
                src={project.image.src}
                width={project.image.width}
                height={project.image.height}
                alt={project.image.alt}
                sizes="(min-width: 1120px) 548px, (min-width: 768px) 50vw, 100vw"
                className="aspect-[1.9] w-full border-b border-line object-cover object-top"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-3.5 p-8">
                {project.featured ? (
                  <p className="m-0 self-start rounded-md bg-accent px-2.5 py-1 text-[13px] font-semibold uppercase tracking-[0.06em] text-on-accent">
                    Featured
                  </p>
                ) : null}
                <h3 className="m-0 font-heading text-2xl font-bold leading-[1.2]">
                  {project.title}
                </h3>
                <p className="m-0 text-sm font-semibold text-muted">{project.meta}</p>
                <p className="m-0 text-muted">{project.summary}</p>
                <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                  {project.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </ul>
                <Link
                  href={caseStudyHref(project.slug)}
                  className="mt-auto inline-flex min-h-11 items-center gap-2 self-start font-semibold text-accent underline underline-offset-4"
                >
                  Read the case study
                  <span className="sr-only">: {project.title}</span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
