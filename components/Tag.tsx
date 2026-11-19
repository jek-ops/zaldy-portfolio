export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-md border border-line bg-surface2 px-3 py-1 text-sm font-medium">
      {children}
    </li>
  );
}
