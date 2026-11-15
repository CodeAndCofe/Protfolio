export function SectionLabel({ children, dark = false }) {
  return <p className={`font-mono text-[0.68rem] uppercase tracking-[0.08em] ${dark ? "text-lime" : "text-muted"}`}>{children}</p>;
}
