export function ProjectCard({ project }) {
  return <article className={`grid min-h-[300px] border border-line transition hover:-translate-y-1 hover:shadow-[9px_9px_0_#d8f36a] max-sm:mb-4 max-sm:block ${project.featured ? "col-span-2 grid-cols-[39%_61%] bg-deep text-paper max-sm:grid-cols-1" : "grid-cols-[39%_61%] bg-[#ebe9e1]"}`}>
    <div className={`relative min-h-full overflow-hidden p-5 ${project.featured ? "bg-lime text-ink" : "bg-[#dfe1d5]"}`}>
      <span className="relative z-10 font-mono text-[.64rem]">{project.number}</span>
      <span className="absolute right-5 top-5 z-10 max-w-[105px] text-right font-mono text-[.64rem] uppercase leading-[1.45]">{project.type}</span>
      <span className="absolute bottom-3 left-6 text-[4.8rem] leading-none">{project.featured ? "✳" : "↗"}</span>
      <span className="absolute -bottom-[70px] -right-[55px] size-[180px] rounded-full border border-current opacity-30 shadow-[0_0_0_25px_transparent,0_0_0_26px_currentColor]" />
    </div>
    <div className="flex min-h-[300px] flex-col justify-between p-7 max-sm:min-h-[260px]">
      <div><h3 className="mb-3 font-display text-[1.65rem] font-bold tracking-[-.06em]">{project.name}</h3><p className={`mb-5 max-w-[350px] text-[.78rem] leading-[1.75] ${project.featured ? "text-[#a9b3aa]" : "text-muted"}`}>{project.description}</p></div>
      <div className="flex items-end justify-between gap-5"><ul className="flex flex-wrap gap-1.5">{project.tags.map((tag) => <li key={tag} className={`border px-2 py-1.5 font-mono text-[.59rem] ${project.featured ? "border-[#526158] text-[#a9b3aa]" : "border-line text-muted"}`}>{tag}</li>)}</ul><a className="shrink-0 text-[.68rem] font-extrabold text-[#829d18]" href={project.link} target="_blank" rel="noopener">View case <span className="ml-2 text-base">↗</span></a></div>
    </div>
  </article>;
}
