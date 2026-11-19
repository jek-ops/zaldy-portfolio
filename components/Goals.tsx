import SectionHeading from "@/components/SectionHeading";
import { GOALS } from "@/lib/content";

export default function Goals() {
  return (
    <section
      id="goals"
      className="mx-auto flex max-w-[1120px] flex-col gap-7 px-6 py-[72px]"
    >
      <SectionHeading eyebrow="Career goals" title="Where I am going" />
      <ol className="m-0 flex list-none flex-wrap gap-6 p-0">
        {GOALS.map((goal, i) => (
          <li
            key={goal.title}
            className="lift flex min-w-0 flex-[1_1_280px] flex-col gap-2.5 rounded-2xl border border-line bg-surface p-7"
          >
            <span
              aria-hidden="true"
              className="font-heading text-base font-bold text-accent"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="m-0 font-heading text-[22px] font-bold">{goal.title}</h3>
            <p className="m-0 text-muted">{goal.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
