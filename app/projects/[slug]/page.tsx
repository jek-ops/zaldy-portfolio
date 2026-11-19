import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Tag from "@/components/Tag";
import {
  PROJECTS,
  caseStudyHref,
  getProject,
  isPlaceholder,
} from "@/lib/content";
import { SITE } from "@/lib/config";

type Props = { params: Promise<{ slug: string }> };

// Only the known projects exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${SITE.name}`,
    description: project.summary,
  };
}

// Real text is drawn normally; a [PLACEHOLDER] is drawn as a dashed box so it is never mistaken for real content.
function Copy({ text }: { text: string }) {
  if (isPlaceholder(text)) {
    return (
      <p className="m-0 rounded-lg border border-dashed border-line2 bg-surface2 px-4 py-3 text-muted">
        {text}
      </p>
    );
  }
  return <p className="m-0 max-w-[720px] text-lg">{text}</p>;
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3 border-t border-line pt-8 first:border-t-0 first:pt-0">
      <h2 className="m-0 font-heading text-2xl font-bold leading-[1.2]">{title}</h2>
      {children}
    </section>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { caseStudy: cs } = project;
  const others = PROJECTS.filter((p) => p.slug !== project.slug);

  return (
    <main id="main" className="bg-blueprint border-b border-line">
      <article className="mx-auto flex max-w-[860px] flex-col gap-10 px-6 py-16">
        <header className="flex flex-col items-start gap-4">
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-accent underline underline-offset-4"
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
              <path d="M19 12H5" />
              <path d="M11 6l-6 6 6 6" />
            </svg>
            Back to all projects
          </Link>
          <p className="m-0 text-sm font-semibold uppercase tracking-[0.08em] text-accent">
            Case study
          </p>
          <h1 className="m-0 font-heading text-[clamp(34px,5vw,52px)] font-bold leading-[1.1] tracking-[-0.02em]">
            {project.title}
          </h1>
          <p className="m-0 text-sm font-semibold text-muted">{project.meta}</p>
          <p className="m-0 max-w-[720px] text-lg text-muted">{project.summary}</p>
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </ul>
        </header>

        <div className="flex flex-col gap-8 rounded-2xl border border-line bg-surface p-6 sm:p-10">
          <Block title="The problem">
            <Copy text={cs.problem} />
          </Block>

          <Block title="My role">
            <p className="m-0 text-lg font-semibold">{cs.role}</p>
            <Copy text={cs.roleDetail} />
          </Block>

          <Block title="Tools">
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {cs.tools.map((tool) =>
                isPlaceholder(tool) ? (
                  <li
                    key={tool}
                    className="rounded-md border border-dashed border-line2 bg-surface2 px-3 py-1 text-sm text-muted"
                  >
                    {tool}
                  </li>
                ) : (
                  <Tag key={tool}>{tool}</Tag>
                ),
              )}
            </ul>
          </Block>

          <Block title="What I made">
            <Copy text={cs.made} />
          </Block>

          <Block title="Screenshots">
            <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
              {cs.images.map((img) => (
                <li key={img.src} className="sm:col-span-2">
                  <Image
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    alt={img.alt}
                    sizes="(min-width: 860px) 780px, 100vw"
                    className="w-full rounded-xl border border-line"
                  />
                </li>
              ))}
              {cs.screenshots.map((shot) => (
                <li key={shot}>
                  <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-line2 bg-surface2 p-4 text-center text-sm font-medium text-muted">
                    {shot}
                  </div>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="What I learned">
            <Copy text={cs.learned} />
          </Block>
        </div>

        <nav aria-label="More projects" className="flex flex-wrap justify-between gap-4">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={caseStudyHref(other.slug)}
              className="lift flex min-h-11 min-w-0 flex-[1_1_260px] flex-col gap-1 rounded-2xl border border-line bg-surface p-5 no-underline"
            >
              <span className="text-sm font-semibold text-muted">Another project</span>
              <span className="font-heading text-lg font-bold text-ink">{other.title}</span>
            </Link>
          ))}
        </nav>
      </article>
    </main>
  );
}
