import { SITE } from "@/lib/config";

// The dark contact band that sits above the footer is built in phase 2.
export default function Footer() {
  return (
    <footer className="border-t border-[#334155] bg-band text-[#cbd5e1]">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4 text-sm">
        <p className="m-0">
          © 2026 {SITE.name} · Built with Next.js and Tailwind CSS
        </p>
        <a
          href="#top"
          className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-white underline underline-offset-4"
        >
          Back to top
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="M6 11l6-6 6 6" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
