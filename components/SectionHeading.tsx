export default function SectionHeading({
  eyebrow,
  title,
  hint,
}: {
  eyebrow: string;
  title: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="m-0 text-sm font-semibold uppercase tracking-[0.08em] text-accent">
        {eyebrow}
      </p>
      <h2 className="m-0 font-heading text-4xl font-bold leading-[1.2] tracking-[-0.01em]">
        {title}
      </h2>
      {hint ? <p className="m-0 text-muted">{hint}</p> : null}
    </div>
  );
}
