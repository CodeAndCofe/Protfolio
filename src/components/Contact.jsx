import { SectionLabel } from "./SectionLabel";

export function Contact() {
  return <section className="bg-deep text-paper"><div className="page-wrap grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:items-end lg:gap-20"><div><SectionLabel dark>Available for the next challenge</SectionLabel><h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.6rem)] font-bold leading-[.92] tracking-[-.08em]">Let&apos;s build<br /><em className="not-italic text-lime">something useful.</em></h2></div><div><p className="max-w-[290px] text-[.85rem] leading-[1.7] text-[#a9b3aa]">Open to junior full-stack roles, relocation, and ambitious team projects.</p><a className="mt-5 inline-flex items-center justify-between bg-lime px-5 py-4 text-xs font-extrabold text-ink transition-transform hover:-translate-y-1" href="mailto:adilprogrammer73@gmail.com">adilprogrammer73@gmail.com <span className="ml-3 text-base">↗</span></a></div></div></section>;
}
