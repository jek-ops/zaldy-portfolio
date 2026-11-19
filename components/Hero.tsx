import Image from "next/image";
import { FACTS, HERO } from "@/lib/content";
import { RESUME_URL } from "@/lib/config";

const primaryBtn =
  "btn inline-flex min-h-[52px] items-center gap-2 rounded-[10px] bg-accent px-[26px] font-semibold text-on-accent no-underline";
const secondaryBtn =
  "btn inline-flex min-h-[52px] items-center gap-2 rounded-[10px] border border-line2 bg-surface px-[26px] font-semibold text-ink no-underline";

function DownloadIcon() {
  return (
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
      <path d="M12 4v12" />
      <path d="M7 11l5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-blueprint border-b border-line">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-16 px-6 pb-[72px] pt-20">
        <div className="flex flex-wrap items-center gap-14">
          <div className="flex min-w-0 flex-[1_1_480px] flex-col items-start gap-6">
            <p className="m-0 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-semibold">
              <span
                aria-hidden="true"
                className="dot size-2.5 rounded-full bg-accent"
              />
              {HERO.pill}
            </p>
            <h1 className="m-0 font-heading text-[clamp(38px,5.4vw,64px)] font-bold leading-[1.05] tracking-[-0.025em]">
              {HERO.headlineStart}
              <span className="text-accent">{HERO.headlineAccent}</span>
            </h1>
            <p className="m-0 max-w-[560px] text-lg text-muted">{HERO.text}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <a href="#projects" className={primaryBtn}>
                View my projects
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
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </a>
              {RESUME_URL ? (
                <a href={RESUME_URL} download className={secondaryBtn}>
                  <DownloadIcon />
                  Download resume (PDF)
                </a>
              ) : (
                <>
                  {/* No resume file yet: a clearly disabled button, never a dead download link. */}
                  <button
                    type="button"
                    disabled
                    className="inline-flex min-h-[52px] cursor-not-allowed items-center gap-2 rounded-[10px] border border-dashed border-line2 bg-surface px-[26px] font-semibold text-muted"
                  >
                    <DownloadIcon />
                    Download resume (PDF)
                  </button>
                  <span className="text-sm text-muted">[RESUME PDF NOT ADDED YET]</span>
                </>
              )}
            </div>
          </div>

          <div className="flex min-w-[260px] flex-[0_1_380px] flex-col">
            <Image
              src="/images/zaldy-portrait.webp"
              width={960}
              height={960}
              priority
              alt="Portrait of Zaldy Sabornay Jr in a dark suit, white shirt and dark tie, against a light blue background."
              sizes="(min-width: 768px) 380px, 100vw"
              className="h-[400px] w-full rounded-[20px] border border-line object-cover object-top"
            />
            <div className="relative -mt-11 mx-5 flex flex-col gap-0.5 rounded-[14px] border border-line bg-surface px-5 py-4 shadow-[0_12px_28px_var(--shadow)]">
              <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.06em] text-accent">
                {HERO.latest.label}
              </p>
              <p className="m-0 font-semibold">{HERO.latest.name}</p>
              <p className="m-0 text-sm text-muted">{HERO.latest.role}</p>
            </div>
          </div>
        </div>

        <ul className="m-0 flex list-none flex-wrap gap-4 p-0">
          {FACTS.map((fact) => (
            <li
              key={fact.value}
              className="flex flex-[1_1_220px] items-center gap-4 rounded-[14px] border border-line bg-surface px-6 py-5"
            >
              <span className="font-heading text-4xl font-bold leading-none text-accent">
                {fact.value}
              </span>
              <span className="font-medium leading-snug">{fact.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
