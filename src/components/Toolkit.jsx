import { tools } from "../data/projects";
import { SectionLabel } from "./SectionLabel";

export function Toolkit() {
  return <section className="page-wrap grid gap-14 py-24 sm:py-32 lg:grid-cols-[.8fr_1.2fr] lg:gap-[100px]"><div><SectionLabel>04 / Toolkit</SectionLabel><h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.6rem)] font-bold leading-[.92] tracking-[-.08em]">What I work<br /><em className="not-italic text-[#829d18]">with.</em></h2></div><div className="border-t border-line">{tools.map(([name, description], index) => <div className="grid grid-cols-[30px_1fr] gap-x-4 gap-y-2 border-b border-line py-5 sm:grid-cols-[40px_160px_1fr] sm:items-center" key={name}><span className="font-mono text-[.65rem] text-[#829d18]">{String(index + 1).padStart(2, "0")}</span><strong className="font-display text-[.8rem]">{name}</strong><p className="col-start-2 m-0 text-[.75rem] leading-[1.5] text-muted sm:col-start-auto">{description}</p></div>)}</div></section>;
}
