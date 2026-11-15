import { projects } from "../data/projects";
import { SectionLabel } from "./SectionLabel";
import { ProjectCard } from "./ProjectCard";

export function Work() {
  return (
    <section className="page-wrap py-24 sm:py-32" id="work">
      <div className="mb-12 flex items-end justify-between gap-10 max-sm:block">
        <div>
          <SectionLabel>02 / Selected work</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,4.6rem)] font-bold leading-[.92] tracking-[-.08em]">
            Projects with
            <br />
            <em className="not-italic text-[#829d18]">a point of view.</em>
          </h2>
        </div>
        <p className="mt-7 max-w-[280px] text-[.83rem] leading-[1.7] text-muted">
          From memory management to movie recommendations, every project has
          been a way to understand a layer deeper.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 max-sm:block">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}