// All page copy lives here (from Zaldy's resume and Jay's notes).
// Anything not supplied yet is written as a [PLACEHOLDER] so it stays visible.
// Zaldy has school projects only (e-Borrow and SafeCheck-SignSpeak): no freelance work.
// Roles (Jay, Nov 19): SafeCheck-SignSpeak = Documenter and QA Specialist.
//                      e-Borrow = Documenter and UI/UX Designer.

export const HERO = {
  pill: "Documenter · QA Specialist · UI/UX Designer",
  headlineStart: "I make projects clear, tested and ",
  headlineAccent: "easy to use.",
  text: "I am Zaldy, a documenter, QA specialist and UI/UX designer with an IT background from STI College. I write project documentation, test systems and design interfaces for team projects.",
  latest: {
    label: "Latest project",
    name: "SafeCheck-SignSpeak",
    role: "Documenter and QA Specialist",
  },
} as const;

export const FACTS = [
  { value: "2", text: "team projects where I wrote the documentation" },
  { value: "1", text: "capstone where I was also the QA specialist" },
  { value: "1", text: "certification: Java Fundamentals (June 2024)" },
] as const;

export type SkillCategory = {
  id: string;
  label: string;
  note: string;
  items: readonly string[];
};

export const SKILLS: readonly SkillCategory[] = [
  {
    id: "docs",
    label: "Documentation and QA",
    note: "How I keep a project clear, tested and supported.",
    items: [
      "Technical Documentation",
      "Quality Assurance (QA)",
      "Technical Support Knowledge",
      "Basic Computer Troubleshooting",
    ],
  },
  {
    id: "design",
    label: "Design",
    note: "How I plan and shape interfaces people can use.",
    items: ["UI/UX Design", "Web Interface Design"],
  },
  {
    id: "basics",
    label: "Technical basics",
    note: "The technical foundation behind my work.",
    items: ["Basic Programming", "Database Handling"],
  },
  {
    id: "people",
    label: "Working with people",
    note: "How I work in a team.",
    items: [
      "Effective Communication (Verbal and Written)",
      "Active Listening",
      "Time Management",
      "Typing Speed and Accuracy",
    ],
  },
];

export type ProjectFilter = "docs" | "qa" | "design";

export const PROJECT_FILTERS: readonly { id: "all" | ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "docs", label: "Documentation" },
  { id: "qa", label: "QA testing" },
  { id: "design", label: "UI/UX design" },
];

export type Shot = { src: string; width: number; height: number; alt: string };

// A string that starts with "[" is a placeholder. The page draws it as a dashed box
// so it can never be mistaken for real content. Zaldy writes the real text.
export type CaseStudy = {
  problem: string;
  role: string;
  roleDetail: string;
  tools: readonly string[];
  made: string;
  images: readonly Shot[];
  screenshots: readonly string[]; // placeholder slots for screenshots still to come
  learned: string;
};

export function isPlaceholder(text: string): boolean {
  return text.startsWith("[");
}

export type Project = {
  slug: string;
  title: string;
  meta: string;
  summary: string;
  tags: readonly string[];
  filters: readonly ProjectFilter[];
  featured?: boolean;
  image: Shot;
  caseStudy: CaseStudy;
};

const SAFECHECK_LANDING: Shot = {
  src: "/images/projects/safecheck-landing.webp",
  width: 1400,
  height: 727,
  alt: "Landing page of SafeCheck-SignSpeak for the Philippine School for the Deaf: the school building behind the school name, a short description and a Sign In button.",
};

const EBORROW_LANDING: Shot = {
  src: "/images/projects/e-borrow-landing.webp",
  width: 856,
  height: 454,
  alt: "Home page of the e-Borrow System for Barangay Alabang: the title, a Browse Equipment button and a photo of the barangay sign.",
};

export const PROJECTS: readonly Project[] = [
  {
    slug: "safecheck-signspeak",
    title: "SafeCheck-SignSpeak",
    meta: "Capstone project · Documenter and QA Specialist · 2025 to 2026",
    summary:
      "Filipino Sign Language recognition and RFID gate attendance for a school for the deaf. I wrote the project documentation and tested the system as part of a team.",
    tags: ["Documentation", "QA Testing"],
    filters: ["docs", "qa"],
    featured: true,
    image: SAFECHECK_LANDING,
    caseStudy: {
      problem:
        "[WRITE 2 TO 3 SENTENCES: what problem did the school have with gate attendance and communication, and who is affected?]",
      role: "Documenter and QA Specialist",
      roleDetail:
        "[WHAT YOU WROTE AND TESTED: for example the paper chapters or manuals you wrote, and the features and cases you tested]",
      tools: ["[TOOLS YOU USED, for example your writing and testing tools]"],
      made: "[WHAT YOU MADE: describe the documents and test work, and who they helped]",
      images: [SAFECHECK_LANDING],
      screenshots: [],
      learned:
        "[WHAT YOU LEARNED: 2 to 3 sentences about testing a system for deaf users and working in a team]",
    },
  },
  {
    slug: "e-borrow",
    title: "e-Borrow Web System",
    meta: "Documenter and UI/UX Designer · 2024 to 2025",
    summary:
      "A responsive web system for borrowing barangay equipment such as tables, chairs and sound systems, built for Barangay Alabang. I wrote the documentation and was the UI/UX designer on the team.",
    tags: ["Documentation", "UI/UX Design"],
    filters: ["docs", "design"],
    image: EBORROW_LANDING,
    caseStudy: {
      problem:
        "[WRITE 2 TO 3 SENTENCES: how did people borrow barangay equipment before this system?]",
      role: "Documenter and UI/UX Designer",
      roleDetail:
        "[WHAT YOU WROTE AND DESIGNED: for example the documents, the screens, the borrowing flow, the layout for phones]",
      tools: ["[TOOLS YOU USED, for example your design and writing tools]"],
      made: "[WHAT YOU MADE: describe the documents and screens, and who used them]",
      images: [EBORROW_LANDING],
      screenshots: [],
      learned: "[WHAT YOU LEARNED: 2 to 3 sentences]",
    },
  },
];

export function caseStudyHref(slug: string): string {
  return `/projects/${slug}`;
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export type JourneyYear = { year: string; title: string; text: string };

export const JOURNEY: readonly JourneyYear[] = [
  {
    year: "2023",
    title: "Started BSIT at STI College",
    text: "I graduated from Tunasan National High School and started my BS in Information Technology at STI College.",
  },
  {
    year: "2024",
    title: "First web system and a Java certification",
    text: "I earned the Java Fundamentals certification in June and worked as the documenter and UI/UX designer on the e-Borrow Web System.",
  },
  {
    year: "2025",
    title: "The capstone",
    text: "I joined SafeCheck-SignSpeak as its documenter and QA specialist.",
  },
  {
    year: "2026",
    title: "Capstone defense",
    text: "I present SafeCheck-SignSpeak at its capstone defense in December, with the documentation and testing I contributed.",
  },
];

// Drafted for Zaldy (Jay asked Claude to write these). Zaldy should read and edit them.
export const GOALS = [
  {
    title: "Next step",
    text: "Start my career in a team where I can work as a documenter, QA tester or UI/UX designer and learn from experienced people.",
  },
  {
    title: "In a few years",
    text: "Grow into a QA or UX specialist who helps teams release software that is clear, well tested and easy to use.",
  },
  {
    title: "Learning now",
    text: "Building on my project experience by improving my UI/UX design skills and learning how professional QA testing is planned and reported.",
  },
] as const;

export const CONTACT = {
  heading: "Let us build something useful together.",
  replyTime: "[REPLY TIME]",
} as const;
