// Site-wide constants. Content that Zaldy has not supplied yet stays a visible placeholder.

export const SITE = {
  name: "Zaldy Sabornay Jr",
  monogram: "ZS",
  // Public contact: email only. Never add a phone number or home address anywhere.
  email: "zaldysabornay00@gmail.com",
  title: "Zaldy Sabornay Jr | Documenter, QA Specialist and UI/UX Designer",
  description:
    "Portfolio of Zaldy Sabornay Jr, a documenter, QA specialist and UI/UX designer. Projects, skills and journey.",
} as const;

// Absolute site address for link previews. On Vercel it comes from the production domain;
// locally it falls back to localhost. Nothing to set by hand.
export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

// Accent color: "blue" (default), "teal" or "violet". A config constant, not a user control.
export type Accent = "blue" | "teal" | "violet";
export const ACCENT: Accent = "blue";

export const THEME_STORAGE_KEY = "theme";

// Links Zaldy has not supplied yet are null: the page then shows a visible placeholder,
// never a fake or dead link. Fill these in when he gives the real values.
// The resume in /public was edited from his original PDF: phone, home address and the freelance entry are removed.
export const RESUME_URL: string | null = "/zaldy-sabornay-resume.pdf";
// Zaldy has no LinkedIn, so none is shown.
export const SOCIAL: { github: string | null } = {
  github: "https://github.com/jek-ops",
};

export const NAV_LINKS = [
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Journey", href: "/#journey" },
  { label: "Goals", href: "/#goals" },
] as const;
